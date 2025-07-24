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
    name: "Ali Raza",
    role: "3D Artist",
    company: "Pixel Craft Studios",
    content:
      "Using Bismillah Tuff Tiles has made a huge difference in my renders. The textures are seamless and perfect for architectural walkthroughs. The quality is top-notch.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    project: "Model Town Lahore Villas",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    role: "Senior Architect",
    company: "DesignHaus Karachi",
    content:
      "Bismillah Tuff Tiles has significantly improved the quality of our presentations. Their realistic textures save us time and impress our clients during every project pitch.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    project: "Clifton Heights Residential Towers",
  },
  {
    id: 2,
    name: "Ali Raza",
    role: "3D Artist",
    company: "Pixel Craft Studios",
    content:
      "Using Bismillah Tuff Tiles has made a huge difference in my renders. The textures are seamless and perfect for architectural walkthroughs. The quality is top-notch.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    project: "Model Town Lahore Villas",
  },
  {
    id: 3,
    name: "Zainab Fatima",
    role: "Interior Designer",
    company: "Zest Interiors Islamabad",
    content:
      "I’m really impressed by their categorization. It's super easy to find specific textures like marble, terracotta, or wood. Plus, their customer service is very responsive.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    project: "Islamabad Café Redesign",
  },
  {
    id: 4,
    name: "Hamza Javed",
    role: "Game Environment Artist",
    company: "PlayPixel Interactive",
    content:
      "The textures from Bismillah Tuff Tiles integrate perfectly into Unreal Engine. They’re sharp, high-res, and give a local feel to our game environments.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    project: "Lahore Cityscape Game Map",
  },
  {
    id: 5,
    name: "Sara Nawaz",
    role: "Renovation Consultant",
    company: "Urban Touch Renovations",
    content:
      "I often recommend Bismillah Tuff Tiles to my clients for both indoor and outdoor use. Their texture previewing tool is super helpful during planning stages.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    project: "DHA Karachi Modern Villa",
  },
  {
    id: 6,
    name: "Usman Qureshi",
    role: "Project Architect",
    company: "Qureshi & Co.",
    content:
      "For commercial projects, cost matters. Bismillah Tuff Tiles delivers premium quality textures at a great price, with regular updates that match industry trends.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg",
    project: "Gulberg Business Center",
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
          Join thousands of satisfied professionals who trust Bismillah Tuff Tiles for
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
