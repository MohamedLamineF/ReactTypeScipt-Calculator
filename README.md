# 🧮 React TypeScript Calculator

A simple, elegant calculator demo app showcasing modern React development practices.

## 📖 About

This is a **demo calculator application** I created when I first started learning **TypeScript**. Recently, I've modernized and refactored it to use:

- **React 19** — Latest React features and improvements
- **Tailwind CSS** — Beautiful, utility-first styling
- **Vite** — Lightning-fast development and build setup

## ✨ Features

- ✅ Basic arithmetic operations (+, −, ×, ÷)
- ✅ Percentage calculations
- ✅ Sign toggle (+/−)
- ✅ Clear (AC) and delete (C) functions
- ✅ Responsive, dark-themed UI
- ✅ Smooth, modern interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd React_simple_calculator

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build
npm run preview
```

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19.2.4+ | UI framework |
| TypeScript | 5.9+ | Type safety |
| Vite | 8.0+ | Build tool & dev server |
| Tailwind CSS | 4.0+ | Styling |

## 📁 Project Structure

```
src/
├── App.tsx                    # Main calculator component
├── GridDigitButton.tsx        # Digit button component
├── GridOperationButton.tsx   # Operation button component
├── index.tsx                  # Entry point
├── index.css                  # Tailwind CSS imports
├── theme.tsx                  # Theme configuration (legacy)
└── setupTests.ts             # Test configuration
```

## 🎨 Design

The calculator features a **modern dark theme** with:
- Deep gray background (`bg-gray-950`)
- Sleek calculator card (`bg-gray-800`)
- Gray digit buttons with hover effects
- Violet-tinted operation buttons
- Responsive grid layout

Perfect for learning or as a foundation for more complex projects!
