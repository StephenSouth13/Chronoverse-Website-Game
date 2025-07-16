"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkIcon, GraduationCap, Users, Code, Rocket } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const { t } = useTranslation()

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const chapterData = [
    { name: t("mercury"), icon: "/placeholder.svg?height=48&width=48&text=M", description: t("chapter_mercury_desc") },
    { name: t("venus"), icon: "/placeholder.svg?height=48&width=48&text=V", description: t("chapter_venus_desc") },
    { name: t("earth"), icon: "/placeholder.svg?height=48&width=48&text=E", description: t("chapter_earth_desc") },
    { name: t("mars"), icon: "/placeholder.svg?height=48&width=48&text=Ma", description: t("chapter_mars_desc") },
    { name: t("jupiter"), icon: "/placeholder.svg?height=48&width=48&text=J", description: t("chapter_jupiter_desc") },
    { name: t("saturn"), icon: "/placeholder.svg?height=48&width=48&text=S", description: t("chapter_saturn_desc") },
    { name: t("uranus"), icon: "/placeholder.svg?height=48&width=48&text=U", description: t("chapter_uranus_desc") },
    { name: t("neptune"), icon: "/placeholder.svg?height=48&width=48&text=N", description: t("chapter_neptune_desc") },
    { name: t("pluto"), icon: "/placeholder.svg?height=48&width=48&text=P", description: t("chapter_pluto_desc") },
  ]

  return (
    <main className="flex-1 bg-chrono-dark-bg text-chrono-light-gray">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url(/placeholder.svg?height=500&width=1500&text=About%20ChronoVerse%20Banner)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          className="relative z-10 text-4xl md:text-6xl font-bold text-chrono-electric-blue drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("explore_chronoverse")}
        </motion.h1>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24">
        {/* Story & Lore */}
        <motion.section
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div variants={fadeInVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-chrono-electric-blue mb-6">{t("story_lore")}</h2>
            <p className="text-lg mb-4">
              ChronoVerse transports players to a distant future where humanity's knowledge has been scattered across
              the cosmos. As a cadet from the prestigious Space Academy, your mission is to journey through uncharted
              galaxies, recover lost data, and restore the universal library of wisdom.
            </p>
            <p className="text-lg">
              Unravel ancient mysteries, encounter enigmatic alien civilizations, and piece together the fragments of a
              forgotten past that holds the key to the universe's future. Every discovery brings you closer to
              understanding the true nature of ChronoVerse.
            </p>
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <Image
              src="/placeholder.svg?height=400&width=600&text=Story%20Image"
              alt="Story and Lore"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border border-chrono-gray"
            />
          </motion.div>
        </motion.section>

        {/* Gameplay Core Loop */}
        <motion.section
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div variants={fadeInVariants} className="md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-chrono-electric-blue mb-6">{t("gameplay_loop")}</h2>
            <p className="text-lg mb-4">
              At its core, ChronoVerse combines exploration, puzzle-solving, and strategic combat. Players navigate
              stunning 3D environments, from asteroid fields to nebulae, collecting resources and artifacts.
            </p>
            <p className="text-lg">
              Engage in mind-bending puzzles that require scientific understanding, and utilize your knowledge to
              overcome challenges. Combat scenarios are designed to be tactical, encouraging players to use their
              environment and unique abilities.
            </p>
          </motion.div>
          <motion.div variants={fadeInVariants} className="md:order-1">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Gameplay%20Image"
              alt="Gameplay Core Loop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border border-chrono-gray"
            />
          </motion.div>
        </motion.section>

        {/* Educational Goals */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-chrono-electric-blue mb-12">
            {t("educational_goals")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray">
              <CardHeader className="flex flex-col items-center text-center">
                <GraduationCap className="h-12 w-12 text-chrono-electric-blue mb-4" />
                <CardTitle className="text-xl font-semibold text-chrono-electric-blue">Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Learn complex scientific concepts through engaging, hands-on experiences.</p>
              </CardContent>
            </Card>
            <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray">
              <CardHeader className="flex flex-col items-center text-center">
                <Rocket className="h-12 w-12 text-chrono-nebula-purple mb-4" />
                <CardTitle className="text-xl font-semibold text-chrono-nebula-purple">Cosmic Exploration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Discover the wonders of the universe, from planets to black holes, in stunning detail.</p>
              </CardContent>
            </Card>
            <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray">
              <CardHeader className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-chrono-metallic-gold mb-4" />
                <CardTitle className="text-xl font-semibold text-chrono-metallic-gold">Critical Thinking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Develop problem-solving skills by applying scientific principles to in-game challenges.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Chapter Structure */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-chrono-electric-blue mb-12">
            {t("chapter_structure")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {chapterData.map((chapter, index) => (
              <Card
                key={index}
                className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray hover:border-chrono-electric-blue transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="flex flex-col items-center justify-center p-4 text-center h-full">
                  <Image
                    src={chapter.icon || "/placeholder.svg"}
                    alt={chapter.name}
                    width={48}
                    height={48}
                    className="mb-2 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-semibold text-chrono-electric-blue group-hover:text-chrono-electric-blue">
                    {chapter.name}
                  </h3>
                  <p className="text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    {chapter.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Multiplayer Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-chrono-electric-blue mb-12">
            {t("multiplayer_features")}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-chrono-electric-blue mb-4">Cooperative Missions</h3>
              <p className="text-lg mb-4">
                Team up with other cadets to undertake complex missions that require collaboration and diverse skill
                sets. Share resources, strategize, and overcome challenges together.
              </p>
              <h3 className="text-2xl font-semibold text-chrono-electric-blue mb-4">Community Events</h3>
              <p className="text-lg">
                Participate in large-scale community events, from galactic races to scientific expeditions, fostering a
                vibrant and engaging player community.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Multiplayer%20Image"
                alt="Multiplayer Features"
                width={600}
                height={400}
                className="rounded-lg shadow-lg border border-chrono-gray"
              />
            </div>
          </div>
        </motion.section>

        {/* Underlying Technology */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-chrono-electric-blue mb-12">
            {t("underlying_tech")}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray flex flex-col items-center p-6">
              <Code className="h-16 w-16 text-chrono-electric-blue mb-4" />
              <h3 className="text-xl font-semibold text-chrono-electric-blue">Unity Engine</h3>
              <p className="text-sm text-center">Powerful 3D game development platform.</p>
            </Card>
            <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray flex flex-col items-center p-6">
              <Users className="h-16 w-16 text-chrono-nebula-purple mb-4" />
              <h3 className="text-xl font-semibold text-chrono-nebula-purple">Photon Fusion</h3>
              <p className="text-sm text-center">High-performance multiplayer networking.</p>
            </Card>
            {/* Add more tech logos/cards */}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-chrono-electric-blue mb-12">{t("team")}</h2>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/placeholder.svg?height=150&width=150&text=Long"
              alt="Quách Thành Long"
              width={150}
              height={150}
              className="rounded-full mb-6 border-4 border-chrono-electric-blue shadow-lg"
            />
            <h3 className="text-2xl font-bold text-chrono-electric-blue">Quách Thành Long</h3>
            <p className="text-lg text-chrono-light-gray mb-4">Main Creator & Visionary</p>
            <div className="flex gap-4">
              <Link
                href="https://quachthanhlong.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chrono-electric-blue hover:text-chrono-electric-blue/80"
              >
                <LinkIcon className="h-6 w-6" />
                <span className="sr-only">Quách Thành Long Website</span>
              </Link>
              {/* Add LinkedIn, GitHub icons */}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
