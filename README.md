
# 🤖 AI Code Reviewer

AI Code Reviewer is a web-based application that allows users to paste their code and receive instant AI-generated feedback. It is built using **React.js** (Vite) on the frontend and **Node.js** with **Express** on the backend.

## 🧠 Features

- 📄 Real-time code review via AI
- 🧠 Backend-powered review system using AI APIs
- 🌙 Dark-mode themed code editor
- 🎨 Syntax highlighting using PrismJS
- 🚀 Modern UI built with React and Tailwind CSS

## 📁 Folder Structure

```
Code_Reviewer/
│
├── backend/                  # Node.js backend (Express + AI logic)
│   └── index.ts             # Main server file
│
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   └── components/      # Custom UI components
│   └── public/
│
├── README.md
└── package.json
```

## 🚀 Getting Started

### Step 1: Clone the repository

```bash
git clone https://github.com/Gauravlodhi530/Code_Reviewer.git
cd Code_Reviewer
```

### Step 2: Install and run the backend

```bash
cd backend
npm install
npx nodemon index.ts
```

> Make sure your backend runs on `http://localhost:3000`

### Step 3: Install and run the frontend

```bash
cd ../frontend
npm install
npm run dev
```

> Frontend runs on `http://localhost:5173`

## 🔧 Tech Stack

- **Frontend:** React.js, Vite, PrismJS, Tailwind CSS
- **Backend:** Node.js, Express, Axios
- **AI Integration:** Gemini API or any custom API endpoint (configurable in backend)

## 🙋‍♂️ Author

**Gaurav Lodhi**  
📧 gauravlodhi530@gmail.com  
🌐 [LinkedIn](https://www.linkedin.com/in/gauravlodhi530)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## ⭐️ Support

If you like this project, give it a ⭐️ on GitHub to show your support.
