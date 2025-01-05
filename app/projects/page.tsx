"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Header from "@/components/ui/header";


const data = [
  {
    category: "Full Stack Development",
    title: "seatfinder.tech",
    src: "/seatfindersite.png",
    content:(
      <div className="space-y-4">
        <p className="text-gray-800">
          Built a production-ready web application that helps users find reward seat flights. 
        </p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Scaled to over 2500 users with 100+ paying subscribers</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Real-time access to reward seat information</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Secure payment processing with Stripe</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-2">
          <span className="font-medium">Tech Stack: </span>
          <span>React, FastAPI, Google Cloud Platform</span>
        </div>

        <a 
          href="https://seatfinder.tech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>View Live Site</span>
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    )
  },
  {
    category: "Machine Learning",
    title: "Perceiver Transformer",
    src: "/cifar10.png",
    content: (
      <div className="space-y-4">
        <p className="text-gray-800">
          Implemented a Perceiver Transformer architecture for image classification on the CIFAR-10 dataset.
        </p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>78% classification accuracy on test set</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Optimized attention mechanisms</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Custom data augmentation pipeline</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-2">
          <span className="font-medium">Tech Stack: </span>
          <span>PyTorch, CUDA, Python</span>
        </div>

        <a 
          href="https://github.com/rkoll55/PatternAnalysis-2023/tree/topic-recognition" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>View on GitHub</span>
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    )
  },
  {
    category: "Systems Programming",
    title: "Operating System Kernel",
    src: "/kernel.png",
    content: (
      <div className="space-y-4">
        <p className="text-gray-800">
          Developed a basic operating system kernel from scratch using C and Assembly language.
        </p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Memory management system with paging</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Custom bootloader implementation</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>FAT filesystem interface</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Interrupt handling and system calls</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-2">
          <span className="font-medium">Tech Stack: </span>
          <span>C, x86 Assembly, QEMU</span>
        </div>

        <a 
          href="https://github.com/rkoll55/OperatingSystem" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>View on GitHub</span>
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    )
  },
  {
    category: "Web Development",
    title: "UQ Compare",
    src: "/uqcompare.png",
    content: "Created a comprehensive course comparison platform for UQ students. Features include detailed course reviews, grade distributions, and professor ratings. Built with PHP backend, MySQL database, and modern JavaScript frontend. Serves over 1000 active student users."
  },
  {
    category: "Finance",
    title: "Stock Trading Bot",
    src: "/stocks.png",
    content: (
      <div className="space-y-4">
        <p className="text-gray-800">
          Developed an automated trading bot using Python for algorithmic stock trading.
        </p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Real-time market data integration with Alpaca API</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Advanced analysis using stochastic gradient descent</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Historical data from Yahoo Finance API</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-2">
          <span className="font-medium">Tech Stack: </span>
          <span>Python, Pandas, NumPy, Alpaca API</span>
        </div>

        <a 
          href="https://github.com/rkoll55/TradingBot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>View on GitHub</span>
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    )
  },
  {
    category: "Web Development",
    title: "This Website",
    src: "/react.png",
    content: (
      <div className="space-y-4">
        <p className="text-gray-800">
          Modern portfolio website showcasing my projects and experience.
        </p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Responsive design with smooth animations</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Dynamic project showcases and carousels</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-medium">✓</span>
            <span>Optimized performance with Next.js 13</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-2">
          <span className="font-medium">Tech Stack: </span>
          <span>Next.js 13, TypeScript, Tailwind CSS, Vercel</span>
        </div>

        <a 
          href="https://github.com/rkoll55/PortfolioSite" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>View on GitHub</span>
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    )
  }
];

export default function ProjectsPage() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main className="min-h-screen  overflow-x-hidden">
      <Header />
      <div className="w-full h-full py-8 md:py-20 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto 
            mt-4 md:mt-6 relative z-20 py-4 md:py-6 bg-clip-text text-transparent bg-black
            ">
          My Projects
        </h1>
        <Carousel items={cards} />
      </div>
    </main>
  );
}
