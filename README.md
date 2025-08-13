<p align="center" style="position: relative;">
  <img src="https://readme-typing-svg.herokuapp.com?font=Montserrat&size=28&duration=4000&pause=500&color=8A2BE2&center=true&vCenter=true&width=800&lines=SkillUp+Career+AI+🚀;AI-Powered+Job+Readiness+for+Students;From+Resume+to+Attend+Interviews" alt="Typing SVG" />
</p>


<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Firebase Studio](https://img.shields.io/badge/Firebase%20Studio-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=googlegemini&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000?style=for-the-badge&logo=json&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-FFD500?style=for-the-badge&logo=gnu-bash&logoColor=black)
![Open Source](https://img.shields.io/badge/Open--Source-✅-brightgreen?style=for-the-badge)


</div>

---

# 🚀 SkillUp Career AI 👩‍💻

> *"Bridging the gap between education and employment for Tier 2–3 college students using Google Technologies".*

<img width="1113" height="736" alt="Screenshot 2025-08-13 at 09 30 18" src="https://github.com/user-attachments/assets/c4132a2f-4460-4ba6-bb02-fa142405fc30" />

---
# 🌍 About the Project  

Students from Tier 2–3 colleges, especially in underserved regions, face major challenges in securing desirable jobs:  

 - 📉 **Lack of Industry Awareness** – Limited access to up-to-date trends and skills in demand.  

 - 📝 **Poor Application Optimization** – Struggle to tailor resumes for ATS and specific job roles.  

 - 🎤 **Interview Underperformance** – Minimal personalized practice or feedback.  

 - 📚 **Skill Gaps** – Difficulty identifying missing skills relevant to job postings.  

 - 🗺 **No Clear Roadmaps** – Absence of step-by-step guidance on learning paths, career tracks, and industry preparation.  


These barriers result in missed opportunities, low hiring rates, and skills-job mismatches.  

---

# 💡 The Solution: <a href="https://skillupcareerai.web.app/" style="color:blue;">SkillUp Career AI</a>
A Google-powered AI platform that empowers students to optimize every stage of the hiring journey — from resume creation to interview readiness — with **personalized learning roadmaps**, industry insights, and skill-building plans, while also helping recruiters find the best-fit candidates faster.

---

## ❓ Why This Project

Many talented students from Tier 2–3 colleges struggle to secure the right jobs — not because they lack potential, but because they lack **structured guidance, preparation tools, and inspiration**.  

SkillUp Career AI was created to:  
- 🗺 **Provide Clear Career Roadmaps** – Step-by-step learning and skill-building paths tailored to each student’s goals.  
- 📄 **Enhance Resume Quality** – Offer AI-powered resume analysis and guided resume generation so students can create strong, ATS-friendly resumes themselves.  
- 🎤 **Boost Interview Confidence** – Deliver personalized interview preparation with targeted practice questions and feedback.  
- 💬 **Inspire Through Real Stories** – Share testimonials and success stories from students who have navigated similar challenges.  
- 🎯 **Bridge Skill Gaps** – Highlight missing skills and recommend relevant learning resources to close them.  

This isn’t just a tool — it’s a **career growth companion** designed to guide students from **confusion to clarity** in their job search journey.

---
# 🏗️ Technical Architecture

| **Layer**     | **Technology**                                                                                     | **Purpose**                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Frontend      | **Next.js, TypeScript, Html)**                                                                     | Modern, responsive, and component-driven UI for student & recruiter portals                            |
| Backend       | **Firebase Authentication, Firestore, Cloud Functions**                                            | Scalable, serverless infrastructure for authentication, data storage, and backend logic                |
| Storage       | **Firebase Cloud Storage**                                                                          | Secure storage for resumes, profile pictures, and job-related documents                                |
| AI Layer      | **Vertex AI (Document AI, Generative AI)**                                                          | Resume parsing, job description analysis, and skill recommendations                                    |
| AI Layer      | **Google Gemini API**                                                                               | AI-powered resume-job matching, interview question generation, and feedback                            |
| Deployment    | **Firebase Hosting, IDX Cloud**                                                                     | Fast, global, and reliable hosting with integrated cloud-based development                             |
| Styling & UI  | Custom CSS, Next.js, React Components                                                               | Provides a clean, responsive interface with reusable, modular UI elements designed for performance and flexibility |                                                                                            |
| Developer Ops | **IDX Dev Environment, GitHub Actions, Firebase CLI**                                               | Cloud-based dev workflow, automated deployment, and project management                                 |

---

# ⚙️ How It Works

**1️⃣ Resume Upload & Optimization📄**

* Student uploads resume (PDF) → Stored in **Firebase Cloud Storage**.
* **Cloud Function** triggers **Vertex AI Document AI** → Parses text & skills.
* **Gemini API** compares resume with target job description → Generates improvement feedback.

**2️⃣ AI Interview Coach👩‍💻**

* Student selects target job role.
* **Gemini API** generates tailored interview questions.
* Student answers → AI evaluates and highlights skill gaps.

**3️⃣ Personalized Job Roadmaps🗺**

* AI analyzes student’s skills, goals, and target job roles.
* Generates **custom learning & preparation roadmaps** with skill-building resources, timelines, and milestones.
* Helps track progress until job readiness.

---
# 🖥️ Prototype Features (MVP)

✅ Resume Upload + AI Feedback

✅ AI-Powered Mock Interview with Instant Evaluation

✅ Personalized Job Roadmaps with Learning Milestones

---
# 📂 Project Structure

```
🤖 SkillUp-Career-AI/
├── ⚙️ .firebaserc               # Firebase project configuration
├── 🚫 .gitignore                # Ignored files for Git
├── 📄 README.md                 # Project documentation
├── 🔥 firebase.json             # Firebase hosting configuration
├── 🏠 apphosting.yaml           # Firebase App Hosting settings
├── 📦 package.json              # Dependencies and scripts
├── 🎨 tailwind.config.ts        # Tailwind CSS configuration
├── 📝 tsconfig.json             # TypeScript configuration
├── 📂 src/                      # Main source code
│   ├── 📂 app/                  # Next.js app routes
│   │   ├── 🔐 (auth)/           # Authentication pages
│   │   ├── ℹ️ about/            # About page
│   │   ├── 📞 contact/          # Contact page
│   │   ├── 📨 feedback/         # Feedback page
│   │   ├── 🎤 interviews/       # Interview module
│   │   ├── 📄 resume-generator/ # Resume builder
│   │   ├── 📄 resume-scanner/   # Resume scanning
│   │   ├── 🗺️ roadmaps/         # Learning roadmaps
│   │   └── 📜 terms/            # Terms & conditions
│   ├── 🧩 components/           # Reusable components
│   │   ├── 🖼️ layout/           # Header, footer, sidebar
│   │   ├── 🎛️ ui/               # UI elements
│   │   ├── 🤖 chatbot/          # Chatbot UI
│   │   └── 📑 sidebar/          # Sidebar widgets
│   ├── 🧠 ai/                   # AI logic & flows
│   ├── 🪝 hooks/                # Custom React hooks
│   ├── 🛠️ lib/                  # Utility functions
│   └── 🎨 styles/               # Global styles
├── 📚 docs/                     # Documentation & blueprints
├── 🖼️ public/                   # Static assets
└── 🚀 scripts/                  # Deployment & verification scripts

```

---

# 🚀 Firebase Hosting Deployment – *<a href="https://skillupcareerai.web.app/" style="color:blue;">SkillUp Career AI</a>*

## 🏁 Getting Started

This guide covers setting up Firebase Hosting for a **Next.js static export** version of SkillUp Career AI.



## ✅ Prerequisites

- **Firebase CLI** installed → [Install Guide](https://firebase.google.com/docs/cli)  
- **Node.js** installed → [Download](https://nodejs.org/)  
- **Google Account** for Firebase access  


## ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/Niharika07-B/SkillUp-Career-AI.git
cd SkillUp-Career-AI

# Install dependencies
npm install

```

## 📦 Deployment

### 1️⃣ Initialize Firebase Hosting

```bash
firebase login
firebase init hosting

```


### 2️⃣ Build & Deploy

```bash
# Quick deploy
npm run build && firebase deploy --only hosting

# Or using deploy script
chmod +x deploy.sh
./deploy.sh
```


### 3️⃣ Firebase Console

 - Manage your site → [Firebase Console](https://console.firebase.google.com)

 - Open Console → manage site, domains, analytics.


### 4️⃣ Env Vars Example

 👉🏽*GOOGLE_AI_API_KEY=your_api_key*
 
 👉🏽*FIREBASE_PROJECT_ID=your_project_id*

_Note:_ In static exports, env vars are baked in — use Cloud Functions for sensitive keys.

---
# 📸 Snapshots

<div align="center">

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/076c0024-8eab-42d7-b564-dadbb559f239" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/2fffa594-3270-4c4c-a22a-d1f330464044" width="100%"/></td>
  </tr>
  <tr align="center">
    <td><b>Home Page Section</b></td>
    <td><b>To Attend Interview</b></td>
  </tr>

  <tr>
    <td><img src="https://github.com/user-attachments/assets/9a3d4274-d446-470a-a0c6-fc667f97f410" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/cdf3efa3-f625-43a0-b87c-fe458082cd83" width="100%"/></td>
  </tr>
  <tr align="center">
    <td><b>Resume Analysis</b></td>
    <td><b>RoadMaps Section</b></td>
  </tr>

  <tr>
    <td><img src="https://github.com/user-attachments/assets/970c854c-5041-4e77-b463-3570d308fc28" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/6bc13778-43b5-4402-ae38-549a76265a0a" width="100%" alt="Screenshot 2025-08-13 at 10 30 13"/></td>
  </tr>
  <tr align="center">
    <td><b>Footer Section</b></td>
    <td><b>Contact Us Section</b></td>
  </tr>
</table>

</div>

---

# 🤝 Contributing

Contributions are welcome!  

1. **Fork** the repository  
2. **Create** your feature branch → `git checkout -b feature/AmazingFeature`  
3. **Commit** your changes → `git commit -m 'Add some AmazingFeature'`  
4. **Push** to the branch → `git push origin feature/AmazingFeature`  
5. **Open a Pull Request**  

---

# 📌 License

This project is licensed under the MIT License - Free to use, modify, and distribute.


---
























