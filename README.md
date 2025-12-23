# 📌 Project Overview

The Notice Management is a part of full-stack web application designed to create, publish and manage notices efficiently.
Add notices through a validated form, publish or unpublish them and view all notices in a paginated table.

The system follows a modern frontend + REST API backend architecture:

- Frontend built with React and Tailwind CSS
- Backend powered by Node.js, Express and MongoDB
- Clean API integration using Axios and React Query

# 🛠️ Tech Stack
## Frontend

- React
- React Router DOM
- React Hook Form – form validation
- @tanstack/react-query – server state management
- Axios – API communication
- Tailwind CSS – responsive UI styling
- Lucide React / React Icons

## Backend

- Node.js
- Express.js
- MongoDB 
- dotenv – environment variable management
- cors – cross-origin support

# ⚙️ Installation Steps

### 1️⃣ Clone the Repository
```
git clone https://github.com/anikkumarsarker3/notice-board.git
cd notice-board
```

### 2️⃣ Frontend Setup (Client)
```
cd nebs-it-client
npm install
npm run dev
```


### 3️⃣ Backend Setup (Server)
```
cd nebs-it-server
npm install
node index.js
```



### 🔐 Environment Variable Instructions
```
Create a .env.local  file inside the client directory.
VITE_img_key=your_imgbb_key

Create a .env  file inside the server directory.
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/noticeDB
```
