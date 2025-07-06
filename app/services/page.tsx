"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import { Palette, TrendingUp, Pen, Code, Search, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Logo / Card Design",
    description: "Professional logo and business card designs that represent your brand identity perfectly.",
    icon: Palette,
    features: ["Custom Logo Design", "Business Card Design", "Brand Guidelines", "Multiple Formats"],
    price: "Starting at ₹5,000",
    popular: false,
  },
  {
    title: "Visual Branding",
    description: "Complete brand identity packages including color schemes, typography, and comprehensive guidelines.",
    icon: Pen,
    features: ["Brand Strategy", "Color Palette", "Typography Selection", "Brand Guidelines", "Marketing Materials"],
    price: "Starting at ₹15,000",
    popular: true,
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns designed to boost your online presence and engagement.",
    icon: TrendingUp,
    features: ["Social Media Strategy", "Content Creation", "Ad Campaign Management", "Analytics & Reporting"],
    price: "Starting at ₹10,000/month",
    popular: false,
  },
  {
    title: "Graphic Design",
    description: "Creative graphic design solutions for both print and digital media applications.",
    icon: Palette,
    features: ["Print Design", "Digital Graphics", "Marketing Materials", "Social Media Graphics"],
    price: "Starting at ₹3,000",
    popular: false,
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies and best practices.",
    icon: Code,
    features: ["Responsive Design", "Modern Technologies", "SEO Optimized", "Fast Loading", "Mobile First"],
    price: "Starting at ₹25,000",
    popular: true,
  },
  {
    title: "SEO Optimization",
    description: "Search engine optimization services to improve your website visibility and rankings.",
    icon: Search,
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Optimization", "Monthly Reports"],
    price: "Starting at ₹8,000/month",
    popular: false,
  },
]

export default function ServicesPage() {
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
              Our <span className="text-gray-900">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive design and development services to help your business thrive in the digital
              landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full hover:shadow-xl transition-all duration-300 relative ${service.popular ? "ring-2 ring-gray-900" : ""}`}
                  >
                    {service.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-lg font-semibold text-gray-900 mb-4">{service.price}</p>
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              {"Contact us today for a free consultation and let's discuss your project."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
