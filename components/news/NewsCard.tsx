"use client"

import Image from "next/image"
import Link from "next/link"
import type { NewsArticle } from "@/lib/types"
import GlassmorphismCard from "@/components/common/GlassmorphismCard"
import { useLanguage } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export default function NewsCard({ article }: { article: NewsArticle }) {
  const { lang, t } = useLanguage()
  const title = lang === "vi" ? article.title : article.title_en
  const shortDescription = lang === "vi" ? article.shortDescription : article.shortDescription_en

  return (
    <GlassmorphismCard className="flex flex-col h-full hover:shadow-nebula-purple/30 hover:scale-[1.02] transition-all duration-300">
      <div className="relative w-full h-48 rounded-t-lg overflow-hidden mb-4">
        <Image
          src={article.thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-sm text-electric-blue font-semibold mb-2">
          {article.type} - {article.date}
        </span>
        <h3 className="text-xl font-heading text-metallic-gold mb-2 flex-grow">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{shortDescription}</p>
        <Link href={`/news/${article.slug}`} className="mt-auto">
          <Button
            variant="outline"
            className="w-full border-nebula-purple text-nebula-purple hover:bg-nebula-purple hover:text-white transition-colors duration-300 bg-transparent"
          >
            {t("readMore")}
          </Button>
        </Link>
      </div>
    </GlassmorphismCard>
  )
}
