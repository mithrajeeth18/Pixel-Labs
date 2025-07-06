"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Palette, TrendingUp, Pen, Code, Search } from "lucide-react"

const services = [
  {
    title: "Logo / Card Design",
    description: "Professional logo and business card designs that represent your brand identity.",
    icon: Palette,
  },
  {
    title: "Visual Branding",
    description: "Complete brand identity packages including color schemes, typography, and guidelines.",
    icon: Pen,
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to boost your online presence and engagement.",
    icon: TrendingUp,
  },
  {
    title: "Graphic Design",
    description: "Creative graphic design solutions for print and digital media applications.",
    icon: Palette,
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies and best practices.",
    icon: Code,
  },
  {
    title: "SEO Optimization",
    description: "Search engine optimization to improve your website visibility and rankings.",
    icon: Search,
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive design and development services to help your business thrive in the digital
            landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
