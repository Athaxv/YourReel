import { createClient } from "@deepgram/sdk";
import { inngest } from "./client";
import { GenerateImageScript } from "@/configs/AImodel";
import { ConvexHttpClient } from "convex/browser";

const imagePrompt = `Generate Image prompt of {style} style with all the details for 30 seconds video : script: {script}
- Just give specifying Image prompt which depends on the story line
- do not give camera angle image prompt
- follow the following schema and return JSON data (max 6 -7 images)
- [
  {
    imagePrompt: '',
    sceneContent: '<script Content>'
  }
]`

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

const BASE_URL='https://aigurulab.tech';
export const GenerateVideoData = inngest.createFunction(
  {id: 'generate-video-data'},
  {event: 'generate-video-data'},
  async({ event, step })=> {

    const {script, Topic, Title, captions, ImageStyle, Voice, recordId} = event?.data;
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL)

    const GenerateAudioFile = await step.run(
      "GenerateAudioFile",
      async() => {
        const result = await axios.post(BASE_URL+'/api/text-to-speech',
          {
              input:  script,
              voice: Voice
          },
          {
              headers: {
                  'x-api-key': process.env.NEXT_PUBLIC_API_KEY, // Your API Key
                  'Content-Type': 'application/json', // Content Type
              },
          })
       console.log(result.data.audio) //Output Result: Audio Mp3 Url
        return result.data.audio;
      }
    )

    const GenerateCaption = await step.run(
      "generateCaption",
      async () => {
        const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY)

        const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
          {
            url: GenerateAudioFile,
          },
          // STEP 3: Configure Deepgram options for audio analysis
          {
            model: "nova-3",
          }
        );
        return result.results?.channels[0]?.alternatives[0]?.words;
      }
    )

    const GenerateImagePrompt = await step.run(
      "GenerateImagePrompt",
      async () => {
        const FINAL_PROMPT = imagePrompt.replace('{style}', ImageStyle).replace('{script}', script)
        const result = await GenerateImageScript.sendMessage(FINAL_PROMPT)
        const resp = JSON.parse(result.response.text())
        return resp;
      }
    )

    const GenerateImages = await step.run(
      "generateImages",
      async () => {
        let images = [],
        images = await Promise.all(
          GenerateImagePrompt.map(async(element) => {
            const result = await axios.post(BASE_URL+'/api/generate-image',
              {
                  width: 1024,
                  height: 1024,
                  input: element?.imagePrompt,
                  model: 'sdxl',//'flux'
                  aspectRatio:"1:1"//Applicable to Flux model only
              },
              {
                  headers: {
                      'x-api-key': process.env.NEXT_PUBLIC_API_KEY, // Your API Key
                      'Content-Type': 'application/json', // Content Type
                  },
              })
                  return result.data.image
          })
        )
        return images;
      }
    )

    const updateDB = await step.run(
      'UpdateDB',
      async () => {
        const result = await convex.mutation(api.videoData.UpdateVideoRecord, {
          recordId: recordId,
          audioUrl: '',
          captionJson: [],
          images: []
        })
        return result
      }
    )
    return GenerateImages;
  }
)
