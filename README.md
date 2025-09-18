# 🚀 Matrix Testing & Conditional Build

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
