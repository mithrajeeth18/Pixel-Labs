import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">The Pixel Labs</h3>
            <p className="text-gray-300 mb-4">
              Taking your brand to the next level with innovative design solutions and digital excellence.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                <a href="tel:+918828717805" className="text-gray-300 hover:text-white transition-colors">
                  +91 88287 17805
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <a
                  href="mailto:the.pixellabs.co@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  the.pixellabs.co@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Logo Design</li>
              <li className="text-gray-300">Visual Branding</li>
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Digital Marketing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} The Pixel Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
