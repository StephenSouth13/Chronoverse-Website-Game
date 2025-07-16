"use client"

import { mockNews } from "@/lib/data"
import { notFound } from "next/navigation"
import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"
import GlassmorphismCard from "@/components/common/GlassmorphismCard"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import Markdown from "react-markdown"
import CommentForm from "@/components/comments/CommentForm" // Import CommentForm
import CommentList from "@/components/comments/CommentList" // Import CommentList
import { useAuth } from "@/lib/auth" // Import useAuth
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NewsArticlePageProps {
  params: { slug: string }
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { lang, t } = useLanguage()
  const { user } = useAuth() // Get user from auth context
  const [refreshComments, setRefreshComments] = useState(0) // State to trigger comment refresh

  const article = mockNews.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const title = lang === "vi" ? article.title : article.title_en
  const content = lang === "vi" ? article.content : article.content_en

  const handleCommentPosted = () => {
    setRefreshComments((prev) => prev + 1) // Increment to trigger re-fetch
  }

  return (
    <div className="min-h-screen bg-deep-space text-foreground pt-24 pb-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl md:text-5xl font-heading text-electric-blue mb-4">{title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            {article.type} - {article.date}
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-xl">
            <Image
              src={article.thumbnail || "/placeholder.svg"}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-75"
            />
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.3}>
          <GlassmorphismCard className="p-8 prose prose-invert max-w-none">
            <Markdown>{content}</Markdown>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>

        {/* Comment Section */}
        <ScrollAnimationWrapper delay={0.4} className="mt-12">
          <h2 className="text-3xl font-heading text-electric-blue mb-6">{t("comments")}</h2>
          {user ? (
            <CommentForm articleSlug={article.slug} username={user.username} onCommentPosted={handleCommentPosted} />
          ) : (
            <GlassmorphismCard className="p-6 mb-8 text-center">
              <p className="text-muted-foreground mb-4">{t("loginToComment")}</p>
              <Link href="/login">
                <Button className="bg-electric-blue text-deep-space hover:bg-metallic-gold transition-all duration-300 px-6 py-2 text-md font-bold rounded-full shadow-lg hover:shadow-electric-blue/50">
                  {t("login")}
                </Button>
              </Link>
            </GlassmorphismCard>
          )}
          <CommentList articleSlug={article.slug} refreshTrigger={refreshComments} />
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}
