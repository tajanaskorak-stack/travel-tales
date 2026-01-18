import Image from 'next/image';
import Link from 'next/link';

// Story data - in a real app, this would come from a database or API
const stories: Record<string, {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  content: string;
}> = {
  '1': {
    id: 1,
    title: "Whispers of the Austrian Alps",
    excerpt: "Discovering hidden mountain paths and ancient alpine traditions. A journey through snow-capped peaks and charming villages that time forgot.",
    date: "December 2024",
    readTime: "5 min read",
    category: "Mountains",
    image: "/images/travel/austrian alps/Hiking-in-austria_tirol-1024x683.jpg",
    imageAlt: "Hiking in Austrian Alps",
    content: "Adventure awaits those who dare to step into the unknown. My journey through the Austrian Alps was nothing short of magical, where every trail led to breathtaking vistas and every village whispered stories of ancient traditions. As I climbed higher into the mountains, the crisp alpine air filled my lungs and the snow-capped peaks stretched endlessly before me. The beauty of these mountains taught me that adventure isn't just about reaching the summit—it's about the moments of wonder along the way, the connection with nature, and the discovery of hidden gems that take your breath away. Each step was a testament to the power of exploration and the endless possibilities that await when we venture beyond the familiar."
  },
  '2': {
    id: 2,
    title: "Cyprus Sea Caves Adventure",
    excerpt: "Exploring the beautiful coastal landscapes and ancient sea caves carved by the Mediterranean waves over millennia. Discovering hidden turquoise waters and crystal-clear pools.",
    date: "November 2024",
    readTime: "7 min read",
    category: "Coastal",
    image: "/sea-caves-cyprus-cyprus (1).avif",
    imageAlt: "Sea caves in Cyprus with turquoise waters",
    content: "The Mediterranean coast of Cyprus holds secrets that only the brave and curious uncover. My adventure through the sea caves was a journey into a world of turquoise magic, where crystal-clear waters met ancient rock formations. Swimming through hidden passages, I discovered pools of emerald and blue that seemed untouched by time. The adventure was about more than just exploration—it was about embracing the thrill of discovery, feeling the cool water against my skin, and witnessing nature's artistry carved over millennia. Every cave told a story of the sea's eternal dance with the earth, reminding me that adventure is everywhere if we're willing to seek it out and dive deep into the unknown."
  },
  '3': {
    id: 3,
    title: "Slovenian Forest Mysteries",
    excerpt: "Venturing deep into the enchanted woods of Triglav National Park, where emerald lakes and waterfalls tell stories of Slovenia's wild heart.",
    date: "October 2024",
    readTime: "6 min read",
    category: "Forests",
    image: "/images/travel/austrian alps/hiker-overlooking-french-alps-752x501.jpg",
    imageAlt: "Hiker overlooking Triglav National Park",
    content: "Deep within Triglav National Park, I found myself immersed in an adventure that transcended the physical journey. The Slovenian forests are alive with ancient energy, where emerald lakes reflect the sky and waterfalls cascade like liquid silver. Trekking through these enchanted woods, I learned that adventure is a state of mind—a willingness to lose yourself in the moment and find something greater. The forest paths led me to hidden clearings, serene lakes, and moments of pure tranquility that reconnected me with the wild heart of nature. This adventure reminded me that sometimes the greatest discoveries happen when we slow down, breathe deeply, and let the wilderness guide us to places where magic still exists and wonder is never far away."
  }
};

export default function AdventurePage({ params }: { params: { id: string } }) {
  const story = stories[params.id];

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Story Not Found</h1>
          <Link href="/" className="text-primary hover:text-primary-dark transition-colors duration-200">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <section className="relative h-[500px] flex items-end overflow-hidden">
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-primary/90 text-white text-sm font-medium rounded-full">
              {story.category}
            </span>
            <span className="text-white/80 text-sm">
              {story.date} • {story.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {story.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p className="text-xl font-medium text-primary-dark mb-8">
              {story.excerpt}
            </p>
            <p className="leading-relaxed">
              {story.content}
            </p>
          </div>
        </article>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-sage/20">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Adventures</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
