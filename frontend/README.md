# Frontend - MERN Project

This is the **frontend** of the MERN project, built using **Vite + React** with **Tailwind CSS** (latest version), **Mantine UI**, and **Lucide-react** for icons.

---

## 🚀 Tech Stack
- **React (Vite)**
- **Tailwind CSS (latest)**
- **Mantine UI** (for components)
- **Lucide-react** (for icons)

---

## 📂 Project Structure


frontend/
│── public/ # Static assets
│── src/
│ ├── assets/ # Images, icons
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page components
│ ├── hooks/ # Custom React hooks
│ ├── context/ # Context API
│ ├── App.jsx # Root App
│ └── main.jsx # Entry point
│── index.html
│── tailwind.config.js
│── postcss.config.js
│── package.json


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/SujitVishwakarma/portfolio-challenge/tree/main/frontend
cd your-repo/frontend

2️⃣ Install dependencies
npm install

3️⃣ Run development server
npm run dev

4️⃣ Build for production
npm run build


🎨 Styling

Tailwind is fully configured (latest version).

Mantine is used for UI components.

Lucide-react is used for icons.

📦 Common Scripts

npm run dev → Start development server

npm run build → Build project

npm run preview → Preview build



---

### 📌 Backend – `README.md`
```markdown
# Backend - MERN Project

This is the **backend** of the MERN project, built using **Node.js + Express** with **MongoDB** as the database.

---

## 🚀 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB / Mongoose**
- **dotenv** (for environment variables)
- **cors** (for cross-origin requests)

---

## 📂 Project Structure
1) Directory Structure
Organize the project as follows for clarity and maintainability:

server.js

config/

db.js

models/

Post.js

controllers/

postController.js

routes/

postRoutes.js

middleware/

errorMiddleware.js

utils/

slugify.js

.env


backend/
│── src/
│ ├── config/ # Database connection
│ ├── controllers/ # Business logic
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── middleware/ # Middleware
│ └── server.js # Entry point
│── .env # Environment variables
│── package.json


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/SujitVishwakarma/portfolio-challenge/tree/main/backend
cd your-repo/backend
