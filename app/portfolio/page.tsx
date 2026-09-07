import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "SANA FAISAL | SEO Content Strategist & Website Copywriter Portfolio",
  description:
    "Explore SANA FAISAL's portfolio featuring SEO content strategy, website copywriting, blog writing, landing page optimization, brand storytelling, and content for luxury, B2B, and lifestyle brands.",
  keywords: [
    "SANA FAISAL portfolio",
    "SANA FAISAL SEO content strategist",
    "SANA FAISAL website copywriter",
    "SEO content strategy portfolio",
    "website copywriter",
    "content strategist Pakistan",
    "luxury brand copywriting",
    "blog writer",
    "landing page copywriter",
    "email marketing content",
    "B2B content strategy",
    "brand storytelling",
    "SEO content writing",
  ],
  authors: [{ name: "SANA FAISAL" }],
  openGraph: {
    title: "SANA FAISAL | SEO Content Strategist & Website Copywriter Portfolio",
    description:
      "Explore selected SEO content, website copy, blog writing, brand storytelling, and content strategy work by SANA FAISAL.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/contentwriterhomepage.jpeg",
        width: 1200,
        height: 630,
        alt: "SANA FAISAL - SEO Content Strategist & Website Copywriter",
      },
    ],
    siteName: "SANA FAISAL Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANA FAISAL | SEO Content Strategist & Website Copywriter",
    description:
      "Selected work in SEO content strategy, website copywriting, blog writing, landing pages, and brand storytelling.",
    images: ["/contentwriterhomepage.jpeg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "SANA FAISAL's Content Strategy Portfolio",
      author: {
        "@type": "Person",
        name: "SANA FAISAL",
        jobTitle: "SEO Content Strategist | Website Copywriter | Content Marketing Specialist",
        url: "https://storycup.vercel.app",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        "Professional portfolio featuring SEO content strategy, website copywriting, blog writing, landing page optimization, brand storytelling, and content for luxury and B2B brands.",
    }),
  },
}



const projects = [
  {
    id: 1,
    title: "TechVolte Digital Agency",
    category: "Digital Agency",
    originalCategory: "Web Design & Digital Marketing",
    description:
      "A complete digital agency website focused on web design and development, branding, mobile applications, SEO, ecommerce, software development, and digital marketing services.",
    image:
      "https://www.techvolte.com/wp-content/uploads/WE_RE-THE-BEST-AGENCY-IN-DOWNTOWN-01_1.webp",
    liveUrl: "https://www.techvolte.com/",
    technologies: [
      "Web Development",
      "Digital Marketing",
      "SEO",
      "Branding",
      "Mobile Apps",
    ],
    featured: true,
  },

  {
    id: 2,
    title: "Boundless Technologies",
    category: "Digital Agency",
    originalCategory: "Website Design & Development",
    description:
      "A professional digital agency website representing web development, mobile applications, branding, ecommerce, SEO, digital marketing, hosting, and technology solutions.",
    image:
      "https://www.boundlesstech.net/assets/images/cms/44.jpg",
    liveUrl: "https://www.boundlesstech.net/",
    technologies: [
      "Web Development",
      "UI/UX",
      "Mobile Apps",
      "SEO",
      "Digital Marketing",
    ],
    featured: true,
  },

  {
    id: 3,
    title: "Iteek E-Commerce Website",
    category: "E-Commerce",
    originalCategory: "E-Commerce Website",
    description:
      "A responsive ecommerce website designed for Iteek and presented across desktop, laptop, tablet, and mobile devices with a modern shopping experience.",
    image:
      "https://www.boundlesstech.net/assets/images/wordpress/website%20designing%20portfolio/iteek.jpg",
    liveUrl: "https://www.boundlesstech.net/website-designing/",
    technologies: [
      "WordPress",
      "PHP",
      "Elementor",
      "WooCommerce",
      "MySQL",
    ],
    featured: true,
  },

  {
    id: 4,
    title: "Uraan Academy",
    category: "Education",
    originalCategory: "Education Website",
    description:
      "A modern educational website created for Uraan Academy with course-focused navigation, responsive layouts, and learning management functionality.",
    image:
      "https://www.boundlesstech.net/assets/images/wordpress/website%20designing%20portfolio/Uraanacademy.jpg",
    liveUrl: "https://www.boundlesstech.net/website-designing/",
    technologies: [
      "WordPress",
      "PHP",
      "Elementor",
      "LMS",
      "MySQL",
    ],
    featured: false,
  },

  {
    id: 5,
    title: "TechVolte Web Development",
    category: "Web Development",
    originalCategory: "Custom Website Development",
    description:
      "A professional website-development experience highlighting custom websites, ecommerce solutions, CMS development, hosting, security, and SEO-ready web development.",
    image:
      "https://www.techvolte.com/wp-content/uploads/work_showcse-1-300x300-1.webp",
    liveUrl:
      "https://www.techvolte.com/website-development-service/",
    technologies: [
      "Web Development",
      "CMS",
      "E-Commerce",
      "SEO",
      "WordPress",
    ],
    featured: false,
  },

  {
    id: 6,
    title: "Leather Jacket Studio",
    category: "E-Commerce",
    originalCategory: "Fashion & E-Commerce Website",
    description:
      "A fashion-focused e-commerce website featuring leather jackets, suede jackets, shearling jackets, western wear, hoodies, and premium fashion products.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
    liveUrl: "https://leatherjacketstudio.com/",
    technologies: [
      "E-Commerce",
      "WordPress",
      "WooCommerce",
      "SEO",
      "Fashion",
    ],
    featured: true,
  },

  {
    id: 7,
    title: "Asharys Design",
    category: "E-Commerce",
    originalCategory: "Luxury Furniture & Interior Design",
    description:
      "A premium luxury furniture and interior design website showcasing elegant furniture, kitchens, wardrobes, architecture, art, and curated home collections.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    liveUrl: "https://www.asharysdesign.com/",
    technologies: [
      "E-Commerce",
      "Luxury Furniture",
      "Interior Design",
      "SEO",
      "Content Strategy",
    ],
    featured: true,
  },
];

