---
title: "Facial Recognition Attendance System"
description: "An automated face recognition system built with Python and OpenCV"
pubDate: "2025-04-29"
heroImage: "/FacialRec-portfolio.png"
---

This project implements a facial recognition system that **automatically marks attendance** using your webcam and a set of reference face images. It’s a great entry point into **computer vision** and **real-time facial analysis** with Python.

---

## 📎 GitHub Repository

🔗 [View the source code on GitHub](https://github.com/graceieg/AttendanceProject)

---

## 📸 Overview

Using the `face_recognition` library and OpenCV, the system scans a webcam feed and compares detected faces against a database of known images. When a match is found, it:

- Displays the person's name on the screen
- Logs the name and timestamp to `Attendance.csv`

---

## 🧠 Technologies Used

- **Python 3**
- [`face_recognition`](https://github.com/ageitgey/face_recognition)
- **OpenCV**
- **NumPy**
- **CSV File Handling**

---

## ⚙️ How It Works

1. Loads known face images from the `ImagesAttendance/` folder
2. Encodes each face using the `face_recognition` library
3. Captures real-time video via webcam
4. Matches any detected face against the known encodings
5. Logs attendance when a match is made

---

## 🚀 Getting Started

### 📂 Folder Setup
<pre><code>
├── Attendance.csv
├── AttendanceProject.py
├── Basics.py
├── ImagesAttendance
│   ├── Example Test.png
│   ├── Example.png
│   └── Example.JPG
└── ImagesBasic
    ├── Example Test.png
    ├── Example.png
    └── Example.JPG
</code></pre>



python AttendanceProject.py