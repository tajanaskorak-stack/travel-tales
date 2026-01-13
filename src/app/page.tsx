import Image from 'next/image';

export default function Home() {
  const featuredStories = [
    {
      id: 1,
      title: "Whispers of the Austrian Alps",
      excerpt: "Discovering hidden mountain paths and ancient alpine traditions. A journey through snow-capped peaks and charming villages that time forgot.",
      date: "December 2024",
      readTime: "5 min read",
      category: "Mountains",
      image: "/images/travel/austrian alps/Hiking-in-austria_tirol-1024x683.jpg",
      imageAlt: "Hiking in Austrian Alps"
    },
    {
      id: 2,
      title: "Cyprus Sea Caves Adventure",
      excerpt: "Exploring the beautiful coastal landscapes and ancient sea caves carved by the Mediterranean waves over millennia. Discovering hidden turquoise waters and crystal-clear pools.",
      date: "November 2024",
      readTime: "7 min read",
      category: "Coastal",
      image: "/sea-caves-cyprus-cyprus (1).avif",
      imageAlt: "Sea caves in Cyprus with turquoise waters"
    },
    {
      id: 3,
      title: "Slovenian Forest Mysteries",
      excerpt: "Venturing deep into the enchanted woods of Triglav National Park, where emerald lakes and waterfalls tell stories of Slovenia's wild heart.",
      date: "October 2024",
      readTime: "6 min read",
      category: "Forests",
      image: "/images/travel/austrian alps/hiker-overlooking-french-alps-752x501.jpg",
      imageAlt: "Hiker overlooking Triglav National Park"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/sea-caves-cyprus-cyprus (1).avif"
            alt="Beautiful Cyprus sea caves at sunset with turquoise waters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-sage/30 to-accent/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Travel Tales
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Exploring the world's hidden gems, one adventure at a time.
            Stories of nature, culture and unforgettable journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/about"
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Discover My Journey
            </a>
            <a
              href="#stories"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-200"
            >
              Read Stories
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Featured Adventures
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Immerse yourself in tales from recent explorations across mountains, coasts, and forests.
            Each story captures the essence of discovery and the beauty of our natural world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-sage/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base font-medium rounded-full">
                    {story.category}
                  </span>
                  <span className="text-sm text-foreground/60">
                    {story.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-primary-dark mb-3 group-hover:text-primary transition-colors duration-200">
                  {story.title}
                </h3>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">
                    {story.date}
                  </span>
                  <button className="text-primary font-medium hover:text-primary-dark transition-colors duration-200 flex items-center space-x-1">
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-sage/10 to-accent/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-4xl font-bold text-primary-dark mb-4">
              Follow My Adventures
            </h3>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Join me on Instagram for real-time updates, behind-the-scenes moments,
              and daily inspiration from the world's most beautiful places.
            </p>
            <a
              href="https://www.instagram.com/tajciiiiiii/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@tajciiiiiii</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
