
# Baseerah Experimental Platform

![Baseerah Project Banner](https://raw.githubusercontent.com/m142411/Baseera-Platform/e3c0d652a2ad0b184f4628e87625f46cffac3efc/mm.png)

## ⚠️ Notice: This Project is a Proof of Concept (PoC)

This project is not a final product. It is currently in the experimental phase to demonstrate the technical concept and build initial prototypes.  
Some features may not function as expected and could contain bugs.

---

## 🎯 Core Idea

Baseerah is an integrated AI-driven platform designed to combat digital misinformation and provide intelligent legal consultation, with a primary focus on Saudi regulations and laws.

---

## 🛠️ Core Components (Prototypes)

The platform currently consists of two main AI tools:

### 1. Bayyanah (The Forensic Expert) 🕵️‍♂️  
An image analysis tool that detects deepfakes and AI-generated images.  
* Purpose: Develop a PoC model capable of distinguishing between real and fake images.  
* Technology: Convolutional Neural Network (CNN) built using TensorFlow/Keras.  
* Dataset: Trained on the CIFAKE dataset (120,000 images).

### 2. Yaqeen (The Legal Advisor) ⚖️  
An AI assistant specialized in answering questions related to Saudi laws and regulations.  
* Purpose: Build a PoC capable of retrieving information from official legal documents.  
* Technology: Built using RAG (Retrieval-Augmented Generation) and the Flowise AI no-code platform.  
* Data Source: Answers are retrieved directly from PDF files containing Saudi laws, royal decrees, and regulations.

---

## 💻 Tech Stack

* Backend: Python (Flask / FastAPI), PostgreSQL / SQLite  
* Frontend: HTML, CSS, JavaScript (framework TBD — React or Vue planned)  
* AI Models:  
  * Bayyanah: TensorFlow / Keras  
  * Yaqeen: Flowise AI, RAG, Large Language Models (LLMs)  
* Development Tools: VS Code, GitHub Copilot, Google Colab

---

## 🚀 Project Status: Experimental

* [x] Bayyanah (Image Detector): Prototype model trained and validated.  
* [ ] Yaqeen (Legal Assistant): Flow design and document collection in progress.  
* [ ] Backend: API structure under development.  
* [ ] Frontend: In early design phase.

---

## 🏁 Getting Started

Each subdirectory contains its own detailed instructions:

1. `model_bayanah/` – Contains Colab notebook and trained .keras model file.  
2. `backend/` – Includes Flask server setup and API documentation.  
3. `frontend/` – Includes UI/UX design and run instructions.

---

## 🗺️ Roadmap

* ✅ Phase 1: Build and train Bayyanah prototype.  
* ⏳ Phase 2: Develop Yaqeen legal assistant prototype.  
* 🗓️ Phase 3: Build backend and integrate both models via APIs.  
* 🗓️ Phase 4: Develop the frontend interface.  
* 🗓️ Phase 5: Conduct beta testing and deployment.

---

## 👩‍💻 Developer

Developed by: Mays Mubarak Alshamrani  

---

## 🌐 Summary

> *Baseerah* is a vision-driven project aiming to merge AI for truth verification with legal intelligence to enhance digital awareness and promote trust in online information within the Saudi context.
