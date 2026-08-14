"use client";

import type { PortfolioImage } from "@/data/portfolioImages";
import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  type KeyboardEvent,
  type TransitionEvent,
} from "react";
import CarouselSlide from "./CarouselSlide";
import NavArrowButton from "./NavArrowButton";
import { handleArrowKeyNavigation } from "@/lib/keyboardNavigation";
type CarouselProps = {
  images: PortfolioImage[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

  const sliderImages =
    images.length > 0 ? [...images, ...images, ...images] : [];
  const middleStart = images.length;
  const middleEnd = images.length * 2 - 1;

  const [slideIndex, setSlideIndex] = useState(middleStart);
  const [offsetX, setOffsetX] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slideIndexRef = useRef(slideIndex);
  const isAnimatingRef = useRef(false);

  slideIndexRef.current = slideIndex;

  const updateOffset = useCallback(() => {
    const viewport = viewportRef.current;
    const slide = slideRefs.current[slideIndexRef.current];
    if (!viewport || !slide) return;

    const nextOffset =
      viewport.clientWidth / 2 - (slide.offsetLeft + slide.offsetWidth / 2);
    setOffsetX(nextOffset);
  }, []);

  useLayoutEffect(() => {
    updateOffset();
  }, [slideIndex, sliderImages.length, updateOffset]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const observer = new ResizeObserver(() => {
      updateOffset();
    });
    observer.observe(viewport);

    const handleImageLoad = () => {
      updateOffset();
    };
    track.addEventListener("load", handleImageLoad, true);

    return () => {
      observer.disconnect();
      track.removeEventListener("load", handleImageLoad, true);
    };
  }, [sliderImages.length, updateOffset]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || images.length <= 1) return;
    const timer = window.setTimeout(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setSlideIndex((currentIndex) => currentIndex + 1);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [slideIndex, images.length, isPaused, prefersReducedMotion]);

  useEffect(() => {
    if (!isTransitionEnabled) {
      const frame = window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
        isAnimatingRef.current = false;
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [isTransitionEnabled]);

  if (images.length === 0) return null;

  const jumpWithoutAnimation = (index: number) => {
    setIsTransitionEnabled(false);
    setSlideIndex(index);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    if (slideIndex < middleStart) {
      isAnimatingRef.current = false;
      jumpWithoutAnimation(slideIndex + images.length);
      return;
    }
    if (slideIndex > middleEnd) {
      isAnimatingRef.current = false;
      jumpWithoutAnimation(slideIndex - images.length);
      return;
    }

    isAnimatingRef.current = false;
  };

  const goToPrevious = () => {
    if (isAnimatingRef.current || slideIndex <= 0) return;
    isAnimatingRef.current = true;
    setSlideIndex((index) => index - 1);
  };

  const goToNext = () => {
    if (isAnimatingRef.current || slideIndex >= sliderImages.length - 1) return;
    isAnimatingRef.current = true;
    setSlideIndex((index) => index + 1);
  };

  const handleCarouselArrowKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    handleArrowKeyNavigation(event, {
      onPrevious: goToPrevious,
      onNext: goToNext,
    });
  };

  return (
    <div
      tabIndex={0}
      aria-label="Featured wedding photography carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleCarouselArrowKeys}
      className="w-full outline-none focus-visible:outline"
    >
      <div
        ref={viewportRef}
        className="relative h-[35vh] w-full overflow-hidden sm:h-[40vh] lg:h-[55vh]"
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex h-full ${
            isTransitionEnabled
              ? "transition-transform duration-400 ease-out"
              : ""
          }`}
          style={{ transform: `translateX(${offsetX}px)` }}
        >
          {sliderImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              className="h-full shrink-0"
            >
              <CarouselSlide
                image={image}
                isActive={index === slideIndex}
                priority={index === middleStart}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <NavArrowButton direction="previous" onClick={goToPrevious} />
        <NavArrowButton direction="next" onClick={goToNext} />
      </div>
    </div>
  );
};

export default Carousel;
