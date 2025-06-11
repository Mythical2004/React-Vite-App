# React + Vite Todo List App

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and ESLint integration.

Official Vite React Plugins 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Usage
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install     # or yarn install
npm run dev
```
# What this project does 
This is a To-Do List application built with React and Vite. It allows users to:
- Add new Tasks
- Delete existing Tasks
- Mark Tasks as completed

The app is designed to be responsive and user-friendly, ensuring a seamless experience across both desktop and mobile devices.
1. Clone the repository:
   ```bash
   git clone <repository_url>
2. Navigate to the project directory:
   ```bash
   cd my-react-app
   ```
3. Install the dependencies:
   ```bash
   npm install  # or yarn install
   ```
4. Start the development server:
   ```bash
   npm run dev  # or yarn dev
   ```
5. Open your browser and go to `http://localhost:3000` (can be different e.g, `http://localhost:5173` etc) to see the application in action.

# Features
- **Add Tasks**: Easily add new tasks to your todo list.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark as Completed**: Mark tasks as completed to keep track of your progress.
- **Responsive Design**: Fully responsive, ensuring a great user experience on desktop and mobile devices.
- **User-Friendly Interface**: Clean and intuitive design for easy task management.

# Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides a smooth development experience.
- **TypeScript**: A typed superset of JavaScript that helps catch errors early and improves code quality.
- **ESLint**: A tool for identifying and fixing problems in JavaScript/TypeScript code.
- **Prettier**: A code formatter that ensures a consistent style across the codebase.
- **CSS Modules**: A CSS file that locally scopes class names and animations by default.
# Folder Structure
```
my-react-app/
├── public/                # Static assets (images, icons, etc.)
├── src/                   # Source code
│   ├── components/        # Reusable components (Navbar)
│   ├── App.css/           # Global styles  
│   ├── App.jsx            # Main application component
│   ├── index.css          # Entry point for the application
│   └── main.jsx           # Global CSS file
├── .eslintrc.js           # ESLint configuration
├── vite.config.ts         # Vite configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```
 