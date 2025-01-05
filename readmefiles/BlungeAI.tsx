import React from "react";

const BlungeAI = () => {
    return (
      <div>
        {/* Project Description Section */}
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Project Description
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            This project is a background removal demo developed as part of a consulting
            project with Blunge.AI under 180 Degrees Consulting. It aims to explore and
            demonstrate various tools for background removal, providing insights into
            how different models perform on this task. The project is accompanied by a
            research report that details the models used, their architectures, and the
            results.
          </p>
        </div>
  
        {/* Research Report Section */}
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Research Report
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            A comprehensive research report accompanies this project, outlining the
            background removal models used and their results. You can view the report{' '}
            <a
              href="https://docs.google.com/document/d/1MyD-i57LvN-rH2dc7LvEKHIrMT19zSuWtWPWVm8hRHo/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              here
            </a>
            .
          </p>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Table of Contents from the Research Report:
          </h3>
          <ul
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            <li><strong>Business Component:</strong></li>
            <ul style={{ marginLeft: "40px" }}>
              <li>Customer interview and market research</li>
              <li>Market Sentiment Analysis</li>
            </ul>
            <li><strong>Technical Component:</strong></li>
            <ul style={{ marginLeft: "40px" }}>
              <li>
                <strong>Segmentation Model Experimentation:</strong>
                <ul style={{ marginLeft: "40px" }}>
                  <li>
                    <a
                      href="https://bira.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      Bira.ai
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://segment-anything.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      SAM by Meta
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/danielgatis/rembg"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      rembg
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://arxiv.org/abs/1511.00561"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      SegNet
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Front-End Functionality And Design Thesis:</strong> Highlights
                the justification behind design decisions.
              </li>
            </ul>
          </ul>
        </div>
  
        {/* Functionality Section */}
        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Functionality
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            This demo allows users to upload their own images or use Stable
            Diffusion-generated images from Blunge.AI. By leveraging the Bira.AI model
            from Hugging Face, users can remove the background of their images with
            minimal distortion, resulting in a clean and seamless image segmentation
            process.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            If the background is not removed, users are not able to use the brush tool.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}
          >
            <img
              src="/BlungeProjectGIfs/part1 (2).gif"
              alt="Video Demo Part 1"
              style={{
                width: "80%",
                maxWidth: "800px",
                borderRadius: "8px",
              }}
            />
          </div>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            After the background is removed, users are able to toggle between viewing
            the original photo and the processed image with the background removed.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}
          >
            <img
              src="/BlungeProjectGIfs/part2.gif"
              alt="Video Demo Part 2"
              style={{
                width: "80%",
                maxWidth: "800px",
                borderRadius: "8px",
              }}
            />
          </div>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Additionally, users are able to amend any defects in the background removal
            using an erase and recover brush, with adjustable brush sizes to ensure
            precise edits.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}
          >
            <img
              src="/BlungeProjectGIfs/part3.gif"
              alt="Video Demo Part 3"
              style={{
                width: "80%",
                maxWidth: "800px",
                borderRadius: "8px",
              }}
            />
          </div>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Finally, users can directly download the segmented image as a PNG file.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}
          >
            <img
              src="/BlungeProjectGIfs/part4.gif"
              alt="Video Demo Part 4"
              style={{
                width: "80%",
                maxWidth: "800px",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
  
        {/* Tech Stack Section */}
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Tech Stack Used
          </h2>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Front-End
          </h3>
          <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
            <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
            <li>
              <strong>TypeScript:</strong> A statically typed version of JavaScript used
              for better code quality and debugging.
            </li>
            <li><strong>CSS:</strong> For styling the user interface and layout.</li>
            <li>
              <strong>React Hooks:</strong> State and lifecycle management for functional
              components.
            </li>
            <li>
              <strong>HTML5 Canvas:</strong> Used for drawing and manipulating images,
              including brush and erase tools.
            </li>
          </ul>
  
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Back-End
          </h3>
          <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
            <li><strong>Python:</strong> Used for the server-side code.</li>
            <li>
              <strong>Flask:</strong> A lightweight web framework for handling API
              requests.
            </li>
            <li>
              <strong>Transformers (HuggingFace):</strong> Used for the image segmentation
              pipeline (image-segmentation model).
            </li>
            <li><strong>Pillow (PIL):</strong> For image manipulation in Python.</li>
            <li>
              <strong>Flask-CORS:</strong> For enabling Cross-Origin Resource Sharing,
              allowing the front-end to communicate with the back-end.
            </li>
          </ul>
  
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Other Tools
          </h3>
          <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
            <li><strong>npm:</strong> Used for managing dependencies and running the front-end application.</li>
            <li><strong>Fetch API:</strong> For handling HTTP requests between the front-end and back-end.</li>
            <li><strong>Browser's Blob:</strong> To handle image downloads in the front-end.</li>
          </ul>
        </div>
  
        {/* Extension Section */}
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Extension
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            An extension to this report could involve implementing an inpainting model
            to generate a custom background for the segmented images (outpainting). A
            link to a hugging face repository can be found{' '}
            <a
              href="https://huggingface.co/docs/diffusers/advanced_inference/outpaint#image-preparation"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              here
            </a>
            .
          </p>
        </div>
        <a
      href="https://github.com/amlannag/Blunge.AI-Background-Removal?tab=readme-ov-file"
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
  
export default BlungeAI;