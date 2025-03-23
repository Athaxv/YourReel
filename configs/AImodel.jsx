const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
//   async function run() {
    export const GenerateScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write many different and each unique script for 40 seconds video on the topic\ngive me nresponse in JSON format and follow this schema\n{\nscripts:[\n{\ncontent:\"\n},\n],\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"title\": \"Inspiring Sunrise\",\n      \"content\": \"(0-5 seconds) VISUAL: Fast montage of people waking up, yawning, stretching, preparing coffee.\\n(5-15 seconds) VISUAL: Stunning sunrise over a cityscape or natural landscape. Uplifting music begins.\\n(15-25 seconds) VOICE-OVER: \\\"Every day is a new beginning. A chance to chase your dreams, rewrite your story.\\\"\\n(25-35 seconds) VISUAL: People engaged in various activities - working, exercising, creating art, spending time with loved ones.\\n(35-40 seconds) VOICE-OVER: \\\"Make it count. Make it yours.\\\" VISUAL: Company logo with tagline. Music swells.\"\n    },\n    {\n      \"title\": \"Tech Innovation\",\n      \"content\": \"(0-5 seconds) VISUAL: Close-up shot of hands typing code or interacting with a futuristic interface. Fast-paced electronic music begins.\\n(5-15 seconds) VISUAL: Animated graphics showcasing data flow, network connections, and innovative technologies.\\n(15-25 seconds) VOICE-OVER: \\\"The future is being built, line by line, connection by connection.\\\"\\n(25-35 seconds) VISUAL: Examples of the technology in use - smart homes, autonomous vehicles, advanced healthcare.\\n(35-40 seconds) VOICE-OVER: \\\"Join the revolution. Innovation starts here.\\\" VISUAL: Company logo with website address. Music fades.\"\n    },\n    {\n      \"title\": \"Sustainable Living\",\n      \"content\": \"(0-5 seconds) VISUAL: Timelapse of a flower blooming or a seed sprouting. Gentle, nature-inspired music begins.\\n(5-15 seconds) VISUAL: Images of sustainable practices - recycling, solar panels, community gardens, electric vehicles.\\n(15-25 seconds) VOICE-OVER: \\\"Our planet. Our responsibility. Small changes can make a big difference.\\\"\\n(25-35 seconds) VISUAL: Happy people participating in eco-friendly activities - hiking, planting trees, using reusable bags.\\n(35-40 seconds) VOICE-OVER: \\\"Live sustainably. Live consciously. Live responsibly.\\\" VISUAL: Company logo with a focus on sustainability. Music swells slightly.\"\n    },\n    {\n      \"title\": \"Coffee Break Ritual\",\n      \"content\": \"(0-5 seconds) VISUAL: Close-up of coffee beans being ground. Sound of grinding coffee.\\n(5-15 seconds) VISUAL: Slow-motion pour of coffee into a cup. Rich, warm colors. Relaxing jazz music begins.\\n(15-25 seconds) VOICE-OVER: \\\"Take a moment. Breathe. Recharge.\\\"\\n(25-35 seconds) VISUAL: People enjoying coffee in different settings - at home, in a cafe, at the office. Smiling faces.\\n(35-40 seconds) VOICE-OVER: \\\"Your perfect coffee break starts here.\\\" VISUAL: Brand logo with a cup of coffee. Music fades.\"\n    },\n    {\n      \"title\": \"Travel Adventure\",\n      \"content\": \"(0-5 seconds) VISUAL: Fast-paced montage of travel scenes - passport stamps, packing a suitcase. Upbeat, adventurous music begins.\\n(5-15 seconds) VISUAL: Stunning landscapes from around the world - mountains, beaches, forests. Drone shots.\\n(15-25 seconds) VOICE-OVER: \\\"The world is waiting. Adventure is calling.\\\"\\n(25-35 seconds) VISUAL: People experiencing new cultures, trying new foods, meeting new people. Joyful moments.\\n(35-40 seconds) VOICE-OVER: \\\"Explore. Discover. Live without limits.\\\" VISUAL: Travel company logo with website address. Music swells.\"\n    },\n    {\n      \"title\": \"Fitness Motivation\",\n      \"content\": \"(0-5 seconds) VISUAL: Alarm clock ringing. Someone reluctantly turning it off. Energetic music begins.\\n(5-15 seconds) VISUAL: Montage of diverse people working out in various ways - running, lifting weights, yoga.\\n(15-25 seconds) VOICE-OVER: \\\"Push your limits. Break your boundaries. Feel the power.\\\"\\n(25-35 seconds) VISUAL: People celebrating their fitness achievements - high-fives, smiles, feeling accomplished.\\n(35-40 seconds) VOICE-OVER: \\\"Unlock your potential. Start today.\\\" VISUAL: Fitness app or gym logo with website. Music peaks.\"\n    },\n    {\n      \"title\": \"Creative Spark\",\n      \"content\": \"(0-5 seconds) VISUAL: A blank canvas, an open notebook, a musical instrument. Inspiring, melodic music begins.\\n(5-15 seconds) VISUAL: Hands creating art - painting, writing, playing music, sculpting. Focus on the process.\\n(15-25 seconds) VOICE-OVER: \\\"Unleash your creativity. Express your vision. Inspire the world.\\\"\\n(25-35 seconds) VISUAL: Examples of finished artwork - paintings, books, music videos, sculptures. Diverse styles.\\n(35-40 seconds) VOICE-OVER: \\\"Create something amazing.\\\" VISUAL: Arts organization logo with website address. Music fades.\"\n    },\n    {\n      \"title\": \"Gaming Excitement\",\n      \"content\": \"(0-5 seconds) VISUAL: Close-up of a gaming controller or keyboard. Electronic, fast-paced gaming music begins.\\n(5-15 seconds) VISUAL: In-game footage from a popular video game. Action-packed scenes.\\n(15-25 seconds) VOICE-OVER: \\\"Enter the game. Conquer the challenge. Become the legend.\\\"\\n(25-35 seconds) VISUAL: Gamers reacting to exciting moments, cheering, strategizing. Community and teamwork.\\n(35-40 seconds) VOICE-OVER: \\\"Level up your game.\\\" VISUAL: Gaming platform logo with website. Music swells.\"\n    },\n    {\n      \"title\": \"Delicious Food Journey\",\n      \"content\": \"(0-5 seconds) VISUAL: Sizzling food on a grill or stove. Appetizing sounds of cooking.\\n(5-15 seconds) VISUAL: Close-up shots of beautifully plated dishes. Vibrant colors. Upbeat, playful music begins.\\n(15-25 seconds) VOICE-OVER: \\\"Taste the world. Experience the flavors. Indulge your senses.\\\"\\n(25-35 seconds) VISUAL: People enjoying food in various restaurants or at home. Smiling faces.\\n(35-40 seconds) VOICE-OVER: \\\"Your next culinary adventure awaits.\\\" VISUAL: Restaurant logo with website. Music fades.\"\n    },\n    {\n      \"title\": \"Education Empowerment\",\n      \"content\": \"(0-5 seconds) VISUAL: Open book with light shining on it. Inspiring, thoughtful music begins.\\n(5-15 seconds) VISUAL: Students learning in different settings - classrooms, libraries, online courses.\\n(15-25 seconds) VOICE-OVER: \\\"Knowledge is power. Education is freedom. Unlock your potential.\\\"\\n(25-35 seconds) VISUAL: Graduates celebrating their achievements, receiving diplomas, looking towards the future.\\n(35-40 seconds) VOICE-OVER: \\\"Empower yourself through education.\\\" VISUAL: University or educational platform logo. Music swells.\"\n    }\n  ]\n}\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Write many different and each unique script for 40 seconds video on the topic (mature)\ngive me nresponse in JSON format and follow this schema with only the content in the script\n{\nscripts:[\n{\ncontent:\"\n},\n],\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"(0-5 seconds) VISUAL: Slow-motion shot of a hand tracing the curve of a bare back. Soft, sensual music begins.\\n(5-15 seconds) VISUAL: Close-up shots of lips meeting, hands intertwining, skin shimmering in low light.\\n(15-25 seconds) VOICE-OVER: \\\"Desire. A whisper in the dark. A longing that burns within.\\\"\\n(25-35 seconds) VISUAL: Implied intimacy - shadows dancing on the wall, a glimpse of bare skin, a lingering touch.\\n(35-40 seconds) VOICE-OVER: \\\"Embrace the passion. Surrender to the moment.\\\" VISUAL: A stylized logo with suggestive imagery. Music fades.\"\n    },\n    {\n      \"content\": \"(0-5 seconds) VISUAL: A single red rose slowly unfurls its petals. Sultry jazz music begins.\\n(5-15 seconds) VISUAL: Close-up shot of a woman's eyes, filled with both vulnerability and power.\\n(15-25 seconds) VOICE-OVER: \\\"Forbidden fruit. Temptation's allure. A dance on the edge of control.\\\"\\n(25-35 seconds) VISUAL: Suggestive imagery - silk sheets, a spilled glass of wine, a half-eaten piece of chocolate.\\n(35-40 seconds) VOICE-OVER: \\\"Indulge your fantasies. Dare to desire.\\\" VISUAL: A mysterious brand logo. Music intensifies.\"\n    },\n    {\n      \"content\": \"(0-5 seconds) VISUAL: A lit candle slowly melts, wax dripping down its side. Atmospheric, sensual music begins.\\n(5-15 seconds) VISUAL: Close-up shots of hands exploring textures - velvet, leather, bare skin.\\n(15-25 seconds) VOICE-OVER: \\\"Sensuality. A language spoken without words. A connection that transcends the physical.\\\"\\n(25-35 seconds) VISUAL: Suggestive silhouettes, soft lighting, focusing on the artistry of the human form.\\n(35-40 seconds) VOICE-OVER: \\\"Unleash your inner goddess. Celebrate your body.\\\" VISUAL: A sophisticated and minimalist logo. Music fades slowly.\"\n    },\n    {\n      \"content\": \"(0-5 seconds) VISUAL: A hand slowly pours dark liquid (e.g., chocolate sauce) over fruit. Erotic, playful music begins.\\n(5-15 seconds) VISUAL: Close-up of lips biting into a juicy piece of fruit. Focus on texture and sensation.\\n(15-25 seconds) VOICE-OVER: \\\"Pleasure. A feast for the senses. A celebration of indulgence.\\\"\\n(25-35 seconds) VISUAL: Implied intimacy through suggestive poses and lingering glances.\\n(35-40 seconds) VOICE-OVER: \\\"Satisfy your cravings. Embrace your desires.\\\" VISUAL: A stylish logo with a hint of decadence. Music swells.\"\n    },\n    {\n      \"content\": \"(0-5 seconds) VISUAL: Rain streaks down a windowpane. Moody, melancholic music begins.\\n(5-15 seconds) VISUAL: Close-up of a woman's face, reflecting a mix of longing and regret.\\n(15-25 seconds) VOICE-OVER: \\\"Memories. Echoes of the past. A love that lingers, even in absence.\\\"\\n(25-35 seconds) VISUAL: Flashbacks of intimate moments - shared laughter, tender touches, unspoken words.\\n(35-40 seconds) VOICE-OVER: \\\"The heart remembers what the mind forgets.\\\" VISUAL: A faded, vintage-style logo. Music becomes more poignant.\"\n    }\n  ]\n}\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Write many different and each unique script for 40 seconds video on the topic (mature)\ngive me nresponse in JSON format and follow this schema with only the content in the script\nDo not add scene Discription\n{\nscripts:[\n{\ncontent:\"\n},\n]"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"(0-40) A woman's voice, husky and low: \\\"Come closer. Tell me your secrets. The ones you keep hidden in the shadows of your soul. Let's unravel them, thread by silken thread, until we find the raw, beating heart beneath. I want to know the darkness that makes you shine.\\\" \"\n    },\n    {\n      \"content\": \"(0-10) Sound of a zipper slowly being undone. (10-25) A man's voice, breathy: \\\"I shouldn't be here... with you... like this.\\\" (25-40) A woman's voice, close to his ear: \\\"But you are. And you want to be. Don't fight it. Surrender.\\\"\"\n    },\n    {\n      \"content\": \"(0-15) Sound of a heartbeat, gradually increasing in tempo. (15-30) A woman's voice, slightly strained: \\\"Don't stop. Please, don't stop. I need this. I need you.\\\" (30-40) The heartbeat fades into a sigh.\"\n    },\n    {\n      \"content\": \"(0-40) A man's voice, deep and resonant: \\\"I've been watching you. For a long time. Admiring your strength, your fire. Tonight, let me taste it. Let me consume it. Let me make you mine.\\\"\"\n    },\n    {\n      \"content\": \"(0-10) Sound of rain against a window. (10-25) A woman's voice, quiet and vulnerable: \\\"I'm scared.\\\" (25-40) A man's voice, gentle and reassuring: \\\"It's okay to be scared. But I'm here. And I'll protect you. Always.\\\"\"\n    },\n    {\n      \"content\": \"(0-40) Two voices, overlapping and intertwined: \\\"More...\\\" \\\"Again...\\\" \\\"Harder...\\\" \\\"Please...\\\" \\\"Yes...\\\" A crescendo of whispered desires culminating in a shared exhale.\"\n    },\n    {\n      \"content\": \"(0-15) Sound of silk rustling. (15-30) A woman's voice, teasing: \\\"Are you sure you can handle this? I'm not always easy to please.\\\" (30-40) A man's voice, confident and challenging: \\\"Try me.\\\"\"\n    },\n    {\n      \"content\": \"(0-40) A single line of dialogue, delivered with intensity: \\\"Destroy me.\\\"\"\n    },\n     {\n      \"content\": \"(0-10) Sound of a slow, deliberate breath being taken. (10-30) A woman says \\\"You know, it's amazing how one touch can completely change everything. One touch, and suddenly, the world is a different place.\\\" (30-40) Heavy breathing, fades to silence.\"\n    },\n     {\n      \"content\": \"(0-40) A woman speaks slowly, seductively: \\\"The anticipation is always the sweetest part, isn't it? Knowing what's coming, feeling it build inside you. The delicious tension before the release. I could make you wait all night...or give you everything you desire right now.\\\"\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });

    export const GenerateImageScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Image prompt of {style} style with all the details for 30 seconds video : script: {script}\n- Just give specifying Image prompt which depends on the story line\n- do not give camera angle image prompt\n- follow the following schema and return JSON data (max 6 -7 images)\n- [\n  {\n    imagePrompt: '',\n    sceneContent: '<script Content>'\n  }\n]"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I am able to interact with images (e.g. describing or analysing them), but I am unable to generate or edit pixel-based images myself. This capability is only enabled for the \"Gemini 2.0 Flash Experimental\" model when the selected output format is \"Images and text\". However, I can provide you with the JSON data containing image prompts based on your script and style. Please provide the script and style so I can proceed.\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "just generate a scipt\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a script example, and then I'll need you to give me a style so I can generate the image prompts as requested.\n\n**Script:**\n\n**Title:** The Lost Kitten\n\n**(Scene 1)**\n\n**INT. COZY LIVING ROOM - DAY**\n\nSOUND of gentle rain pattering against the window\n\nA little girl, LILLY (6), sits on the rug, drawing with crayons. She has bright eyes and a cheerful demeanor.\n\nLILLY\n(Humming to herself)\n\n**(Scene 2)**\n\n**EXT. GARDEN - DAY**\n\nLilly opens the back door and steps into the garden. The rain has stopped, leaving everything sparkling. She spots a tiny KITTEN, shivering under a rose bush.\n\nLILLY\n(Gasps)\nOh, you poor thing!\n\n**(Scene 3)**\n\n**EXT. GARDEN - CONTINUOUS**\n\nLilly carefully approaches the kitten, extending a hand. The kitten is hesitant but eventually allows Lilly to pet it.\n\nLILLY\nIt's okay, little one. I won't hurt you.\n\n**(Scene 4)**\n\n**INT. COZY LIVING ROOM - LATER**\n\nLilly holds the kitten, wrapped in a soft towel. She feeds it milk from a small dish. The kitten laps it up eagerly.\n\nLILLY\n(Smiling)\nYou're safe now.\n\n**(Scene 5)**\n\n**INT. COZY LIVING ROOM - NIGHT**\n\nLilly and the kitten are snuggled together on the rug, both asleep. A warm light fills the room.\n\n**(Scene 6)**\n\n**EXT. GARDEN - DAY**\n\nLilly plays with the kitten in the garden. Both are happy and carefree.\n\nNow, please provide the desired **style** for the images (e.g., Pixar, watercolor, photorealistic, anime, etc.).  Once I have that, I can give you the JSON with the image prompts.\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Generate Image prompt of {style} style with all the details for 30 seconds video : script: \" Fast cuts of various landscapes: mountains, ocean, desert. Voiceover: \"Are you tired of the ordinary? The predictable?\" People shown doing adventurous activities: rock climbing, kayaking, skydiving.  Voiceover: \"There's a world waiting to be explored. A life waiting to be lived to the fullest.\"  Text on screen: \"Go Beyond.\"\"\n- Just give specifying Image prompt which depends on the story line\n- do not give camera angle image prompt\n- follow the following schema and return JSON data (max 6 -7 images)\n- [\n  {\n    imagePrompt: '',\n    sceneContent: '<script Content>'\n  }\n]"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I can generate the JSON data with image prompts, but I need a style. Please provide the desired **style** for the images (e.g., Pixar, watercolor, photorealistic, anime, etc.). Once I have that, I can give you the JSON with the image prompts.\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "anime"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"Vast, snow-capped mountain range under a vibrant blue sky with fluffy anime-style clouds. Jagged peaks and deep valleys suggest a sense of untamed wilderness. A single, determined climber is visible far below, adding a sense of scale and adventure. Anime art style, bright colors, detailed background.\",\n    \"sceneContent\": \"Fast cuts of various landscapes: mountains\"\n  },\n  {\n    \"imagePrompt\": \"Turquoise ocean waves crashing against rocky cliffs. The sun is setting, casting a warm, orange glow on the water and the rocks. Surfers are riding the waves, silhouetted against the light. Anime art style, dynamic composition, vibrant colors, motion blur.\",\n    \"sceneContent\": \"Fast cuts of various landscapes: ocean\"\n  },\n  {\n    \"imagePrompt\": \"Arid desert landscape with towering sand dunes. The sun beats down relentlessly, creating shimmering mirages in the distance. A lone figure, clad in protective clothing, walks across the dunes, their silhouette stark against the orange sand. Anime art style, warm color palette, sense of isolation.\",\n    \"sceneContent\": \"Fast cuts of various landscapes: desert\"\n  },\n  {\n    \"imagePrompt\": \"Extreme close-up on a climber's hands, gripping a rough rock face. Intense determination etched on their face. The surrounding rocks are blurred, emphasizing the focus and effort. Anime art style, dramatic lighting, high contrast, dynamic composition.\",\n    \"sceneContent\": \"People shown doing adventurous activities: rock climbing\"\n  },\n  {\n    \"imagePrompt\": \"Kayaker paddling through a raging river, surrounded by lush, green rainforest. The water is churning and frothy, and the kayaker is navigating the rapids with skill and determination. Anime art style, dynamic perspective, vibrant colors, sense of adventure.\",\n    \"sceneContent\": \"People shown doing adventurous activities: kayaking\"\n  },\n  {\n    \"imagePrompt\": \"Skydiver soaring through the air with arms outstretched, a huge smile on their face. Below them, the earth stretches out like a patchwork quilt. Blue sky and fluffy clouds surround them. Anime art style, sense of freedom, bright colors, dynamic composition.\",\n    \"sceneContent\": \"People shown doing adventurous activities: skydiving\"\n  },\n  {\n    \"imagePrompt\": \"Simple, clean white text \\\"Go Beyond.\\\" on a background of swirling anime-style clouds in shades of blue and purple. The font is modern and bold, conveying a sense of possibility and adventure.\",\n    \"sceneContent\": \"Text on screen: \\\"Go Beyond.\\\"\"\n  }\n]\n```\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
//   }
  
//   run();