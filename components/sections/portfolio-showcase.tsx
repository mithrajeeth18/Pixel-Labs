"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    category: "Web",
    image: "/placeholder.svg?height=300&width=400",
    description: "A sleek e-commerce platform with modern design and seamless user experience.",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete brand identity package including logo, colors, and guidelines.",
  },
  {
    id: 3,
    title: "Marketing Campaign Graphics",
    category: "Graphics",
    image: "/placeholder.svg?height=300&width=400",
    description: "Creative graphics for digital marketing campaigns across multiple platforms.",
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    category: "Web",
    image: "/placeholder.svg?height=300&width=400",
    description: "Professional website redesign for a corporate client with improved UX.",
  },
  {
    id: 5,
    title: "Restaurant Brand Package",
    category: "Branding",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete branding solution for a restaurant including menu design.",
  },
  {
    id: 6,
    title: "Social Media Graphics",
    category: "Graphics",
    image: "/placeholder.svg?height=300&width=400",
    description: "Engaging social media graphics designed to boost engagement.",
  },
]

const categories = ["All", "Branding", "Web", "Graphics"]

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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
          </div>
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
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{item.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
          >
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
