"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import data from "../../data/data.json";

// Define a type for the slide
type Slide = {
  image: string;
  title: string;
  description: string;
};

export default function ProjectSlideshow() {
    // Load Projects
    const [slides, setSlides] = useState<Slide[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        setSlides(data.slides);
      };

      fetchData();
    }, []);

    // Slideshow Part
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }
  
    useEffect(() => {
      const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
      return () => clearInterval(timer)
    }, [slides.length]) // Ensure it depends on slides length
  
    // UI
    return (
      <section id="home" className="relative w-full half-height overflow-hidden bg-gray-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={slides[currentIndex] ? `${process.env.PUBLIC_URL}/images/${slides[currentIndex].image}` : undefined}
              alt={slides[currentIndex]?.title}
              className="object-cover w-full h-full opacity-50"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentIndex]?.title}
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentIndex]?.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
  
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
  
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    )
}