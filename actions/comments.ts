"use server"

interface Comment {
  id: string
  username: string
  text: string
  date: string
}

// In a real application, this would interact with a database
const comments: Record<string, Comment[]> = {} // Stores comments per article slug

export async function addComment(articleSlug: string, username: string, commentText: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay

  if (!username || !commentText) {
    return { success: false, message: "Username and comment text are required." }
  }

  const newComment: Comment = {
    id: Date.now().toString(),
    username,
    text: commentText,
    date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
  }

  if (!comments[articleSlug]) {
    comments[articleSlug] = []
  }
  comments[articleSlug].push(newComment)

  return { success: true, comment: newComment }
}

export async function getComments(articleSlug: string): Promise<Comment[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay
  return comments[articleSlug] || []
}
