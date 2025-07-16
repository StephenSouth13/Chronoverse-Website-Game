import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: openai("gpt-4o"), // Using gpt-4o as a powerful general model
      prompt: prompt,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error in AI chat API:", error)
    return NextResponse.json({ error: "Failed to generate response from AI" }, { status: 500 })
  }
}
