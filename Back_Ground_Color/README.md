# 🎨 Background Color Changer (useEffect)

A clean and interactive **Background Color Changer** built with React that dynamically updates the page background using multiple color buttons.  
This project demonstrates **real-world usage of `useEffect`** for handling side effects in React.

> Background changes instantly when a button is clicked 🎉
---

## ✨ Features

- 🎯 Change background color with a single click
- 🔁 Uses `useEffect` for side-effect handling
- 🎨 Multiple color buttons
- ⚡ Instant UI updates
- 📱 Responsive & lightweight

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Hooks Used:** `useState`, `useEffect`  
- **Styling:** CSS  

---

## 🚀 How It Works

1. User clicks a color button
2. Selected color is stored in React state
3. `useEffect` listens for color changes
4. Background color updates automatically

---

## 🧠 Core Logic (Conceptual)

- `useState` → stores selected color  
- `useEffect` → runs **only when color changes**  
- DOM background is updated **without reload**

---

## 📂 Project Structure

```text
background-color-changer/
│
├── src/
│   ├── components/
│   │   └── ColorButtons.jsx
│   ├── App.jsx
│   └── index.js
│
├── public/
└── README.md
```
## 🧠 Key Concepts Learned

- Side effects in React

- Dependency array in useEffect

- State-driven UI updates

- Event handling

- Clean component separation

---
```bash
git clone https://github.com/Durgaprasad4289/React-Projects.git
cd background-color-changer
npm install
npm start
```
