"use client";

import React, { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    name: string;
    text: string;
    date: string;
    rating: number; // supports 0.5 increments e.g. 4.5
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Ajimu",
        text: "Client Pro exceeded our expectations with its ease of use and powerful features. Perfect for anyone looking to create high-quality landing pages.",
        date: 'Jan 8, 2026',
        rating: 5,
    },
    {
        id: 2,
        name: "Alex",
        text: "Best clipboard app I've used so far. Everything feels structured and quick to access. Clean, fast, and really helpful for daily work.",
        date: 'Feb 5, 2026',
        rating: 5,
    },
];

/** Renders 5 stars supporting half-star increments */
function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5 mb-4" aria-label={`Rating: ${rating} out of 5`}>
            {Array.from({ length: 5 }, (_, i) => {
                const full = i + 1;
                const isFullStar = rating >= full;
                const isHalfStar = !isFullStar && rating >= full - 0.5;

                return (
                    <span key={i} className="relative inline-block w-6 h-6">
                        {/* Base empty star */}
                        <svg
                            className="absolute inset-0 w-6 h-6 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>

                        {/* Filled overlay — full or half */}
                        {(isFullStar || isHalfStar) && (
                            <svg
                                className="absolute inset-0 w-6 h-6 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                style={isHalfStar ? { clipPath: 'inset(0 50% 0 0)' } : undefined}
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        )}
                    </span>
                );
            })}
        </div>
    );
}

export default function SocialProof() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
            setFade(true);
        }, 400);
    };

    const handleDotClick = (index: number) => {
        if (index === activeIndex) return;
        setFade(false);
        setTimeout(() => {
            setActiveIndex(index);
            setFade(true);
        }, 400);
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="bg-primary dark:bg-gray-950 py-20 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-900">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center dark:text-white mb-6 tracking-tight">
                    Reviews
                </h2>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <div
                    className={`flex flex-col items-center transition-all duration-700 ease-in-out transform
                        ${fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
                    `}
                >
                    <h3 className="text-xl font-bold text-white dark:text-white mb-2 tracking-tight">
                        {activeTestimonial.name}
                    </h3>
                    <p className="text-gray-200 text-sm font-semibold mb-4 uppercase tracking-[0.2em]">
                        {activeTestimonial.date}
                    </p>

                    {/* Star Rating */}
                    <StarRating rating={activeTestimonial.rating} />

                    <div className="min-h-[140px] flex items-center justify-center mb-10">
                        <p className="text-2xl md:text-4xl text-gray-200 dark:text-gray-200 leading-snug max-w-3xl font-light italic">
                            "{activeTestimonial.text}"
                        </p>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex gap-4 mt-4">
                    {testimonials.map((_, index: number) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-2 rounded-full transition-all duration-500 ease-out ${index === activeIndex
                                ? "w-16 bg-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                : "w-6 bg-blue-400 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .testimonial-scroll::-webkit-scrollbar { width: 8px; }
                .testimonial-scroll::-webkit-scrollbar-track { background: transparent; }
                .testimonial-scroll::-webkit-scrollbar-thumb { background-color: #0766ad; border-radius: 4px; }
                .testimonial-scroll::-webkit-scrollbar-thumb:hover { background-color: #054e84; }
            `}</style>
        </section>
    );
}