'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const values = [
    {
      title: "Sustainable Travel",
      description: "Every journey I take considers the environmental impact and cultural preservation of the destinations I visit.",
      icon: "🌱"
    },
    {
      title: "Authentic Experiences",
      description: "I seek genuine connections with local communities and traditions, avoiding tourist traps for meaningful encounters.",
      icon: "🤝"
    },
    {
      title: "Mindful Exploration",
      description: "Travel is not just about seeing places, but about understanding, learning, and growing through each experience.",
      icon: "🧘"
    },
    {
      title: "Nature Connection",
      description: "My deepest inspiration comes from the natural world - mountains, forests, oceans, and the wilderness that surrounds us.",
      icon: "🏞️"
    }
  ]

  const recentJourneys = [
    {
      location: "Austrian Alps",
      description: "Winter hiking through pristine mountain villages and ancient alpine trails.",
      highlight: "Witnessed the most spectacular sunrise over Zugspitze peak.",
      image: "/images/travel/austrian alps/Hiking-in-austria_tirol-1024x683.jpg",
      imageAlt: "Snow-capped peaks of Austrian Alps at sunrise"
    },
    {
      location: "Cyprus Sea Caves",
      description: "Exploring the beautiful coastal landscapes and ancient sea caves carved by the Mediterranean waves over millennia.",
      highlight: "Discovered a hidden cave with crystal-clear turquoise waters and ancient rock formations.",
      image: "/98699.jpg",
      imageAlt: "Turquoise waters of Cyprus sea caves"
    },
    {
      location: "Slovenian Triglav National Park",
      description: "Trekking through emerald lakes and waterfalls in Slovenia's wild heart.",
      highlight: "Camped under the stars near Lake Bohinj.",
      image: "/images/travel/austrian alps/hiker-overlooking-french-alps-752x501.jpg",
      imageAlt: "Emerald lakes in Slovenian Triglav National Park"
    }
  ]

  // Gallery images
  const galleryImages = [
    {
      src: "/98690.jpg",
      alt: "Mountain landscape with lake and snow-capped peaks",
      title: "Catching the sunrise"
    },
    {
      src: "/98691.jpg",
      alt: "Coastal sunset with town and agricultural fields",
      title: "Mediterranean Sunset"
    },
    {
      src: "/98699.jpg",
      alt: "Coastal sea caves with turquoise waters",
      title: "Sea Caves Exploration"
    },
    {
      src: "/100530.jpg",
      alt: "Person in natural rock archway overlooking the sea",
      title: "Queen of the Dolomites"
    },
    {
      src: "/102781.jpg",
      alt: "Skiing in snowy mountain landscape",
      title: "Snow Sports"
    },
    {
      src: "/images/travel/austrian alps/Hiking-in-austria_tirol-1024x683.jpg",
      alt: "Austrian Alps hiking trail",
      title: "Austrian Alps Adventure"
    },
    {
      src: "/images/travel/austrian alps/hiker-overlooking-french-alps-752x501.jpg",
      alt: "Hiker overlooking French Alps",
      title: "Mountain Vista"
    },
    {
      src: "/images/04AUSTRIASKI-superJumbo-1.jpg",
      alt: "Austrian landscape",
      title: "Alpine Beauty"
    }
  ]

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft' && galleryImages.length > 1) {
        setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
      } else if (e.key === 'ArrowRight' && galleryImages.length > 1) {
        setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, galleryImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/sea-caves-cyprus-cyprus (1).avif"
          alt="Beautiful Cyprus sea caves at sunset with turquoise waters"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            About My Journey
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            I'm passionate about discovering the world's natural wonders and sharing stories
            that inspire others to explore mindfully and connect deeply with our planet.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Personal Story */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-8 text-center">
              Hello, I'm a Nature Explorer
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                My journey began with a simple belief: that the most profound experiences
                happen when we step outside our comfort zones and into the embrace of nature.
                What started as weekend hikes has evolved into a lifelong passion for discovering
                the world's hidden gems.
              </p>
              <p>
                Through my travels, I've learned that every mountain peak tells a story,
                every forest whispers ancient wisdom, and every coastline holds secrets
                waiting to be discovered. My Instagram (@tajciiiiiii) captures these moments
                in real-time, sharing not just beautiful landscapes, but the emotions and
                insights they inspire.
              </p>
              <p>
                I believe travel should be sustainable, respectful, and transformative.
                It's not about collecting destinations, but about collecting memories,
                lessons, and connections that enrich our lives and deepen our understanding
                of our place in this vast, beautiful world.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-sage/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                {value.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Journeys */}
        <div className="mb-32 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-16">
            Recent Adventures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recentJourneys.map((journey, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-sage/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Journey Image */}
                <div className="relative h-48">
                  <Image
                    src={journey.image}
                    alt={journey.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Journey Content */}
                <div className="p-10">
                  <h3 className="text-2xl font-semibold text-primary-dark mb-6">
                    {journey.location}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed text-base">
                    {journey.description}
                  </p>
                  <div className="bg-primary/10 p-5 rounded-lg">
                    <p className="text-primary font-medium italic text-base">
                      "{journey.highlight}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Gallery */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-16">
            Travel Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-xl">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button - Higher z-index to ensure it's clickable */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-[60] text-white hover:text-gray-300 transition-colors duration-200 p-2 bg-black/50 rounded-full hover:bg-black/70"
              aria-label="Close gallery"
              type="button"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video mb-4">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              
              {/* Title only - no descriptions/alt text shown */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-primary/5 via-sage/10 to-accent/5 rounded-3xl p-12 md:p-16 mb-32">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-12">
              My Travel Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-primary-dark mb-2">
                  Leave No Trace
                </h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Every step I take is mindful of the environment. I carry out what I carry in,
                  respect wildlife habitats, and choose eco-friendly transportation whenever possible.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-primary-dark mb-2">
                  Cultural Respect
                </h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  I approach each destination with curiosity and respect for local customs,
                  traditions, and ways of life. Learning from communities enriches both traveler and host.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-primary-dark mb-2">
                  Slow Travel
                </h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Quality over quantity. I prefer immersive experiences in fewer places rather than
                  rushing through multiple destinations. Depth over breadth.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-primary-dark mb-2">
                  Share the Wonder
                </h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Through my stories and photographs, I hope to inspire others to explore responsibly
                  and discover the magic that exists beyond our everyday routines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <h3 className="text-3xl font-bold text-primary-dark mb-6">
            Ready to Start Your Own Journey?
          </h3>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Follow my adventures on social media for daily inspiration, travel tips,
            and behind-the-scenes moments from the world's most beautiful places.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.instagram.com/tajciiiiiii/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow @tajciiiiiii</span>
            </a>
            <a
              href="https://www.facebook.com/tajanaskorak123/?locale=hr_HR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
