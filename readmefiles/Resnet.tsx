"use client";
import React from "react";

const DeepLearningExperimentation = () => {
  return (
    <div>
      {/* Title Section */}
      <div style={{ marginBottom: "60px" }}>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          This repository contains the implementation and exploration of three major
          deep learning tools. Each part focuses on different machine learning and deep
          learning techniques, applied to well-known datasets.
        </p>
      </div>

      {/* Table of Contents Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Table of Contents
        </h2>
        <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
          <li>
            <a
              href="#part-1-pca-and-cnn-on-lfw-dataset"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Part 1: PCA and CNN on LFW Dataset
            </a>
          </li>
          <li>
            <a
              href="#part-2-resnet-for-dawnbench-challenge"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Part 2: ResNet for DawnBench Challenge
            </a>
          </li>
          <li>
            <a
              href="#part-3-dcgan-on-oasis-dataset"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Part 3: DCGAN on OASIS Dataset
            </a>
          </li>
        </ul>
      </div>

      {/* Part 1 Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2
          id="part-1-pca-and-cnn-on-lfw-dataset"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Part 1: PCA and CNN on LFW Dataset
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          In this section:
        </p>
        <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
          <li>
            Explore Principal Component Analysis (PCA) and Convolutional Neural
            Networks (CNNs) for face recognition using the LFW (Labeled Faces in the
            Wild) dataset.
          </li>
          <li>
            Compare the performance of CNNs against Random Forest models and PCA,
            focusing on accuracy and computational efficiency.
          </li>
        </ul>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Using PCA, I created compactness graphs and eigenvalue representation of LFW
          faces.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <img
            src="eiganfaceplot.png"
            alt="Eigenface and PCA Compactness"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </div>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          This method produced 60% accuracy during testing compared to the CNN, which
          achieved ~86% after 12 epochs of training.
        </p>
      </div>

      {/* Part 2 Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2
          id="part-2-resnet-for-dawnbench-challenge"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Part 2: ResNet for DawnBench Challenge
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          In Part 2, I created a ResNet (18) architecture to compete in the DawnBench
          challenge. As per the ResNet paper, I implemented the architecture from
          scratch using PyTorch.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          In this model implementation, I included:
        </p>
        <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
          <li>
            Data normalization and augmentation to improve the diversity of training
            data.
          </li>
          <li>
            Batch normalization to improve the performance of the model.
          </li>
          <li>
            Skip connection layers to improve the performance and reduce the
            possibility of the vanishing gradient problem.
          </li>
          <li>
            Learning rate scheduler to increase the learning rate during training in
            order to achieve super convergence.
          </li>
        </ul>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Using these strategies, I was able to achieve 93.82% accuracy over 35 epochs
          while training the model on a GPU cluster of A100s.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          The SLURM files used to operate the cluster requests are not included as a
          part of this repository.
        </p>
      </div>

      {/* Part 3 Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2
          id="part-3-dcgan-on-oasis-dataset"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Part 3: DCGAN on OASIS Dataset
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          In Part 3, I implemented the Deep Convolutional Generative Adversarial
          Network (DCGAN) on the OASIS brain MRI dataset. The goal of this section was
          to use the dataset to generate realistic brain MRI scans.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          This involved training a Generator to learn the probability distribution of
          the brain MRI dataset by converting Gaussian noise to realistic brain images.
          Simultaneously, I trained a Discriminator to discern between generated brain
          images and real images.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <img
            src="/training_loss_plot.png"
            alt="Training Loss of Generator and Discriminator"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </div>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          The training loss for the Generator and Discriminator can be found above.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <img
            src="fake-real.png"
            alt="Fake Real Images"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </div>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Additionally, the final Generator images can be found here after training.
        </p>
      </div>
      <a 
      href="https://github.com/amlannag/GAN-and-ResNet" 
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

export default DeepLearningExperimentation;