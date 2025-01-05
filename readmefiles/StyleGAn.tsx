import React from "react";

const ADNI = () => {
    return (
      <div>
      {/* Title Section */}
      <div style={{ marginBottom: "20px"}}>
        <p style={{ fontSize: "18px", lineHeight: "1.6"}}>
          This repository discusses the <strong>training data augmentation</strong>,{" "}
          <strong>module development</strong>, and the overall <strong>training process</strong> for the
          original StyleGAN model. Although more advanced models such as <strong>StyleGAN2</strong> and{" "}
          <strong>StyleGAN3</strong> have since been introduced, the original <strong>StyleGAN</strong> was
          chosen for this project due to its pioneering role in integrating the{" "}
          <strong>style-based architecture</strong> into generative adversarial networks (GANs).
        </p>
      </div>
  
      {/* Data Set Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          id="data-set"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Data Set
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          For this training, the <strong>Alzheimer's Disease Neuroimaging Initiative (ADNI)</strong>{" "}
          dataset was used. The dataset consists of MRI brain scans of patients with{" "}
          <strong>Alzheimer's Disease (AD)</strong> and <strong>Normal Controls (NC)</strong>. All images are
          in grayscale and have a resolution of <strong>256 x 256 pixels</strong>.
        </p>
  
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ textAlign: "center", marginRight: "40px" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>AD Image</p>
            <img
              src="/Readme_images/AD data set image.jpeg"
              alt="AD Image"
              style={{ width: "300px", borderRadius: "8px" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>NC Image</p>
            <img
              src="/Readme_images/NC data set image.jpeg"
              alt="NC Image"
              style={{ width: "300px", borderRadius: "8px" }}
            />
          </div>
        </div>
  
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          The dataset contains approximately <strong>30,000 images</strong> in total, with{" "}
          <strong>20,000</strong> images allocated for training and <strong>10,000</strong> for testing. For
          the training of my StyleGAN, I exclusively used the training images, and they were sufficient to
          generate clear MRI brain scans.
        </p>
      </div>
  
      {/* Project Goal Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          id="project-goal"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Project Goal
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom:"10px" }}>
          The goal of the project is to generate synthetic brain MRI scans for AD and NC MRI classes from
          the ADNI dataset using a StyleGAN. By doing so, the StyleGAN should become informed regarding the
          distinct image styles that exist within the dataset. We should then be able to highlight this
          through creating a t-SNE plot of the StyleGAN's latent space (W-style codes).
        </p>
  
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Some applications of this project could be to supplement real brain MRI scans in scenarios where
          patient confidentiality is important.
        </p>
      </div>
  
      {/* File Structure Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          id="file-structure"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
  
            marginBottom: "20px",
          }}
        >
          File Structure
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          This repository consists of the following five major files:
        </p>
        <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
          <li>
            <strong>
              <code>dataset.py</code>
            </strong>
            : Responsible for all data augmentation and batch loading.
          </li>
          <li>
            <strong>
              <code>model.py</code>
            </strong>
            : Defines the model architecture implemented using PyTorch. A large section of this was taken
            from Abd Elilah TAUIL's blog, which can be found in references.
          </li>
          <li>
            <strong>
              <code>params.py</code>
            </strong>
            : Contains important parameters for the model.
          </li>
          <li>
            <strong>
              <code>train.py</code>
            </strong>
            : Defines the training loop and training function.
          </li>
          <li>
            <strong>
              <code>predict.py</code>
            </strong>
            : Implements a class for loading models and generating images.
          </li>
        </ul>
      </div>
  
      {/* Model Architecture Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          id="model-architecture"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Model Architecture
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          The StyleGAN model architecture is similar to the GAN with a few changes. The GAN model relied on
          an adversarial network that trained a Generator and a Discriminator to progressively improve the
          image generation outputs. However, a major issue with the GAN model was its proneness to
          overfitting, model collapse, and lack of diversity in the output images.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Some significant changes were made relative to the GAN model.
        </p>
  
        <div style={{  display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "40px" }}>
          <img
            src="/Readme_images/model structure.png"
            alt="Model Architecture"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </div>
  
        {/* Subsections */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            Introduction of the Mapping Network
          </h3>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            This network maps the latent space <strong>z</strong> with another latent space{" "}
            <strong>w</strong>. This allows more control over the generated images by influencing different
            layers of the generator with styles.
          </p>
        </div>
  
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            Adaptive Instance Normalization (AdaIN)
          </h3>
          <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
            <img
              src="/Readme_images/AINI.png"
              alt="AdaIN"
              style={{ width: "60%", maxWidth: "400px", borderRadius: "8px" }}
            />
          </div>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Adaptive Instance Normalization (AdaIN) adjusts the <strong>mean</strong> ( μ(x_i) ) and{" "}
            <strong>variance</strong> ( σ(x_i) ) of the input features (like an image) based on the style you
            want to apply.
          </p>
        </div>
  
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            Mixing Regularization
          </h3>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            This technique passes multiple latent vectors to different style layers, preventing overfitting
            and helping the model generalize styles better.
          </p>
        </div>
  
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            Gradient Penalty
          </h3>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Some components of the model, such as the discriminator, were taken directly from the ProGAN
            paper. In addition, a gradient penalty module was created based on the{" "}
            <strong>Wasserstein GAN with Gradient Penalty</strong> paper.
          </p>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "15px",
              borderRadius: "5px",
              overflowX: "auto",
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "10px",
            }}
          >
            <code>
              {`def gradient_penalty(disc, real, fake, alpha, train_step, device="CPU"):
  
    BATCH_SIZE, C, H, W = real.shape
    beta = torch.rand((BATCH_SIZE, 1, 1, 1)).repeat(1, C, H, W).to(device)
    interpolated_images = real * beta + fake.detach() * (1 - beta)
    interpolated_images.requires_grad_(True)
        
    mixed_scores = disc(interpolated_images, alpha, train_step)
    gradient = torch.autograd.grad(
            inputs=interpolated_images,
            outputs=mixed_scores,
            grad_outputs=torch.ones_like(mixed_scores),
            create_graph=True,
            retain_graph=True,
    )[0]
        
    gradient = gradient.view(gradient.shape[0], -1)
    gradient_norm = gradient.norm(2, dim=1)
    gradient_penalty = torch.mean((gradient_norm - 1) ** 2)
    
    return gradient_penalty`}
            </code>
          </pre>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            The model implementation was heavily inspired by a Digital Ocean blog by{" "}
            <a href="https://blog.paperspace.com/author/abd/">Abd Elilah TAUIL</a>.
          </p>
        </div>
  
        {/* Advantages and Disadvantages */}
        <div style={{ marginBottom: "40px" }}>
          <h3
            id="stylegan-advantages"
            style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
          >
            StyleGAN Advantages
          </h3>
          <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
            <li>
              <strong>High-Quality Image Generation:</strong> Produces highly realistic and detailed images.
            </li>
            <li>
              <strong>Control Over Image Style:</strong> The StyleGAN is better at generalizing styles due to
              its style mapping module.
            </li>
            <li>
              <strong>Progressive Training:</strong> Generator and Discriminator are initially trained on
              smaller images, and the list is slowly increased. This provides faster training.
            </li>
          </ul>
        </div>
  
        <div style={{ marginBottom: "40px" }}>
          <h3
            id="stylegan-disadvantages"
            style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
          >
            StyleGAN Disadvantages
          </h3>
          <ul style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
            <li>
              <strong>Computationally Expensive:</strong> Requires large GPUs and long training times,
              particularly with larger image sizes.
            </li>
            <li>
              <strong>Hard to Extend to Different Modalities:</strong> It is difficult to adapt for video,
              audio, or non-image tasks.
            </li>
            <li>
              <strong>Highly Dependent on the Dataset Used:</strong> It can be difficult to generate images
              which differ significantly from the training data.
            </li>
          </ul>
        </div>
      </div>
  
      {/* Continue with other sections similarly */}
      {/* Data Augmentation Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          id="data-augmentation"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Data Augmentation
        </h2>
        <pre
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "5px",
            overflowX: "auto",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          <code>
            {`augmentation_transforms = transforms.Compose([
  transforms.Grayscale(num_output_channels=1),
  transforms.Resize((image_size, image_size)),
  transforms.RandomHorizontalFlip(),
  Transforms.ToTensor()
  ])`}
          </code>
        </pre>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          To reduce overfitting, the following augmentations were applied. Random horizontal flips were
          performed, but vertical flips were excluded.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Additionally, the images were converted to grayscale with a single channel to improve training
          efficiency.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          The image size was progressively adjusted throughout training, starting from 4x4 and scaling up to
          256x256 per batch. This process will be discussed in detail in the following section.
        </p>
      </div>
  
      {/* Training Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          id="training"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Training
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Due to the length and intensity of training, the model was trained on an external H100 GPU. The two
          data classes AD and NC were trained separately, in order to allow us to intentionally generate each
          class.
        </p>
  
        {/* Test Run 1 */}
        <div style={{ marginBottom: "40px" }}>
          <h3
            id="test-run-1"
            style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
          >
            Test Run 1
          </h3>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            The initial run had a wide range of issues. For this model, I attempted to directly generate 256
            x 256 images, which manifested poorly as the model did not converge resulting in unrecognizable
            images.
          </p>
          <div style={{ 
              display: "flex", 
              justifyContent: "center",
              marginTop: "40px", 
              marginBottom: "40px" 
            }}>
            <img
              src="/Readme_images/Test 1 output.png"
              alt="Initial Test Results"
              style={{ width: "80%", maxWidth: "600px", borderRadius: "8px" }}
            />
          </div>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            This issue occurred due to an error in the data augmentation and generator setup. During this
            test run, the input image was processed with 3 channels, and augmentations such as saturation
            adjustments, blurring, and discoloration were applied. This led the model to mistakenly interpret
            the image as colored. Additionally, using 3 channels caused the generator and discriminator to
            converge more slowly, contributing to the poor image quality observed above.
          </p>
  
          <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "30px" }}>Adjustments:</p>
          <ol style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
            <li>
              The generator and data augmenter were set to only output grayscale images with single channels.
            </li>
            <li>
              The image sizes were progressively increased{" "}
              <code>IMAGE_SIZES = [4, 8, 16, 32, 64, 128, 256]</code>.
            </li>
          </ol>
        </div>
  
        {/* Test Run 2 */}
        <div style={{ marginBottom: "40px" }}>
          <h3
            id="test-run-2"
            style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
          >
            Test Run 2
          </h3>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            The images produced after the initial Test 2 were significantly better. However, there was still
            one major problem related to GPU resource allocation.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            It was noticed that during the training, CPU usage would remain relatively low and would
            occasionally drop off.
          </p>
          <div style={{ 
                display: "flex", 
                justifyContent: "center",
                marginTop: "40px", 
                marginBottom: "40px" 
              }}>
            <img
              src="/Readme_images/CPU Usage.png"
              alt="CPU Usage"
              style={{ width: "80%", maxWidth: "400px", borderRadius: "8px" }}
            />
          </div>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            This indicated that there was room to further utilize the CPU or that the model was being
            bottlenecked in a particular location. A similar problem was faced with the GPU utilization,
            where particularly in the earlier image sizes <strong>(4 to 64)</strong>, the GPU was being
            underutilized.
          </p>
          <div style={{ 
              display: "flex", 
              justifyContent: "center",
              marginTop: "20px", 
              marginBottom: "20px" 
            }}>
            <img
              src="/Readme_images/GPU Usage.png"
              alt="GPU Usage"
              style={{ width: "80%", maxWidth: "700px", borderRadius: "8px" }}
            />
          </div>
  
          <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "30px" }}>Adjustments:</p>
          <ol style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
            <li>
              To further utilize the CPU, the number of workers used in the data loader was increased from{" "}
              <strong>6 -&gt; 10</strong>.
            </li>
            <li>In addition, the batch sizes were doubled for each image size.</li>
          </ol>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "15px",
              borderRadius: "5px",
              overflowX: "auto",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            <code>
              {`BATCH_SIZES = {4: 256, 8: 128, 16: 64, 32: 32, 64: 16, 128: 8, 256: 4}
  
  BATCH_SIZES = {4: 512, 8: 256, 16: 128, 32: 64, 64: 32, 128: 16, 256: 8}`}
            </code>
          </pre>
        </div>
      </div>
  
      {/* Training Results Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          id="training-results"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Training Results
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          The following plots show the progressive output from the generator at each image size, slowly
          increasing from 4, 8, 16, 32, 64, 128, and finally 256. In the earlier stages, the images appear
          highly pixelated due to the low resolution. Some blurring was unintentionally introduced by the
          image scaling software used during processing.
        </p>
        <div style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}>
          <img
            src="/Readme_images/NC image progress.jpg"
            alt="NC Image Progress"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}>
          <img
            src="/Readme_images/AD image progress.jpg"
            alt="AD Image Progress"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </div>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          After training was completed, each of these models was used to generate images.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>Two things of note:</p>
        <ol style={{ fontSize: "18px", lineHeight: "1.8", marginLeft: "20px" }}>
          <li>These output images are highly detailed (of the same standard as the input dataset).</li>
          <li>There is high diversity suggesting that the model did not experience mode collapse.</li>
        </ol>
      </div>
  
      {/* AD Generated Images */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          AD Generated Images
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "20px",
          }}
        >
          <img
            src="/Readme_images/AD GENERATES IMAGES/generated_image_1001.png"
            alt="AD Generated Image 1"
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <img
            src="/Readme_images/AD GENERATES IMAGES/generated_image_1004.png"
            alt="AD Generated Image 2"
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <img
            src="/Readme_images/AD GENERATES IMAGES/generated_image_1006.png"
            alt="AD Generated Image 3"
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <img
            src="/Readme_images/AD GENERATES IMAGES/generated_image_1008.png"
            alt="AD Generated Image 4"
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <img
            src="/Readme_images/AD GENERATES IMAGES/generated_image_1009.png"
            alt="AD Generated Image 5"
            style={{ width: "150px", borderRadius: "8px" }}
          />
        </div>
      </div>
  
      {/* NC Generated Images */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          NC Generated Images
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          <img
            src="/Readme_images/NC Generated Images/generated_image_1001.png"
            alt="NC Generated Image 1"
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <img
            src="/Readme_images/NC Generated Images/generated_image_1004.png"
            alt="NC Generated Image 2"
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <img
            src="/Readme_images/NC Generated Images/generated_image_1006.png"
            alt="NC Generated Image 3"
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <img
            src="/Readme_images/NC Generated Images/generated_image_1018.png"
            alt="NC Generated Image 4"
            style={{ width: "150px", borderRadius: "8px" }}
          />
          <img
            src="/Readme_images/NC Generated Images/generated_image_1027.png"
            alt="NC Generated Image 5"
            style={{ width: "150px", borderRadius: "8px" }}
          />
        </div>
      </div>
  
      <div style={{ marginBottom: "60px" }}>
          <h2
            id="training-loss"
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Training Loss
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            In the training process of my GAN, both the discriminator loss and generator
            loss show distinct patterns of spikes throughout the training cycle. These
            spikes are not random; they incrementally increase and correspond to
            specific points during the training where the model transitions to a
            higher-resolution image size. Each time the model completes a training
            stage, the image resolution is doubled. This causes an immediate and notable
            increase in both the discriminator and generator losses.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}
          >
            <img
              src="/Readme_images/NC Loss.png"
              alt="NC Loss"
              style={{
                width: "80%",
                maxWidth: "600px",
                borderRadius: "8px",
              }}
            />
          </div>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            At each of these transitions, the model starts training on images of a
            larger size, requiring the generator to produce higher-resolution images and
            the discriminator to evaluate them with higher detail.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}
          >
            <img
              src="/Readme_images/AD Loss1.png"
              alt="AD Loss"
              style={{
                width: "80%",
                maxWidth: "600px",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
  
        {/* Model Benchmarking Section */}
        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Model Benchmarking
          </h2>
  
          {/* T-SNE Plot Section */}
          <div style={{ marginBottom: "60px" }}>
            <h2
              id="t-sne-plot"
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              T-SNE Plot
            </h2>
            <div
              style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}
            >
              <img
                src="/Readme_images/2d TSNE.png"
                alt="2D T-SNE Plot"
                style={{
                  width: "70%",
                  maxWidth: "600px",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div
              style={{ display: "flex", justifyContent: "center",marginTop: "20px",  marginBottom: "20px" }}
            >
              <img
                src="/Readme_images/3d TSNE.png"
                alt="3D T-SNE Plot"
                style={{
                  width: "70%",
                  maxWidth: "600px",
                  borderRadius: "8px",
                }}
              />
            </div>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              The t-SNE plot was generated using the style codes from each model, which
              were then processed through TensorFlow's t-SNE function to visualize the
              clustering of these codes. Below, we present both a 2D t-SNE plot (with 2
              components) and a 3D version (with 3 components). These plots show a clear
              distinction between two well-separated clusters, which suggests that the
              model has successfully developed a well-structured W space. This structure
              reflects the model's ability to identify and represent the two different
              styles in the dataset—likely corresponding to the Alzheimer's Disease (AD)
              and Normal Control (NC) brain images. Additionally, the clustering is
              evidence that the model has effectively generalized these styles,
              demonstrating its ability to distinguish between the two categories in the
              latent space.
            </p>
          </div>
  
          {/* Cosine Similarity Section */}
          <div style={{ marginBottom: "60px" }}>
            <h3
              id="cosine-similarity"
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Cosine Similarity
            </h3>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              On top of the t-SNE plot, the mean style code was calculated, and the
              cosine similarity between the AD and NC style vectors was computed. The
              resulting value of <strong>0.0102</strong> is close to zero, indicating
              that the vectors are nearly orthogonal in the W space. This suggests that
              the model has effectively learned to distinguish between the two styles
              (AD and NC).
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              Although these two styles—AD and NC—are very similar and sometimes
              indistinguishable by untrained professionals, the StyleGAN model, being
              trained specifically to recognize only these two styles, exaggerates the
              differences between them in the latent space. This further supports that
              the StyleGAN has successfully captured the subtle differences between the
              two categories, despite the minimal visual distinctions in the dataset.
            </p>
          </div>
  
          {/* FID Score Section */}
          <div style={{ marginBottom: "60px" }}>
            <h3
              id="fid-score"
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              FID Score
            </h3>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              FID (Fréchet Inception Distance) is a metric used to evaluate the quality
              of images generated by the model. It compares the statistical distribution
              of real and generated images, where lower values indicate better quality.
              In this project, the Clean FID score was used to ensure a more consistent
              and reliable evaluation.
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              <strong>Clean FID AD Score: 32.00</strong>
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              <strong>Clean FID NC Score: 39.58</strong>
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              For this evaluation, 3000 real images and 3000 generated images were used
              for both the AD and NC models. A score around 30 is considered relatively
              good, as it suggests the generated images are reasonably close to the real
              ones. The original StyleGAN paper achieved an FID of 4.4159; however, it
              is difficult to compare these values directly as the paper used the FFHQ
              dataset with 50,000 images.
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              The AD model achieved a slightly better score, indicating that the images
              generated for the Alzheimer's Disease category are closer to the real data
              distribution compared to the NC (Normal Control) images. However, both
              scores suggest that the models are producing relatively good-quality
              images.
            </p>
          </div>
        </div>
      <a
        href="https://github.com/amlannag/PatternAnalysis-2024/tree/topic-recognition/recognition"
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

export default ADNI;