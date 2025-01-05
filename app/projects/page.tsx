"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Header from "@/components/ui/header";
import BlungeAI from "@/readmefiles/BlungeAI";
import ADNI from "@/readmefiles/StyleGAn";
import DeepLearningExperimentation from "@/readmefiles/Resnet"
import JobFindingApp from "@/readmefiles/reactapp";
import PortfolioWebsite from "@/readmefiles/Portfolio";

const IMC = () => {
  return (
    <div className="text-center mt-6">
      <p className="text-lg mb-4">
        My team and I placed in the top 1% out of 13,000 students globally in the IMC Annual Trading Challenge. In this challenge, we analyzed market data from a wide range of agents and products to create profitable trading strategies.
      </p>
      <a
        href="https://github.com/maxtownson/IMC_Prosperity_2"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit mx-auto mt-6"
      >
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          View on GitHub
        </button>
      </a>
    </div>
  );
};

const data = [
  {
    category: "Machine Learning",
    title: "Training StyleGAN from scratch on ADNI",
    src: "/BrainScan.png",
    content: <ADNI />,
  },
  {
    category: "Machine Learning",
    title: "State-of-the-Art Background Removal Finetuning",
    src: "/bgremoval.png",
    content: <BlungeAI />,
  },
  {
    category: "Trading",
    title: "IMC Prosperity Trading Challenge",
    src: "/trading2.png",
    content: <IMC/>,
  },
  {
    category: "Machine Learning",
    title: "ResNet and DCGAN Training",
    src: "/cifar10.png",
    content: <DeepLearningExperimentation />,
  },
  {
    category: "App Development",
    title: "React Native Job Searching App",
    src: "/react.png",
    content: <JobFindingApp />,
  },
  {
    category: "Web Development",
    title: "Portfolio Website (This website)",
    src: "/currebtpage.png",
    content: <PortfolioWebsite />,
  },
];

export default function ProjectsPage() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main className="min-h-screen bg-neutral-900 overflow-x-hidden">
      <Header />
      <div className="w-full h-full py-8 md:py-20 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto 
            mt-4 md:mt-6 relative z-20 py-4 md:py-6 bg-clip-text text-transparent bg-gradient-to-b 
            from-neutral-100 via-neutral-400 to-neutral-700 dark:from-neutral-300 dark:via-dark dark:to-dark">
          Projects
        </h1>
        <Carousel items={cards} />
      </div>
    </main>
  );
}
