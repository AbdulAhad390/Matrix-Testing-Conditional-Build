# 🚀 Multi-Branch Deploy (GitHub Pages + Actions)


This repository demonstrates **Continuous Integration (CI)** and **Continuous Deployment (CD)** using **GitHub Actions** with multi-branch support.  
The project uses **Vite + React** and deploys automatically to **GitHub Pages**.

---

## 📌 Features
- ✅ Automated build pipeline with GitHub Actions  
- ✅ Separate environments for **dev** and **main** branches  
- ✅ Preview deployments for `dev` branch  
- ✅ Production deployments for `main` branch  
- ✅ Runs **lint**, **tests**, and **build** before deploying  

---

## 🔄 Workflow Explanation
The workflow (`.github/workflows/deploy.yml`) is triggered:
- On **push** to `main` or `dev`  
- On **pull requests**  

### Jobs:
1. **CI (Continuous Integration)**
   - Install dependencies  
   - Run `lint` (if available)  
   - Run `test` (if available)  
   - Run `build` (Vite build)  
   - Upload build artifact for deployment  

2. **Deploy QA (Preview)**
   - Runs only when pushing to `dev`  
   - Deploys a **preview site** using GitHub Pages  

3. **Deploy Production**
   - Runs only when pushing to `main`  
   - Deploys the **production site** using GitHub Pages  

---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/AbdulAhad390/Multi-Branch-Deploy.git
cd Multi-Branch-Deploy
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## 👨‍💻 Author

**Abdul Ahad**

