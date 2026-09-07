
"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service || !formData.budget) {
      alert("Please select both a content service type and a budget range.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      alert("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Collaborate
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need SEO content writing, blog articles, guest posts,
            product descriptions, website copy, social media content, or
            editing and proofreading — I'm here to help you create high-quality
            content that supports your online visibility and business goals.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Share Your Project Details
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmitEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleChange("name", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">
                        Type of Content Service
                      </Label>

                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a content service" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="seo-content-writing">
                            SEO Content Writing
                          </SelectItem>

                          <SelectItem value="blog-article-writing">
                            Blog & Article Writing
                          </SelectItem>

                          <SelectItem value="editing-proofreading">
                            Editing & Proofreading
                          </SelectItem>

                          <SelectItem value="social-media-content">
                            Social Media & Marketing Content
                          </SelectItem>

                          <SelectItem value="guest-post-writing">
                            Guest Post Writing & Submission
                          </SelectItem>

                          <SelectItem value="product-descriptions">
                            Product Descriptions
                          </SelectItem>

                          <SelectItem value="website-copy">
                            Website Copy
                          </SelectItem>

                          <SelectItem value="keyword-research">
                            Research & Keyword Optimization
                          </SelectItem>

                          <SelectItem value="off-page-seo">
                            Off-Page SEO Content
                          </SelectItem>

                          <SelectItem value="press-release">
                            Press Release Writing
                          </SelectItem>

                          <SelectItem value="business-profile">
                            Business Profile Writing
                          </SelectItem>

                          <SelectItem value="forum-content">
                            Forum Thread Writing
                          </SelectItem>

                          <SelectItem value="other">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>

                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleChange("budget", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="under-50">
                            Under $50
                          </SelectItem>

                          <SelectItem value="50-100">
                            $50 - $100
                          </SelectItem>

                          <SelectItem value="100-250">
                            $100 - $250
                          </SelectItem>

                          <SelectItem value="250-500">
                            $250 - $500
                          </SelectItem>

                          <SelectItem value="over-500">
                            Over $500
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Project Description
                    </Label>

                    <Textarea
                      id="message"
                      placeholder="Tell me about your content project, target audience, required content type, SEO requirements, keywords, word count, and deadline..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        handleChange("message", e.target.value)
                      }
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSending ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue" />
                  </div>

                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      mrsfaizeekhan21@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue" />
                  </div>

                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">
                      +92336 2376426
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue" />
                  </div>

                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Karachi, Sindh, Pakistan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex gap-4">
            

                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="mailto:mrsfaizeekhan21@gmail.com?subject=Content%20Writing%20Inquiry&body=Hello%20SANA,"
                      aria-label="Send email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours. For urgent content
                  projects, please reach out directly via email.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <div className="overflow-hidden rounded-b-lg">
                <iframe
                  src="https://www.google.com/maps?q=Karachi,+Sindh,+Pakistan&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                ></iframe>
              </div>

              <div className="p-4 text-center">
                <p className="text-muted-foreground">
                  Serving local and international clients with professional
                  content writing and SEO services
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}
