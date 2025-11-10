"use client";

import { useEffect, useState } from "react";
import { Scissors } from "lucide-react";

export default function BookingRedirectPage() {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        // Enable smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';

        // Animation duration before redirect
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
                window.location.href = '/client';
            }, 500);
        }, 2500);

        return () => {
            clearTimeout(timer);
            // Reset scroll behavior
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden relative">
            {/* Background Brand Name */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className={`text-8xl md:text-9xl font-black text-gray-100 select-none transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}>
                    HairBooking
                </h1>
            </div>

            {/* Scissor Animation Container */}
            <div className="relative z-10 flex items-center justify-center">
                <div className="relative w-32 h-32">
                    {/* Left Scissor Blade */}
                    <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 transition-all duration-1000 ease-in-out ${isAnimating ? 'translate-x-0 rotate-12' : 'translate-x-8 -rotate-12'
                        }`}>
                        <Scissors className="h-16 w-16 text-black" style={{
                            transformOrigin: 'center bottom',
                        }} />
                    </div>

                    {/* Right Scissor Blade */}
                    <div className={`absolute top-1/2 right-0 transform -translate-y-1/2 scale-x-[-1] transition-all duration-1000 ease-in-out ${isAnimating ? 'translate-x-0 -rotate-12' : '-translate-x-8 rotate-12'
                        }`}>
                        <Scissors className="h-16 w-16 text-black" style={{
                            transformOrigin: 'center bottom',
                        }} />
                    </div>
                </div>
            </div>

            {/* Loading Text */}
            <div className={`absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="text-black font-medium">Preparando sua experiência</p>
            </div>
        </div>
    );
}
