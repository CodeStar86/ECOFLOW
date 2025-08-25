import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { EcoButton } from './ui/eco-button';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  savings: string;
  co2Reduced: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Operations Director",
    company: "GreenTech Manufacturing",
    content: "EcoFlow's solar solution reduced our energy costs by 45% in the first year. The installation was seamless and their ongoing support has been exceptional.",
    rating: 5,
    savings: "£23,000",
    co2Reduced: "12.5 tonnes"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Sustainability Manager",
    company: "Urban Development Corp",
    content: "The wind turbine installation exceeded our expectations. We're now generating 40% more clean energy than projected, making a real impact on our carbon footprint.",
    rating: 5,
    savings: "£67,000",
    co2Reduced: "34.2 tonnes"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Homeowner",
    company: "Residential Client",
    content: "From consultation to installation, EcoFlow made going solar effortless. Our electricity bills have dropped by 80% and we love contributing to a cleaner future.",
    rating: 5,
    savings: "£4,800",
    co2Reduced: "3.8 tonnes"
  },
  {
    id: 4,
    name: "David Park",
    role: "CFO",
    company: "Innovation Labs",
    content: "The battery storage system has transformed how we manage energy costs. We're saving money during peak hours and have backup power when we need it most.",
    rating: 5,
    savings: "£18,500",
    co2Reduced: "8.9 tonnes"
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-[var(--ec-n-50)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[var(--ec-secondary)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[var(--ec-n-600)] max-w-2xl mx-auto">
            Real stories from businesses and homeowners who've transformed their energy future with EcoFlow.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-[var(--ec-n-0)] rounded-[var(--ec-r-lg)] shadow-[var(--ec-sh-md)] p-8 md:p-12">
            <div className="flex items-start gap-6">
              <Quote className="w-12 h-12 text-[var(--ec-brand)] flex-shrink-0 mt-2" />
              <div className="flex-1">
                <p className="text-lg text-[var(--ec-n-600)] mb-6 leading-relaxed">
                  "{currentTestimonial.content}"
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--ec-accent-sun)] text-[var(--ec-accent-sun)]" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <div className="font-semibold text-[var(--ec-secondary)]">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-[var(--ec-n-600)]">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[var(--ec-success)]/10 rounded-[var(--ec-r-md)] p-4">
                    <div className="text-2xl font-semibold tabular-nums text-[var(--ec-success)]">
                      {currentTestimonial.savings}
                    </div>
                    <div className="text-sm text-[var(--ec-n-600)]">Annual Savings</div>
                  </div>
                  <div className="bg-[var(--ec-brand)]/10 rounded-[var(--ec-r-md)] p-4">
                    <div className="text-2xl font-semibold tabular-nums text-[var(--ec-brand)]">
                      {currentTestimonial.co2Reduced}
                    </div>
                    <div className="text-sm text-[var(--ec-n-600)]">CO₂ Reduced Yearly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <EcoButton
              variant="secondary"
              size="sm"
              onClick={goToPrevious}
              className="w-10 h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </EcoButton>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex 
                      ? 'bg-[var(--ec-brand)]' 
                      : 'bg-[var(--ec-n-300)] hover:bg-[var(--ec-n-600)]'
                  }`}
                />
              ))}
            </div>
            
            <EcoButton
              variant="secondary"
              size="sm"
              onClick={goToNext}
              className="w-10 h-10 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </EcoButton>
          </div>
        </div>
      </div>
    </div>
  );
}