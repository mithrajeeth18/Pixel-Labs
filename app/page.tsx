import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import PortfolioShowcase from "@/components/sections/portfolio-showcase"
import ContactCTA from "@/components/sections/contact-cta"


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioShowcase />
      <ContactCTA />
    </>
  )
}