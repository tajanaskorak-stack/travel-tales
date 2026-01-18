'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    destination: '',
    wishes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (you can replace this with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        mobile: '',
        email: '',
        destination: '',
        wishes: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-sage/20 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-dark mb-6">
            Let's Plan Your Trip
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Share your travel dreams with us, and let's create an unforgettable adventure together.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-sage/20 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name/Surname */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                Name / Surname *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-primary-dark mb-2">
                Mobile *
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Enter your email address"
              />
            </div>

            {/* Interested Destination */}
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-primary-dark mb-2">
                Interested Destination *
              </label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white"
              >
                <option value="">Select a destination</option>
                <option value="austrian-alps">Austrian Alps</option>
                <option value="cyprus">Cyprus</option>
                <option value="slovenia-triglav">Slovenia - Triglav National Park</option>
                <option value="croatia">Croatia</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Wishes/Message */}
            <div>
              <label htmlFor="wishes" className="block text-sm font-medium text-primary-dark mb-2">
                Your Wishes *
              </label>
              <textarea
                id="wishes"
                name="wishes"
                value={formData.wishes}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your travel dreams, preferences, and any special requests..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary">
                <p className="font-medium">Thank you! Your request has been submitted successfully. We'll get back to you soon!</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                <p className="font-medium">Something went wrong. Please try again later.</p>
              </div>
            )}
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            Have questions? Feel free to reach out to us directly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.instagram.com/tajciiiiiii/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow us on Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/tajanaskorak123/?locale=hr_HR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Follow us on Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
