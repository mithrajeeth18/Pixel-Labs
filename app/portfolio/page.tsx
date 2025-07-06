"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Calendar } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    category: "Web",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A sleek e-commerce platform with modern design and seamless user experience. Built with Next.js and integrated payment solutions.",
    client: "TechStore Inc.",
    year: "2024",
    tags: ["E-commerce", "Next.js", "Stripe", "Responsive"],
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Complete brand identity package including logo, colors, typography, and comprehensive brand guidelines.",
    client: "StartupCo",
    year: "2024",
    tags: ["Logo Design", "Brand Guidelines", "Typography", "Color Palette"],
  },
  {
    id: 3,
    title: "Marketing Campaign Graphics",
    category: "Graphics",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Creative graphics for digital marketing campaigns across multiple platforms including social media and web.",
    client: "Marketing Agency",
    year: "2023",
    tags: ["Social Media", "Digital Marketing", "Campaign Design", "Multi-platform"],
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    category: "Web",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Professional website redesign for a corporate client with improved user experience and modern aesthetics.",
    client: "Corporate Solutions Ltd.",
    year: "2024",
    tags: ["Corporate", "Redesign", "UX/UI", "Professional"],
  },
  {
    id: 5,
    title: "Restaurant Brand Package",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete branding solution for a restaurant including logo, menu design, and marketing materials.",
    client: "Gourmet Bistro",
    year: "2023",
    tags: ["Restaurant", "Menu Design", "Brand Identity", "Print Design"],
  },
  {
    id: 6,
    title: "Social Media Graphics Suite",
    category: "Graphics",
    image: "/placeholder.svg?height=400&width=600",
    description: "Engaging social media graphics designed to boost engagement and maintain brand consistency.",
    client: "Fashion Brand",
    year: "2024",
    tags: ["Social Media", "Fashion", "Brand Consistency", "Engagement"],
  },
  {
    id: 7,
    title: "SaaS Platform Interface",
    category: "Web",
    image: "/placeholder.svg?height=400&width=600",
    description: "User interface design for a SaaS platform with focus on usability and modern design principles.",
    client: "SaaS Startup",
    year: "2024",
    tags: ["SaaS", "UI/UX", "Dashboard", "Modern Design"],
  },
  {
    id: 8,
    title: "Luxury Brand Identity",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description: "Sophisticated brand identity for a luxury goods company with elegant design elements.",
    client: "Luxury Goods Co.",
    year: "2023",
    tags: ["Luxury", "Sophisticated", "Premium", "Elegant"],
  },
  {
    id: 9,
    title: "Event Marketing Materials",
    category: "Graphics",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Comprehensive marketing materials for a large-scale corporate event including posters and digital assets.",
    client: "Event Management Co.",
    year: "2024",
    tags: ["Event Marketing", "Print Design", "Digital Assets", "Corporate"],
  },
]

const categories = ["All", "Branding", "Web", "Graphics"]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gray-900">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {"Explore our latest projects and see how we've helped businesses transform their digital presence and brand identity."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-gray-900 hover:bg-gray-800 text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{item.category}</Badge>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.year} • {item.client}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              {"  Let's create something amazing together. Contact us for a free consultation."}
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/contact">Get Started Today</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
