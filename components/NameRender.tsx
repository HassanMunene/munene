'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NameRender = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const letters = ['M', 'U', 'N', 'E', 'N', 'E'];
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState<Array<{
        id: number;
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
    }>>([]);

    // Initialize particles
    useEffect(() => {
        const newParticles = [];
        const colors = ['#4facfe', '#00f2fe', '#a6c1ee', '#ffffff'];

        for (let i = 0; i < 150; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 0.2 - 0.1,
                speedY: Math.random() * 0.2 - 0.1,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        setParticles(newParticles);
    }, []);

    // Animate particles
    useEffect(() => {
        if (particles.length === 0) return;

        const interval = setInterval(() => {
        setParticles(prevParticles =>
            prevParticles.map(p => ({
                ...p,
                x: (p.x + p.speedX + 100) % 100,
                y: (p.y + p.speedY + 100) % 100
            }))
        );
    }, 30);

        return () => clearInterval(interval);
    }, [particles]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePosition({ x, y });
        }
    };

    // Calculate glow effect based on mouse position
    const calculateGlow = (index: number) => {
        const distanceX = Math.abs(mousePosition.x - (index * 15 + 10));
        const distanceY = Math.abs(mousePosition.y - 50);
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return Math.max(0, 1 - distance / 50);
    };

    return (
        <div
            ref={containerRef}
            className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative"
            onMouseMove={handleMouseMove}
        >
            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            backgroundColor: p.color,
                            opacity: 0.6,
                            transform: `translate(-50%, -50%)`
                        }}
                    />
                ))}
            </div>

            {/* Name container with 3D perspective */}
            <div className="relative z-10" style={{ perspective: '1000px' }}>
                <motion.div
                    className="flex"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateX(${(mousePosition.y - 50) * 0.3}deg) rotateY(${(mousePosition.x - 50) * -0.3}deg)`
                    }}
                >
                    {letters.map((letter, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div
                                className="text-[10vw] md:text-[8vw] font-bold uppercase tracking-tighter"
                                style={{
                                    background: `linear-gradient(
                    135deg,
                    hsl(${200 + index * 20}, 100%, 70%),
                    hsl(${220 + index * 20}, 100%, 60%)
                  )`,
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    textShadow: `
                    0 0 ${calculateGlow(index) * 20}px rgba(255, 255, 255, ${calculateGlow(index) * 0.7}),
                    0 0 ${calculateGlow(index) * 40}px hsl(${200 + index * 20}, 100%, 50%)
                  `,
                                    transform: `translateZ(${index * 5}px)`
                                }}
                            >
                                {letter}
                            </div>

                            {/* Liquid metal reflection effect */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    background: `linear-gradient(
                    135deg,
                    hsl(${200 + index * 20}, 100%, 70%),
                    hsl(${220 + index * 20}, 100%, 60%)
                  )`,
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    filter: 'blur(8px)',
                                    transform: 'scaleY(-1) translateY(50%)',
                                    maskImage: 'linear-gradient(to bottom, transparent 10%, black 70%)'
                                }}
                            >
                                {letter}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Interactive light source */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(10px)'
                }}
            />
        </div>
    );
};

export default NameRender;