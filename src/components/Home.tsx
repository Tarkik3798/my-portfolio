// pages/index.tsx
import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white font-poppins">
      {/* Gradient Animation Background */}
      <div className="absolute inset-0 hero-section animate-gradient-x"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Hi, I'm Tarkik Acharya
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Full-Stack Developer with a passion for creating beautiful and functional web applications.
        </p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="hero-button bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}
