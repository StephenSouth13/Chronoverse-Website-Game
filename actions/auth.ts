"use server"

import { redirect } from "next/navigation"

export async function loginAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

  const username = formData.get("username") as string
  const password = formData.get("password") as string

  // Basic validation (replace with actual backend validation)
  if (!username || !password) {
    return { success: false, message: "Username and password are required." }
  }

  // Simulate successful login for "testuser" with "password"
  if (username === "testuser" && password === "password") {
    // In a real app, you'd set a session cookie here
    redirect("/?login=success") // Redirect on success
  } else {
    return { success: false, message: "Invalid username or password." }
  }
}

export async function registerAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

  const username = formData.get("username") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string

  // Basic validation (replace with actual backend validation)
  if (!username || !password || !confirmPassword) {
    return { success: false, message: "All fields are required." }
  }
  if (password !== confirmPassword) {
    return { success: false, message: "Passwords do not match." }
  }
  if (password.length < 6) {
    return { success: false, message: "Password must be at least 6 characters long." }
  }

  // Simulate successful registration
  // In a real app, you'd hash the password and save to a database
  console.log(`User ${username} registered with password ${password}`)
  redirect("/login?register=success") // Redirect to login on successful registration
}
