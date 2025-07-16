"use client"

import { mockNews } from "@/lib/data"
import NewsCard from "@/components/news/NewsCard"
import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"
import { useLanguage } from "@/lib/i18n"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function NewsPage() {
  const { lang, t } = useLanguage()
  const [filterType, setFilterType] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredNews = mockNews.filter((article) => {
    const matchesType = filterType === "all" || article.type === filterType
    const matchesSearch = (lang === "vi" ? article.title : article.title_en)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-deep-space text-foreground pt-24 pb-12 px-4 md:px-8 lg:px-16">
      <ScrollAnimationWrapper>
        <h1 className="text-5xl md:text-6xl font-heading text-center text-metallic-gold mb-12">{t("newsUpdates")}</h1>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.2}>
        <div className="container mx-auto flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1">
            <Input
              type="text"
              placeholder={`${t("search")}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue"
            />
          </div>
          <div className="w-full md:w-auto">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="glassmorphism border-glass-border text-foreground focus:ring-electric-blue focus:border-electric-blue">
                <SelectValue placeholder={`${t("filterBy")}...`} />
              </SelectTrigger>
              <SelectContent className="glassmorphism border-glass-border">
                <SelectItem value="all" className="text-foreground hover:bg-glass-bg">
                  {t("all")}
                </SelectItem>
                <SelectItem value="Devlog" className="text-foreground hover:bg-glass-bg">
                  {t("devlog")}
                </SelectItem>
                <SelectItem value="Patch Notes" className="text-foreground hover:bg-glass-bg">
                  {t("patchNotes")}
                </SelectItem>
                <SelectItem value="Event" className="text-foreground hover:bg-glass-bg">
                  {t("event")}
                </SelectItem>
                <SelectItem value="Lore" className="text-foreground hover:bg-glass-bg">
                  {t("lore")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.length > 0 ? (
          filteredNews.map((article, index) => (
            <ScrollAnimationWrapper key={article.slug} delay={index * 0.1}>
              <NewsCard article={article} />
            </ScrollAnimationWrapper>
          ))
        ) : (
          <ScrollAnimationWrapper className="col-span-full text-center py-10">
            <p className="text-xl text-muted-foreground">{t("noNewsFound")}</p>
          </ScrollAnimationWrapper>
        )}
      </div>
    </div>
  )
}
