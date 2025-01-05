import React from "react";

const PortfolioWebsite = () => {
  return (
    <div style={{ padding: "20px", lineHeight: "1.6" }}>
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        This represents my first full-scale website development project, serving
        as both a learning experience and a practical application of modern web
        technologies. The project was built from the ground up, incorporating
        various cutting-edge tools and frameworks to create a responsive and
        interactive web experience.
      </p>

      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Tech Stack
      </h2>

      <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
        Frontend Framework
      </h3>
      <ul style={{ fontSize: "18px", marginBottom: "20px" }}>
        <li>
          <strong>Next.js 14:</strong> React framework with server-side
          rendering and routing.
        </li>
        <li>
          <strong>React 18:</strong> UI library for building component-based
          interfaces.
        </li>
        <li>
          <strong>TypeScript:</strong> For type-safe JavaScript development.
        </li>
      </ul>

      <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
        Styling
      </h3>
      <ul style={{ fontSize: "18px", marginBottom: "20px" }}>
        <li>
          <strong>Tailwind CSS:</strong> Utility-first CSS framework.
        </li>
        <li>
          <strong>Framer Motion:</strong> For smooth animations and transitions.
        </li>
        <li>
          <strong>Shadcn UI:</strong> For reusable UI components.
        </li>
      </ul>

      <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
        Development Tools
      </h3>
      <ul style={{ fontSize: "18px", marginBottom: "20px" }}>
        <li>
          <strong>ESLint:</strong> For code linting and maintaining code
          quality.
        </li>
        <li>
          <strong>PostCSS:</strong> For processing CSS with JavaScript.
        </li>
        <li>
          <strong>npm:</strong> Package management.
        </li>
      </ul>

      <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
        Deployment & Hosting
      </h3>
      <ul style={{ fontSize: "18px", marginBottom: "20px" }}>
        <li>
          <strong>Vercel:</strong> For hosting and automatic deployments.
        </li>
        <li>
          <strong>Git:</strong> Version control.
        </li>
      </ul>
      <a 
      href="https://github.com/amlannag/website" 
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

export default PortfolioWebsite;