import { Image, Link, ChevronRight } from "../components/next-shim"
import { Button } from "../components/ui/button"
import Navbar from "../components/navbar"
import { useState, useEffect } from "react"
import emailjs from "emailjs-com"

import PlatformDemo from "../components/PlatformDemo"

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
const EMAILJS_USER_ID = "YOUR_USER_ID"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    // Clear error when user types
    if (formErrors[id as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [id]: ""
      }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      message: ""
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      valid = false
    }

    setFormErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "voyage.pi.2025@gmail.com"
      }
      
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      )
      
      // Reset form on success
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus("success")
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Floating App Prints */}
      <section className="pt-24 flex-grow bg-gradient-to-b from-[#f0f1f5] via-[#f8e4e8] to-[#ffeaef] text-[#2c303b] relative overflow-hidden">
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
              fill="rgba(254, 56, 92, 0.2)"
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
              fill="rgba(254, 56, 92, 0.15)"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,117.3C960,128,1056,128,1152,106.7C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-8">
            <div className="font-extrabold font-heading leading-tighter tracking-tighter intersect-once intersect-quarter mb-4 md:text-8xl motion-safe:md:intersect:animate-fade text-7xl mx-auto my-16 text-center">
              Say 
              <span className="bg-clip-text bg-gradient-to-r from-secondary py-10 text-transparent to-secondary via-primary"> Bon Voyage</span> to Planning
            </div>
            <p className="text-lg md:text-xl mb-8">
              A trip made for you. Where your taste shapes the journey.
            </p>
            <Button className="bg-[#fe385c] border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-[#fe385c] hover:text-[#fe385c] text-white rounded-full px-6 py-4 text-lg">
              <strong>Get started. It's FREE.</strong>
            </Button>
          </div>
        </div>

        {/* Floating App Prints Display - Scattered like in the reference image */}
        <div className="relative w-full min-h-[800px] md:min-h-[800px] px-4 pb-12 overflow-hidden">
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
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Powerful Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#fe385c]/10 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Demo Videos Section with Abstract Background */}
      <section className="py-28 bg-gradient-to-r from-[#f0f1f5] via-[#f8e4e8] to-[#f0f1f5] relative overflow-hidden min-h-[800px]">
        {/* Wavy section divider at the top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            className="w-full"
            preserveAspectRatio="none"
            style={{ transform: 'rotate(180deg)', marginTop: '-2px' }}
          >
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L60,58.7C120,53,240,43,360,74.7C480,107,600,181,720,186.7C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              className="wave-path-top"
            ></path>
          </svg>
        </div>

        {/* Wave Background Elements - Enhanced with more pronounced waves */}
        <div className="absolute inset-0 z-0 opacity-30">
          {/* New dense wave layers */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 640" 
            className="absolute top-1/3 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(254, 56, 92, 0.35)" 
              fillOpacity="1" 
              d="M0,32L30,53.3C60,75,120,117,180,122.7C240,128,300,96,360,90.7C420,85,480,107,540,144C600,181,660,235,720,229.3C780,224,840,160,900,149.3C960,139,1020,181,1080,186.7C1140,192,1200,160,1260,160C1320,160,1380,192,1410,208L1440,224L1440,640L1410,640C1380,640,1320,640,1260,640C1200,640,1140,640,1080,640C1020,640,960,640,900,640C840,640,780,640,720,640C660,640,600,640,540,640C480,640,420,640,360,640C300,640,240,640,180,640C120,640,60,640,30,640L0,640Z"
              className="wave-animation-3"
            ></path>
          </svg>
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 640" 
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(254, 56, 92, 0.2)" 
              fillOpacity="1" 
              d="M0,320L30,304C60,288,120,256,180,250.7C240,245,300,267,360,266.7C420,267,480,245,540,245.3C600,245,660,267,720,261.3C780,256,840,224,900,213.3C960,203,1020,213,1080,224C1140,235,1200,245,1260,250.7C1320,256,1380,256,1410,256L1440,256L1440,640L1410,640C1380,640,1320,640,1260,640C1200,640,1140,640,1080,640C1020,640,960,640,900,640C840,640,780,640,720,640C660,640,600,640,540,640C480,640,420,640,360,640C300,640,240,640,180,640C120,640,60,640,30,640L0,640Z"
              className="wave-animation-1"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 my-80">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-24 leading-tight tracking-tight">
            <span className="bg-clip-text bg-gradient-to-r from-secondary to-secondary via-primary text-transparent">Because your taste deserves</span> more than generic recommendations
          </h2>
          
          <PlatformDemo />
          
        </div>
      </section>

      {/* Wave divider between sections */}
      <div className="w-full relative z-10 bg-gradient-to-r from-[#f0f1f5] via-[#f8e4e8] to-[#f0f1f5] overflow-hidden mt-[-100px]">
        
      </div>

      {/* Abstract Floating Elements Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left column: Text content */}
            <div>
              <h1 className="text-4xl font-extrabold mb-1 text-[#2c303b]">LEAVE A MESSAGE</h1>

              <h3 className="text-xl mb-5 text-[#2c303b]/60">We'd love to hear from you</h3>
              <p className="text-gray-600 mb-6">
                Have questions about our platform? Looking for travel recommendations? 
                Or maybe you have suggestions to make your journey planning experience even better? 
                We're all ears!
              </p>
              <p className="text-gray-600 mb-6">
                Drop us a message and our team will get back to you as soon as possible.
              </p>
              <div className="flex items-center mt-8">
                <div className="w-12 h-12 bg-[#fe385c]/10 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#fe385c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-[#2c303b]">voyage.pi.2025@gmail.com</span>
              </div>
            </div>

            {/* Right column: Message form */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#fe385c] focus:border-[#fe385c] outline-none`}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#fe385c] focus:border-[#fe385c] outline-none`}
                    placeholder="Your email address"
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#fe385c] focus:border-[#fe385c] outline-none resize-none`}
                    placeholder="Type your message here..."
                  ></textarea>
                  {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                </div>
                
                {submitStatus === "success" && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    Failed to send message. Please try again later.
                  </div>
                )}
                
                <Button 
                  type="submit"
                  disabled={isSubmitting} 
                  className="w-full bg-[#fe385c] border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-[#fe385c] hover:text-[#fe385c] text-white py-3 rounded-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#ffeaef] to-[#ffcbd5] relative overflow-hidden">
        {/* Wave Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="wave wave6"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              className="wave-path"
              fill="rgba(254, 56, 92, 0.2)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2c303b]">Ready to get started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#2c303b]">
            Start planning your dream journey with personalized recommendations today
          </p>
          <Button className="bg-[#fe385c] border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-[#fe385c] hover:text-[#fe385c] text-white rounded-full px-8 py-6 text-lg">
            Purchase Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0f1f5] text-[#2c303b] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Image
                src="/voyage.png"
                alt="Voyage Logo"
                width={40}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <p className="text-gray-500 ml-3">© 2025 All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-[#2c303b]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#2c303b]">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#2c303b]">
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
        className="h-6 w-6 text-[#fe385c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "Dream Journey Designer",
    description: "Create a personalized itinerary based on your preferences and interests.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#fe385c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zm-7-3.5v3.5m0 0v3.5m0-3.5h3.5m-3.5 0H7.5"
        />
      </svg>
    ),
    title: "Local Secrets Revealed",
    description: "Get personalized recommendations for your trip, including activities, attractions and more.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#fe385c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Money Magic Tracker",
    description: "Set the perfect budget for your trip and make every penny count towards unforgettable experiences.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#fe385c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Memory Time Capsule",
    description: "Build your personal travel journal and share that with your friends to inspire their next adventure.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#fe385c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Friends Adventure Feed",
    description: "Follow your friends' journeys and get inspired by their discoveries.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#fe385c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Group Travel Harmony",
    description: "Plan incredible trips together with shared itineraries that combine the interests of all group members.",
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