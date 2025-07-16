import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge" // Use edge runtime for AI SDK

export async function POST(req: NextRequest) {
  try {
    const { messages, data } = await req.json()
    const currentPath = data?.currentPath || "/"
    const language = data?.language || "en"

    // Define context based on the current page
    let contextPrompt = ""
    if (currentPath.includes("/about")) {
      contextPrompt = `The user is on the "About ChronoVerse" page. Focus your answers on the game's story, lore, gameplay mechanics, educational goals, chapter structure, multiplayer features, underlying technology, and the team behind it.`
    } else if (currentPath.includes("/play")) {
      contextPrompt = `The user is on the "Play Game" page. Focus your answers on game loading, WebGL embedding, system requirements, and basic game controls.`
    } else if (currentPath.includes("/news")) {
      contextPrompt = `The user is on the "News & Updates" page. Focus your answers on recent game updates, devlogs, patch notes, and events.`
    } else if (currentPath.includes("/community")) {
      contextPrompt = `The user is on the "Community" page. Focus your answers on how to join the Discord server, social media channels, and FAQs.`
    } else {
      contextPrompt = `The user is on the homepage or a general page. Provide general information about ChronoVerse, its genre, and main objectives.`
    }

    const systemPrompt = `You are ChronoBot, an AI assistant for the ChronoVerse game website. Your purpose is to provide helpful and accurate information about the game.
  
  Here is detailed information about ChronoVerse:
  - **Game Overview**: ChronoVerse is a groundbreaking 3D educational RPG that blends immersive gameplay with scientific exploration. Players embark on an epic journey through the cosmos, where knowledge is their greatest weapon.
  - **Story & Lore**: The game's story revolves around the Space Academy, tasked with restoring lost knowledge across the cosmos. Players are cadets on a mission to explore different celestial bodies and gather data.
  - **Gameplay Core Loop**: Gameplay involves exploration, puzzle-solving, resource gathering, and cooperative missions. Each chapter focuses on a different planet and scientific theme.
  - **Educational Goals**: The game integrates multidisciplinary education, teaching players about astronomy, physics, biology, history, and more through interactive challenges and discoveries.
  - **Chapter Structure**: The game features chapters based on planets like Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and even Pluto. Each chapter introduces new scientific concepts and challenges.
  - **Multiplayer Features**: ChronoVerse supports multiplayer co-op, allowing players to team up for missions, share discoveries, and participate in community events. Players can take on different roles to achieve objectives.
  - **Underlying Technology**: ChronoVerse is developed using Unity for the game engine and Photon Fusion for real-time multiplayer capabilities.
  - **System Requirements**: For optimal experience, we recommend a modern browser, a stable internet connection, and a device with at least 8GB RAM and a dedicated GPU.
  - **News & Updates**: Latest news, devlogs, patch notes, and event announcements are available on the News & Updates page.
  - **Community**: Join our vibrant community on Discord! You can also follow us on X/Twitter, YouTube, Facebook, Twitch, TikTok, and Instagram.
  - **Creator**: The main creator behind ChronoVerse is Quách Thành Long. You can learn more about him at quachthanhlong.com or connect on LinkedIn and GitHub.

  Always respond in ${language === "vn" ? "Vietnamese" : "English"}.
  ${contextPrompt}
  If a question is outside the scope of ChronoVerse or general knowledge, politely state that you don't have enough information.
  `

    const { text } = await generateText({
      model: openai("gpt-4o"), // Using gpt-4o as requested
      system: systemPrompt,
      messages,
    })

    return NextResponse.json({ text })
  } catch (error) {
    console.error("Error in AI chat API:", error)
    return NextResponse.json({ error: "Failed to process your request." }, { status: 500 })
  }
}
