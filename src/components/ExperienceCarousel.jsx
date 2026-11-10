
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ExperienceCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative mt-8 overflow-hidden rounded-xl">

      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={alt}
          className="w-full aspect-video object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Previous Button */}
     <button
  onClick={prevImage}
  aria-label="Previous image"
  className="absolute left-4 top-1/2 -translate-y-1/2
  flex h-10 w-10 items-center justify-center
  rounded-full border border-white/20
  bg-black/50 text-ivory backdrop-blur-md
  transition-all duration-300
  hover:bg-bronze hover:text-night hover:scale-110"
>
  <ChevronLeft size={20} />
</button>

      {/* Next Button */}
      <button
  onClick={nextImage}
  aria-label="Next image"
  className="absolute right-4 top-1/2 -translate-y-1/2
  flex h-10 w-10 items-center justify-center
  rounded-full border border-white/20
  bg-black/50 text-ivory backdrop-blur-md
  transition-all duration-300
  hover:bg-bronze hover:text-night hover:scale-110"
>
  <ChevronRight size={20} />
</button>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? "w-6 bg-bronze"
                : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

export default ExperienceCarousel;
