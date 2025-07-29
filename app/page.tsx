"use client";
import { useState, useEffect, Suspense } from "react";
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
    })
  }
}

interface PreloaderProps {
  setIsLoading: (loading: boolean) => void;
}
const Preloader = ({ setIsLoading }: PreloaderProps) => {
  const [counter, setCounter] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [startTime] = useState(Date.now());
  
  useEffect(() => {
    
  }, [])
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScreenLg, setIsScreenLg] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    preloadAssets();
    setAssetsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.cursor = 'none';
    }
  }, [isLoading]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLg(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  
  if (!assetsLoaded) {
    return <div className="w-full h-screen bg-black"/>;
  }

  console.log("Yoooo", isScreenLg, isLoading)

  return (
    <div className={!isLoading ? 'cursor-none' : ''}>
      {isScreenLg && !isLoading && <CustomCursor />}
      {isLoading $$ <Preloader setIsLoading={setIsLoading} />}
    </div>
  );
}
