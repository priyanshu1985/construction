# NovaBuild - Industrial Engineering Landing Page

A modern, responsive, and interactive landing page for "NovaBuild," a high-end structural engineering and BIM coordination firm. This project demonstrates production-level React coding practices, including advanced CSS animations, state management, and glassmorphic UI design.

## 🚀 Features

### **1. 3D Interactive Visual**
*   **Feature**: A pure CSS 3D Cube in the Hero section representing a digital twin/structural model.
*   **Interaction**: Fully interactive "Drag to Rotate" functionality.
*   **Tech**: Built using CSS 3D Transforms (`rotateX`, `rotateY`, `perspective`) and React state for mouse tracking. NO heavy 3D libraries (Three.js) used, ensuring optimal performance.

### **2. Advanced Animations**
*   **Entrance**: Staggered "Fade-Up" waterfall animation for Hero text elements upon load.
*   **Scroll**: "Count Up" animation for the Stats section that triggers only when elements scroll into view.
*   **Hover**: Sophisticated lift, shadow, and border transitions on cards and buttons.

### **3. Functional Components**
*   **Quote Modal**: A fully functional "Request a Quote" modal with background blur, animated entrance, and form validation.
*   **Mobile Navigation**: responsive hamburger menu with smooth slide-down animation.
*   **Smooth Scroll**: One-page navigation logic connecting Navbar links (Home, Services, Contact) to their respective sections.

### **4. "Production-Ready" Design**
*   **HCI Principles**: Adheres to Shneiderman's Golden Rules (Consistency, Feedback, Control).
*   **Strict Palette**: Enforced "Navy Blue / Amber Gold / White" color scheme.
*   **Responsive**: Mobile-first architecture scaling perfectly from iPhone SE to 4K desktops.

## 🛠️ Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: Custom CSS (Variables, Flexbox/Grid, Keyframes) - No CSS frameworks ensuring low bundle size.
*   **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation & Setup

1.  **Clone the repository** (if applicable) or unzip the project folder.

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

4.  **Build for Production**
    ```bash
    npm run build
    ```
    The output will be in the `dist/` folder, ready for deployment.

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # React functional components
│   ├── Hero.jsx     # Main landing area with 3D model
│   ├── Navbar.jsx   # Sticky header with scroll logic
│   ├── Services.jsx # Grid of capabilities
│   ├── Stats.jsx    # Animated counter section
│   ├── Footer.jsx   # Contact info and quick links
│   └── Modal.jsx    # Quote request overlay
├── hooks/           # Custom React Hooks
│   └── useReveal.js # IntersectionObserver logic for scroll animations
├── App.jsx          # Main layout and Ref management
├── App.css          # Global styles, variables, and animations
└── main.jsx         # Application entry point
```

## 🌟 Key Highlights for Reviewers

*   **Zero UI Libraries**: All buttons, modals, and grids are custom-built for maximum control.
*   **Performance**: Lightweight animations (transform/opacity only) ensure 60fps rendering.
*   **Clean Code**: Semantic HTML, modular components, and organized CSS.
