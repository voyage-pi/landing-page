import { Image, Link, ChevronRight } from "../components/next-shim"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full bg-slate-900 py-4 fixed top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <span>linten</span>
              <span className="text-cyan-400">se</span>
            </h1>
            <span className="text-gray-400 text-xs ml-2 mt-2">LANDING PAGE TEMPLATE</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-cyan-400 hover:text-cyan-300">
              Layouts
            </Link>
            <Link href="#features" className="text-white hover:text-cyan-300">
              Features
            </Link>
            <Link href="#" className="text-white hover:text-cyan-300">
              Updates
            </Link>
            <Link href="#" className="text-white hover:text-cyan-300">
              Support
            </Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Purchase Template</Button>
        </div>
      </header>

      {/* Hero Section with Floating App Prints */}
      <section className="pt-24 flex-grow bg-gradient-to-b from-purple-900 via-purple-800 to-blue-700 text-white relative overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              className="wave-path wave-path-1"
              fill="rgba(124, 58, 237, 0.1)"
              d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              className="wave-path wave-path-2"
              fill="rgba(6, 182, 212, 0.1)"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,117.3C960,128,1056,128,1152,106.7C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span>linten</span>
              <span className="text-cyan-400">se</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              is a robust, responsive multi-purpose
              <br />
              HTML5 Bootstrap based template
            </h2>
            <p className="text-lg md:text-xl mb-8">
              A variety of impressive landing pages and dozens of useful features and plugins!
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-6 text-lg">
              Discover now
            </Button>
          </div>
        </div>

        {/* Floating App Prints Display - Scattered like in the reference image */}
        <div className="relative w-full min-h-[350px] md:min-h-[480px] px-4 pb-12 overflow-hidden">
          {/* Central dark website - larger */}
          <div className="floating-print absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/3 z-30 w-[280px] sm:w-[400px] md:w-[500px] shadow-2xl border-4 border-white rounded-xl overflow-hidden">
            <Image
              src="/templates/dark-template.svg"
              alt="Dark themed website"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          
          {/* Top left print */}
          <div className="floating-print absolute left-[12%] top-[15%] z-20 w-[220px] md:w-[290px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 5, transform: 'rotate(-2deg)'}}>
            <Image
              src="/placeholder.svg"
              alt="Website mockup"
              width={290}
              height={180}
              className="w-full h-auto"
            />
          </div>
          
          {/* Top right print */}
          <div className="floating-print absolute right-[20%] top-[10%] z-20 w-[210px] md:w-[270px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 6, transform: 'rotate(3deg)'}}>
            <Image
              src="/templates/blue-template.svg"
              alt="Website mockup"
              width={270}
              height={170}
              className="w-full h-auto"
            />
          </div>
          
          {/* Mid left print */}
          <div className="floating-print absolute left-[5%] top-[45%] z-10 w-[190px] md:w-[250px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 4, transform: 'rotate(-4deg)'}}>
            <Image
              src="/templates/purple-template.svg"
              alt="Website mockup"
              width={250}
              height={160}
              className="w-full h-auto"
            />
          </div>
          
          {/* Mid right print */}
          <div className="floating-print absolute right-[10%] top-[45%] z-10 w-[230px] md:w-[300px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 3, transform: 'rotate(4deg)'}}>
            <Image
              src="/placeholder.svg"
              alt="Website mockup"
              width={300}
              height={180}
              className="w-full h-auto"
            />
          </div>
          
          {/* Bottom left print */}
          <div className="floating-print absolute left-[25%] bottom-[10%] z-20 w-[200px] md:w-[280px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 7, transform: 'rotate(1deg)'}}>
            <Image
              src="/templates/blue-template.svg"
              alt="Website mockup"
              width={280}
              height={170}
              className="w-full h-auto"
            />
          </div>
          
          {/* Bottom right print */}
          <div className="floating-print absolute right-[15%] bottom-[15%] z-20 w-[180px] md:w-[260px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 8, transform: 'rotate(-3deg)'}}>
            <Image
              src="/templates/purple-template.svg"
              alt="Website mockup"
              width={260}
              height={160}
              className="w-full h-auto"
            />
          </div>
          
          {/* Bottom centered print */}
          <div className="floating-print absolute left-1/2 bottom-[5%] transform -translate-x-1/2 z-20 w-[210px] md:w-[320px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 9, transform: 'translateX(-50%) rotate(2deg)'}}>
            <Image
              src="/placeholder.svg"
              alt="Website mockup"
              width={320}
              height={190}
              className="w-full h-auto"
            />
          </div>
          
          {/* Extra prints for fuller appearance */}
          <div className="floating-print absolute left-[35%] top-[15%] z-10 w-[160px] md:w-[220px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 2, transform: 'rotate(-5deg)'}}>
            <Image
              src="/templates/dark-template.svg"
              alt="Website mockup"
              width={220}
              height={140}
              className="w-full h-auto"
            />
          </div>
          
          <div className="floating-print absolute right-[30%] top-[25%] z-10 w-[170px] md:w-[240px] shadow-xl border-4 border-white rounded-lg overflow-hidden" style={{zIndex: 1, transform: 'rotate(5deg)'}}>
            <Image
              src="/templates/blue-template.svg"
              alt="Website mockup"
              width={240}
              height={150}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Wave divider */}
        <div className="w-full relative z-1 mt-[-420px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              className="wave-path"
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Powerful Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Prints Section with Abstract Background */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 relative overflow-hidden">
        {/* Wave Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="wave wave4"></div>
          <div className="wave wave5"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              className="wave-path wave-path-1"
              fill="rgba(255, 255, 255, 0.05)"
              d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              className="wave-path wave-path-2"
              fill="rgba(255, 255, 255, 0.05)"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,117.3C960,128,1056,128,1152,106.7C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">App Prints</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appPrints.map((print, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={print.image || "/placeholder.svg?height=300&width=400"}
                    alt={print.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{print.title}</h3>
                  <p className="text-gray-200 mb-4">{print.description}</p>
                  <Link href="#" className="text-cyan-300 hover:text-cyan-100 font-medium inline-flex items-center">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract Floating Elements Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Template Designs</h2>

          <div className="relative min-h-[600px]">
            {/* Floating abstract elements */}
            <div className="abstract-element abstract-1"></div>
            <div className="abstract-element abstract-2"></div>
            <div className="abstract-element abstract-3"></div>
            <div className="abstract-element abstract-4"></div>

            {/* Floating template designs */}
            <div className="floating-print absolute left-[10%] top-[10%] z-30 w-[300px] md:w-[400px] transform rotate-[-3deg]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Template design"
                width={400}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="floating-print absolute right-[15%] top-[5%] z-20 w-[250px] md:w-[350px] transform rotate-[5deg]">
              <Image
                src="/placeholder.svg?height=300&width=350"
                alt="Template design"
                width={350}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="floating-print absolute left-[20%] bottom-[10%] z-10 w-[280px] md:w-[380px] transform rotate-[2deg]">
              <Image
                src="/placeholder.svg?height=300&width=380"
                alt="Template design"
                width={380}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="floating-print absolute right-[10%] bottom-[15%] z-30 w-[320px] md:w-[420px] transform rotate-[-4deg]">
              <Image
                src="/placeholder.svg?height=300&width=420"
                alt="Template design"
                width={420}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-800 text-white relative overflow-hidden">
        {/* Wave Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="wave wave6"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              className="wave-path"
              fill="rgba(255, 255, 255, 0.05)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Create your unique website with Lintense in just a few hours
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-6 text-lg">
            Purchase Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">
                <span>linten</span>
                <span className="text-cyan-400">se</span>
              </h1>
              <p className="text-gray-400">© 2025 All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Responsive Design",
    description: "Fully responsive layout that looks great on any device, from mobile phones to desktop computers.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Modern UI Components",
    description: "Beautiful, customizable UI components that you can easily integrate into your projects.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Performance",
    description: "Optimized for speed with minimal load times and smooth animations for a better user experience.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Customizable",
    description: "Easily customize colors, fonts, and layouts to match your brand identity and requirements.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Premium Support",
    description: "Get help when you need it with our dedicated support team and comprehensive documentation.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
    title: "Regular Updates",
    description: "Stay up-to-date with regular updates that bring new features and improvements to the template.",
  },
]

const appPrints = [
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Dashboard Design",
    description: "Modern dashboard interface with intuitive navigation and data visualization.",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Mobile App UI",
    description: "Clean and functional mobile app interface optimized for touch interactions.",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "E-commerce Layout",
    description: "Complete e-commerce solution with product listings, cart, and checkout process.",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Blog Template",
    description: "Beautiful blog layout with support for various content types and commenting system.",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Landing Page",
    description: "High-converting landing page design with call-to-action sections and testimonials.",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Admin Panel",
    description: "Comprehensive admin panel with user management and content moderation tools.",
  },
] 