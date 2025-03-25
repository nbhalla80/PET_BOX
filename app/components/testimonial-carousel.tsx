"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useMobile()

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      pet: "Max, Golden Retriever",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "My dog Max absolutely loves his monthly Pet Box! The toys are durable and the treats are his favorite. Highly recommend for any dog parent!",
    },
    {
      id: 2,
      name: "Michael Chen",
      pet: "Luna, Siamese Cat",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Luna is very picky, but she gets excited every time the Pet Box arrives. The personalization is spot on - they really understand what she likes!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      pet: "Cooper, Labrador Mix",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "Cooper has so much energy and the interactive toys in each box help keep him entertained. The treats are healthy and he loves them!",
    },
    {
      id: 4,
      name: "David Wilson",
      pet: "Bella, French Bulldog",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The senior dog plan is perfect for my aging Bella. The gentle toys and joint supplements have made a noticeable difference in her mobility.",
    },
    {
      id: 5,
      name: "Jessica Taylor",
      pet: "Oliver, Maine Coon",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Oliver waits by the door when it's Pet Box day! The cat toys are innovative and the treats are always high quality. Worth every penny!",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - (isMobile ? 1 : 3) ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - (isMobile ? 1 : 3) : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / (isMobile ? 1 : 3))}%)`,
            width: `${testimonials.length * (100 / (isMobile ? 1 : 3))}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`px-2 ${isMobile ? "w-full" : "w-1/3"}`}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.pet}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? "text-warm-orange fill-warm-orange" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic">{testimonial.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md z-10"
        onClick={prevSlide}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md z-10"
        onClick={nextSlide}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(testimonials.length - (isMobile ? 0 : 2))].map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-primary-blue" : "bg-gray-300"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

