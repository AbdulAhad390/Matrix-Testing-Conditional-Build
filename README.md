# 🚀 CI Pipeline with Matrix Testing & Conditional Build

This repository demonstrates a **GitHub Actions CI/CD pipeline** that validates Node.js projects across multiple runtimes and builds artifacts only under specific conditions.

---

## 📌 Workflow Overview

### 🔹 Triggers
- On **push** to `main` branch  
- On **push** with version tags (`v*.*.*`)  
- On **pull requests** (for tests only)

### 🔹 Jobs
1. **Test (Matrix)**
   - Runs on Node.js versions: **16, 18, 20**
   - Executes `npm test`
   - Saves results in `test-results/` (per version)
   - Uploads artifacts:
     - `test-results-16`
     - `test-results-18`
     - `test-results-20`

2. **Build**
   - Runs **only if all matrix test jobs succeed**
   - Executes **only on**:
     - Push to `main` branch, OR  
     - Push to version tags (`v*.*.*`)
   - Includes **manual approval step** before building
   - Builds project using Node.js 20 (default LTS)
   - Uploads build output from `dist/`

---

## 🛠 Features Implemented
- ✅ **Matrix Testing** across Node.js 16, 18, 20  
- ✅ **Conditional Build** (main branch or version tags only)  
- ✅ **Manual Approval Step** before build (using [trstringer/manual-approval](https://github.com/trstringer/manual-approval))  
- ✅ **Test Results Storage** in `test-results/`  
- ✅ **Build Artifacts Storage** in `dist/`  
- ✅ **Concurrency Control** → cancels superseded runs on the same branch  

---

## 📂 Artifacts
- **Test Results**: Uploaded for each Node.js version (`test-results-x`)  
- **Build Output**: Uploaded as `dist/`  

---

## 🔧 How to Use
1. Push changes to a branch → tests run automatically on all Node versions.  
2. Open a pull request → tests run on PR.  
3. Push to `main` or tag (`v*.*.*`) → build job triggers (after tests pass).  
4. Approver must **approve the build** via GitHub issue created by workflow.  
5. Build artifacts saved under `dist/`.  

---

## 📸 Example Run
- **Push to feature branch** → only tests run.  
- **Push to `main`** → tests + manual approval + build.  
- **Push tag `v1.0.0`** → tests + manual approval + build.  

---

## 🔒 Requirements
- Node.js project with:
  - `npm ci` for installing dependencies  
  - `npm test` for running tests  
  - `npm run build` for building project  
- GitHub secret: `GITHUB_TOKEN` (default provided by Actions)  

---
