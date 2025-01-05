"use client";
import React from "react";

const JobFindingApp = () => {
  return (
    <div>
      {/* Title Section */}
      <div style={{ marginBottom: "60px" }}>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          This project is a mobile job-finding app that was created using React Native
          tutorials from YouTube, in preparation for my Front-end development
          internship with Fortus. The tech stack includes React Native, React, and
          Expo Router and was written fully in JavaScript with some components written
          in HTML.
        </p>
      </div>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <img
            src="/reactimg.png"
            alt="Fake Real Images"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </div>
      {/* Features Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Features
        </h2>
        <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
          <li>
            A live updated feed of nearby and popular jobs, retrieved using an API
            from RapidAPI.
          </li>
          <li>
            Users can click on jobs to get further information regarding the job role
            and responsibilities.
          </li>
          <li>
            At the bottom of the page, users can click the apply button to get rerouted
            to an application site.
          </li>
        </ul>
      </div>

      {/* Tech Stack Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Tech Stack
        </h2>
        <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
          <li><strong>React Native:</strong> For building the mobile application.</li>
          <li><strong>React:</strong> Used as the JavaScript library for UI components.</li>
          <li><strong>Expo Router:</strong> For handling navigation in the app.</li>
          <li>
            <strong>JavaScript and HTML:</strong> The app was primarily written in
            JavaScript with some HTML components.
          </li>
        </ul>
      </div>
      <a 
      href="https://github.com/amlannag/React-Native-App" 
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

export default JobFindingApp;