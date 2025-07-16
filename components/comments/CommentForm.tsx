"use client"

import type React from "react"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { toast } from "@/hooks/use-toast"
import { addComment } from "@/actions/comments"
import GlassmorphismCard from "@/components/ui/glassmorphism-card" // Import GlassmorphismCard

interface CommentFormProps {
  articleSlug: string
  username: string
  onCommentPosted: () => void
}

export default function CommentForm({ articleSlug, username, onCommentPosted }: CommentFormProps) {
  const { t } = useLanguage()
  const [commentText, setCommentText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (commentText.trim() === "") return

    setIsSubmitting(true)
    try {
      const result = await addComment(articleSlug, username, commentText)
      if (result.success) {
        toast({
          title: t("commentSuccess"),
          variant: "default",
        })
        setCommentText("")
        onCommentPosted() // Notify parent to refresh comments
      } else {
        toast({
          title: t("commentError"),
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error posting comment:", error)
      toast({
        title: t("commentError"),
        description: "An unexpected error occurred.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <GlassmorphismCard className="p-6 mb-8">
      <h3 className="text-2xl font-heading text-metallic-gold mb-4">{t("addComment")}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder={t("commentPlaceholder")}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows={4}
          className="glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          className="bg-electric-blue text-deep-space hover:bg-metallic-gold transition-all duration-300 px-6 py-2 text-md font-bold rounded-full shadow-lg hover:shadow-electric-blue/50 flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t("postComment")}
        </Button>
      </form>
    </GlassmorphismCard>
  )
}
