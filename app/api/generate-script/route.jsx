import { GenerateScript } from "@/configs/AImodel";
import { NextResponse } from "next/server";

const SCRIPT = `Write 2 different and each unique script for 40 seconds video on the {topic}
give me response in JSON format and follow this schema and dont include title under script
and dont give the description about the surrounding generate only the script northing else 
and surely avoid description of any surrounding or sound
{
scripts:[
{
content:"
},
],
}`

export async function POST(req) {
    const { topic } = await req.json();
    const PROMPT = SCRIPT.replace('{topic}', topic)

    const result = await GenerateScript.sendMessage(PROMPT)
    const res = result?.response?.text();

    return NextResponse.json(JSON.parse(res));
}