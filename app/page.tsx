"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import CustomCursor from "@/components/ui/CustomCursor";
import { Hero } from "@/components/Hero";

// Preload all the necessary assets
const preloadAssets = () => {
  if (typeof window !== 'undefined') {
    const imagesToPreload = ['/munene.svg'];
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
};

interface PreloaderProps {
  setIsLoading: (loading: boolean) => void;
}

const Preloader = ({ setIsLoading }: PreloaderProps) => {
  const [counter, setCounter] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => {
        const elapsedTime = Date.now() - startTime;
        const minTimeReached = elapsedTime > 3300;
        const newValue = Math.min(prev + 1, 100);

        if (newValue === 100 && minTimeReached) {
          setIsLoading(false);
          document.body.style.overflow = "";
          clearInterval(timer);
        }
        return newValue;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [setIsLoading, startTime]);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <div className="fixed bottom-8 left-8 text-gray-300 font-mono z-51 flex items-center gap-2">
        <span className="text-7xl font-bold text-gray-400 tracking-tighter">
          {Math.floor(counter)}%
        </span>
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScreenLg, setIsScreenLg] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    preloadAssets();
    setAssetsLoaded(true);

    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLg(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!assetsLoaded) {
    return <div className="w-full h-screen bg-black" />;
  }

  return (
    <div className={!isLoading ? 'cursor-none' : ''}>
      {isScreenLg && !isLoading && <CustomCursor />}
      {isLoading ? (
        <Preloader setIsLoading={setIsLoading} />
      ) : (
        <main className="cursor-none">
          <Hero />
        </main>
      )}
    </div>
  );
}