const categories = [
  "All",
  "Digital Agency",
  "Web Development",
  "E-Commerce",
  "Education",
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 pt-12 sm:pt-16 lg:pt-20 pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Selected Work
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              My Portfolio
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A selection of SEO content strategies, high-converting website
              copy, brand storytelling, and blog writing created for luxury
              lifestyle, jewellery, fashion, and digital brands across the UAE
              and international markets.
            </p>
          </div>
        </section>

        {/* Portfolio */}
        <section className="container mx-auto px-4 py-10 sm:py-14 lg:py-16">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="h-auto flex flex-wrap justify-center gap-1 p-1 max-w-5xl">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 text-sm"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => {
              const filteredProjects =
                category === "All"
                  ? projects
                  : projects.filter(
                      (project) => project.category === category
                    )

              return (
                <TabsContent
                  key={category}
                  value={category}
                  className="mt-0"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="group overflow-hidden border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                          {project.featured && (
                            <Badge className="absolute top-4 left-4">
                              Featured
                            </Badge>
                          )}

                          <Badge
                            variant="secondary"
                            className="absolute bottom-4 left-4 backdrop-blur-sm"
                          >
                            {project.originalCategory}
                          </Badge>
                        </div>

                        {/* Content */}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((technology) => (
                              <Badge
                                key={technology}
                                variant="outline"
                                className="text-xs font-normal"
                              >
                                {technology}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            size="sm"
                            className="w-full sm:w-auto"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Published Work
                              <ExternalLink className="ml-2 h-3.5 w-3.5" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                      <p className="text-muted-foreground">
                        No projects available in this category yet.
                      </p>
                    </div>
                  )}
                </TabsContent>
              )
            })}
          </Tabs>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 lg:py-20">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
              <Badge variant="secondary" className="mb-4">
                Let's Work Together
              </Badge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Have a Content Project in Mind?
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Need SEO content strategy, high-converting website copy, blog
                writing, landing pages, email campaigns, or brand storytelling?
                Let's create clear, search-friendly, conversion-focused content
                for your brand.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}