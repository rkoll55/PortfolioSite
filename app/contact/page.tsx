"use client";
import React from "react";
import Link from "next/link";
import Header from "@/components/ui/header";
import { Cover } from "@/components/ui/cover";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8">
            <div className="text-center">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto 
            text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-700 white:from-neutral-300 white:via-dark white:to-dark">
              Let&apos;s <Cover>Build</Cover> Something!
            </h1>
            <p className="text-3xl text-gray-400">
              Let&apos;s connect! Feel free to reach out for opportunities or just to say hello.
            </p>
            {/* <p className="text-2xl text-gray-400 mt-5">
              amlannag12@gmail.com
            </p> */}
            {/* <p className="text-2xl text-gray-400 mt-5">
              +61 480 123 226
            </p> */}
            <div className="flex items-center justify-center space-x-6 mt-5">
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/amlan-nag-uq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 hover:fill-blue-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77A1.75 1.75 0 000 1.75v20.5C0 23.22.78 24 1.75 24h20.5c.97 0 1.75-.78 1.75-1.75V1.75A1.75 1.75 0 0022.23 0zM7.12 20.48H3.56V9.13h3.56zm-1.78-13c-1.14 0-2.07-.93-2.07-2.07 0-1.13.93-2.06 2.07-2.06s2.06.93 2.06 2.07-.93 2.06-2.06 2.06zm15.43 13h-3.56v-5.72c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.83H9.56V9.13h3.42v1.55h.05c.47-.89 1.61-1.82 3.31-1.82 3.54 0 4.2 2.33 4.2 5.36z" />
                  </svg>
                </a>

                {/* GitHub Icon */}
                <a
                  href="https://github.com/amlannag?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.84 10.96.57.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.18.69-3.85-1.53-3.85-1.53-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.54-.29-5.22-1.27-5.22-5.65 0-1.25.45-2.27 1.17-3.07-.12-.29-.51-1.45.11-3.01 0 0 .96-.31 3.14 1.17a10.97 10.97 0 015.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.56.23 2.72.11 3.01.72.8 1.17 1.82 1.17 3.07 0 4.39-2.68 5.36-5.23 5.65.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.67.8.56C20.72 21.43 24 17.1 24 12 24 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>
              </div>

          </div>
        </div>
      </div>
    </main>
  );
}
