
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next"
import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {
  title: "About SANA FAISAL | Content Writer & SEO Expert",
  description:
    "Learn about SANA FAISAL, an accomplished Content Writer and SEO Expert with over 10 years of continuous freelance experience specializing in SEO content writing, blogs, articles, guest posts, product descriptions, web copy, and digital content.",
  keywords: [
    "SANA FAISAL",
    "Content Writer",
    "SEO Expert",
    "SEO Content Writer",
    "Blog Writer",
    "Article Writer",
    "Guest Post Writer",
    "Product Description Writer",
    "Website Content Writer",
    "Social Media Content Writer",
    "SEO content writing",
    "off-page SEO",
    "on-page SEO",
    "keyword optimization",
    "freelance content writer",
    "content writer Pakistan",
  ],
  authors: [{ name: "SANA FAISAL" }],
  openGraph: {
    title: "About SANA FAISAL | Content Writer & SEO Expert",
    description:
      "Discover SANA FAISAL's experience as a Content Writer and SEO Expert with over 10 years of freelance experience in SEO content, blogs, guest posts, product descriptions, web copy, and digital marketing content.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/about-dpp.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "SANA FAISAL - Content Writer & SEO Expert",
      },
    ],
    siteName: "SANA FAISAL Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SANA FAISAL | Content Writer & SEO Expert",
    description:
      "Learn about SANA FAISAL's experience in SEO content writing, blog writing, guest posting, product descriptions, and digital content.",
    images: ["/about-dpp.jpg.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/about",
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
      "@type": "Person",
      name: "SANA FAISAL",
      jobTitle: "Content Writer & SEO Expert",
      url: "https://storycup.vercel.app/about",
      email: "mrsfaizeekhan21@gmail.com",
      telephone: "+92336 2376426",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "Pakistan",
      },
      description:
        "SANA FAISAL is an accomplished Content Writer and SEO Expert with over 10 years of continuous freelance experience delivering high-quality, SEO-optimized content for diverse industries.",
      sameAs: [
        "https://rabiakb4545.wixsite.com/rabia-kalar",
      ],
    }),
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <Image
              src="/alina-dp.jpeg"
              alt="SANA FAISAL"
              fill
              className="rounded-full border-4 border-primary/30 object-cover object-top"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-2">
            SANA FAISAL
          </h1>

          <p className="text-lg text-primary font-medium mb-4">
            Content Writer & SEO Expert
          </p>

          <p className="text-muted-foreground mb-6">
            Karachi, Sindh, Pakistan · +92336 2376426 · mrsfaizeekhan21@gmail.com
          </p>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accomplished Content Writer & SEO Expert with over 10 years of
            continuous freelance experience delivering high-quality,
            SEO-optimized content for diverse industries. Skilled in creative
            writing, blog articles, product descriptions, and social media
            content. Proven ability to manage multiple projects, meet
            deadlines, and drive measurable online visibility through
            effective on-page and off-page SEO strategies.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Experience
          </h2>

          <div className="space-y-8">

            {/* Freelance Content Writer & SEO Expert */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>
                      Freelance Content Writer & SEO Expert
                    </CardTitle>

                    <p className="text-muted-foreground">
                      Self-employed / Multiple Clients (Local & International) · 2015 – Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>
                    Created SEO-friendly content for websites, blogs, and
                    e-commerce platforms.
                  </li>
                  <li>
                    Delivered over 1,000 guest posts for link-building
                    campaigns.
                  </li>
                  <li>
                    Wrote product descriptions for popular product-based
                    websites.
                  </li>
                  <li>
                    Produced various off-page SEO content including forum
                    threads and business profiles.
                  </li>
                  <li>
                    Conducted workshops for students on content writing
                    techniques.
                  </li>
                  <li>
                    Built long-term client relationships through consistent
                    quality and on-time delivery.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Content Writing</Badge>
                  <Badge variant="secondary">Guest Posts</Badge>
                  <Badge variant="secondary">Product Descriptions</Badge>
                  <Badge variant="secondary">Off-Page SEO</Badge>
                  <Badge variant="secondary">Web Content</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Techvolte */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>
                      Content Writer
                    </CardTitle>

                    <p className="text-muted-foreground">
                      Techvolte · September 2019 – Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>
                    Provided home-based SEO content writing services.
                  </li>
                  <li>
                    Collaborated with the SEO team to create keyword-rich
                    content for link building.
                  </li>
                  <li>
                    Wrote and published hundreds of guest posts to improve
                    search engine rankings.
                  </li>
                  <li>
                    Produced diverse content types including website copy,
                    PPT presentations, press releases, and blogs.
                  </li>
                  <li>
                    Enhanced writing skills through continuous learning and
                    client feedback.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Writing</Badge>
                  <Badge variant="secondary">Guest Posts</Badge>
                  <Badge variant="secondary">Website Copy</Badge>
                  <Badge variant="secondary">Press Releases</Badge>
                  <Badge variant="secondary">Blogs</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  SEO & Content Writing
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Content Writing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="[&>div]:bg-primary" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Blog & Article Writing</span>
                    <span>96%</span>
                  </div>
                  <Progress value={96} className="[&>div]:bg-primary" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Keyword Optimization</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Content Creation
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Product Descriptions</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="[&>div]:bg-primary" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Social Media Content</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="[&>div]:bg-primary" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Website Copy</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Professional Skills
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Research Skills</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="[&>div]:bg-primary" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Editing & Proofreading</span>
                    <span>93%</span>
                  </div>
                  <Progress value={93} className="[&>div]:bg-primary" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Project & Time Management</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>
                      B.Com
                    </CardTitle>

                    <p className="text-muted-foreground">
                      University of Karachi
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Bachelor of Commerce from the University of Karachi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>
                      F.Sc
                    </CardTitle>

                    <p className="text-muted-foreground">
                      Khatoon-e-Pakistan College
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  F.Sc education completed at Khatoon-e-Pakistan College.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>
                      Matriculation
                    </CardTitle>

                    <p className="text-muted-foreground">
                      M.E.B School
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Matriculation completed at M.E.B School.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Core Competencies
          </h2>

          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "SEO Content Writing (On-Page & Off-Page)",
                  "Blog & Article Writing",
                  "Editing & Proofreading",
                  "Social Media & Marketing Content",
                  "Guest Post Writing & Submission",
                  "Product Descriptions",
                  "Web Copy",
                  "Research",
                  "Keyword Optimization",
                  "Project Management",
                  "Time Management",
                  "Creative Writing",
                  "SEO Strategy",
                  "Link Building Content",
                  "Press Releases",
                  "Business Profiles",
                  "Forum Threads",
                  "PPT Presentations",
                  "Content Planning",
                  "Client Relationship Management",
                ].map((specialty) => (
                  <Badge
                    key={specialty}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professional Strengths */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Strengths
          </h2>

          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-4 text-center">
                <div>
                  <p className="font-medium">Organized & Detail-Oriented</p>
                  <p className="text-sm text-muted-foreground">
                    Careful and structured approach to every project
                  </p>
                </div>

                <div>
                  <p className="font-medium">Creative & Innovative</p>
                  <p className="text-sm text-muted-foreground">
                    Creative approach to content development
                  </p>
                </div>

                <div>
                  <p className="font-medium">Strong Research Skills</p>
                  <p className="text-sm text-muted-foreground">
                    Thorough research for accurate and valuable content
                  </p>
                </div>

                <div>
                  <p className="font-medium">Critical Thinker & Fast Learner</p>
                  <p className="text-sm text-muted-foreground">
                    Adaptable and continuously improving
                  </p>
                </div>

                <div>
                  <p className="font-medium">Dedicated & Responsible</p>
                  <p className="text-sm text-muted-foreground">
                    Committed to quality and timely delivery
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}
