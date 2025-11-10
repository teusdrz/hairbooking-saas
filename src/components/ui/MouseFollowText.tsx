"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MouseFollowTextProps {
    text: string;
    className?: string;
}

export default function MouseFollowText({ text, className = "" }: MouseFollowTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const highlightLayerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const highlightLayer = highlightLayerRef.current;

        if (!container || !highlightLayer) return;

        // Initialize highlight layer as invisible
        gsap.set(highlightLayer, {
            clipPath: 'circle(0px at 50% 50%)'
        });

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;

            // Convert to percentage for clip-path
            const xPercent = (mouseX / rect.width) * 100;
            const yPercent = (mouseY / rect.height) * 100;

            // Animate clip-path to follow mouse with smooth circle
            gsap.to(highlightLayer, {
                duration: 0.12,
                ease: "power2.out",
                clipPath: `circle(80px at ${xPercent}% ${yPercent}%)`
            });
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
            const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

            gsap.to(highlightLayer, {
                duration: 0.3,
                ease: "back.out(1.2)",
                clipPath: `circle(80px at ${xPercent}% ${yPercent}%)`
            });
        };

        const handleMouseLeave = () => {
            gsap.to(highlightLayer, {
                duration: 0.4,
                ease: "power2.inOut",
                clipPath: 'circle(0px at 50% 50%)'
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative cursor-none select-none ${className}`}
            style={{
                WebkitUserSelect: 'none',
                userSelect: 'none',
                lineHeight: '1.6'
            }}
        >
            {/* Base text layer (gray) */}
            <div className="text-gray-600 relative z-10">
                {text}
            </div>

            {/* Highlight layer (black background + white text) */}
            <div
                ref={highlightLayerRef}
                className="absolute inset-0 bg-black text-white z-20 flex items-center"
                style={{
                    clipPath: 'circle(0px at 50% 50%)',
                    lineHeight: '1.6'
                }}
            >
                <span className="w-full">{text}</span>
            </div>
        </div>
    );
}
