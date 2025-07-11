import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Martinez",
    role: "Lead Architect",
    company: "Modern Spaces Design",
    content:
      "TileTextures has completely transformed our workflow. The quality of their textures is unmatched, and the variety allows us to bring any vision to life. Our clients are consistently impressed with the realistic renders we can now produce.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    project: "Luxury Hotel Renovation",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "3D Visualization Artist",
    company: "Render Studio Pro",
    content:
      "The seamless nature of these textures saves me hours of work. Every texture tiles perfectly and the resolution is fantastic for close-up shots. This is now my go-to source for all tile materials.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    project: "Residential Complex Visualization",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Interior Designer",
    company: "Creative Interiors LLC",
    content:
      "I love how easy it is to find exactly what I need. The categorization is perfect and the search function actually works! The customer service is exceptional too - they helped me find the perfect marble texture for my project.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    project: "Boutique Restaurant Design",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Game Environment Artist",
    company: "Indie Game Studios",
    content:
      "These textures work brilliantly in game engines. The variety of tile types means I can create diverse environments without repetition. The licensing is clear and commercial-friendly which is crucial for our projects.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    project: "Fantasy RPG Environment",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Product Designer",
    company: "Home Renovation Co.",
    content:
      "The care tips in their blog have been invaluable! Not only do they provide amazing textures, but they also educate us on proper tile maintenance. This comprehensive approach sets them apart from competitors.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    project: "Kitchen Renovation Project",
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Architectural Visualization",
    company: "Vision Architecture",
    content:
      "The quality-to-price ratio is incredible. We've saved thousands compared to other texture libraries while getting better results. The new arrivals keep our presentations fresh and current with trends.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg",
    project: "Commercial Office Complex",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-1000">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-light max-w-2xl mx-auto">
          Join thousands of satisfied professionals who trust TileTextures for
          their projects
        </p>
      </div>

      <div className="relative">
        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-lighter rounded-2xl p-8 md:p-12 border border-dark relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-primary-blue" />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed text-center mb-8 font-light">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-blue"
                />
                <div className="text-center">
                  <h4 className="text-white font-semibold text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-primary-blue text-sm">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-light text-sm">
                    {currentTestimonial.company}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Project: {currentTestimonial.project}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-lighter hover:bg-primary-blue border border-dark hover:border-primary-blue rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/30"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-lighter hover:bg-primary-blue border border-dark hover:border-primary-blue rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/30"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary-blue scale-125"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="mt-12 max-w-6xl mx-auto">
        <div className="flex gap-4 justify-center overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`flex-shrink-0 p-4 rounded-lg border transition-all duration-300 min-w-[280px] ${
                index === currentIndex
                  ? "border-primary-blue bg-primary-blue/10"
                  : "border-dark bg-dark-lighter hover:border-gray-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <h5 className="text-white text-sm font-medium">
                    {testimonial.name}
                  </h5>
                  <p className="text-gray-light text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-light text-xs mt-2 line-clamp-2 text-left">
                {testimonial.content}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue mb-2">
              10,000+
            </div>
            <div className="text-sm text-gray-light">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue mb-2">4.9</div>
            <div className="text-sm text-gray-light">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue mb-2">
              500+
            </div>
            <div className="text-sm text-gray-light">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue mb-2">
              100%
            </div>
            <div className="text-sm text-gray-light">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
