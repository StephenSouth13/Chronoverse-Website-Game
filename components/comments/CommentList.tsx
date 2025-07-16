"use client"

import { useEffect, useState } from "react"
import GlassmorphismCard from "@/components/common/GlassmorphismCard"
import { getComments } from "@/actions/comments"
import { useLanguage } from "@/lib/i18n"
import { Loader2 } from "lucide-react"

interface Comment {
  id: string
  username: string
  text: string
  date: string
}

interface CommentListProps {
  articleSlug: string
  refreshTrigger: number // Prop to trigger re-fetch
}

export default function CommentList({ articleSlug, refreshTrigger }: CommentListProps) {
  const { t } = useLanguage()
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true)
      try {
        const fetchedComments = await getComments(articleSlug)
        setComments(fetchedComments)
      } catch (error) {
        console.error("Failed to fetch comments:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchComments()
  }, [articleSlug, refreshTrigger]) // Re-fetch when refreshTrigger changes

  if (isLoading) {
    return (
      <GlassmorphismCard className="p-6 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-electric-blue mr-2" />
        <span className="text-muted-foreground">{t("loading")}...</span>
      </GlassmorphismCard>
    )
  }

  return (
    <GlassmorphismCard className="p-6">
      <h3 className="text-2xl font-heading text-nebula-purple mb-4">{t("comments")}</h3>
      {comments.length === 0 ? (
        <p className="text-muted-foreground italic">{t("noComments")}</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-glass-border pb-4 last:border-b-0">
              <div className="flex items-center mb-2">
                <span className="font-semibold text-electric-blue mr-2">{comment.username}</span>
                <span className="text-sm text-muted-foreground">{comment.date}</span>
              </div>
              <p className="text-foreground">{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </GlassmorphismCard>
  )
}
