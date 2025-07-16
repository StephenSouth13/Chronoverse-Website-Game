export interface NewsArticle {
  slug: string
  title: string
  title_en: string
  date: string
  type: "Devlog" | "Patch Notes" | "Event" | "Lore"
  thumbnail: string
  shortDescription: string
  shortDescription_en: string
  content: string
  content_en: string
}

export interface FAQItem {
  question: string
  question_en: string
  answer: string
  answer_en: string
}

export interface KeyFeature {
  icon: string // Lucide icon name
  title: string
  title_en: string
  description: string
  description_en: string
}

export interface Chapter {
  id: string
  name: string
  name_en: string
  icon: string // Lucide icon name
  theme: string
  theme_en: string
  description: string
  description_en: string
  image: string
}
