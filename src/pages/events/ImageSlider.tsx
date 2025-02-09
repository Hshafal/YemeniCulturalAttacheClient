import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

interface Image {
  url: string
  alt: string
}

interface ImageSliderProps {
  images: Image[]
  title: string
  description: string
  date: string
}

export default function ImageSlider({ images, title, description, date }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white  rounded-lg overflow-hidden shadow-lg">
      <div className="p-4">
        <h2 className="text-right text-xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-right text-sm text-gray-600  mb-2">{description}</p>
        <div className="flex items-center justify-end text-gray-500 mb-2">
          <span className="text-xs">{date}</span>
          <Calendar className="w-3 h-3 mr-1" />
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

