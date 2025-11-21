# Candy & Taxes

**A game about personal income, the economy, government, and social policy.**

[![GitHub license](https://img.shields.io/github/license/GregMBS/CandyAndTaxes)](LICENSE.md)
[![Project Status](https://img.shields.io/badge/Status-Live%20Demo%20Available-brightgreen)](https://candy.gmbs-consulting.com)

## 🎯 Project Goal

The **Candy & Taxes** game is an educational tool designed to facilitate discussion and understanding of complex topics related to **personal income, economic policy, government, and social justice** in an engaging, interactive way.

It uses a tangible resource—pieces of candy—to model different taxation schemes. By participating, players can directly experience how varying fiscal policies affect individuals across different economic brackets. The game is particularly useful as a discussion guide in social work, economics, public policy, and similar academic disciplines.

## ✨ Features

*   **Interactive Simulation:** Players are randomly assigned to an income quintile (economic bracket) and apply different tax models.
*   **Direct Experience:** Demonstrates the real-world impact of **regressive, proportional, and progressive** taxation on different income levels.
*   **Replayability:** Players can easily take on different roles to experience various economic realities.
*   **Web-Based:** Fully accessible via a browser.

## 🚀 Live Demo

A working copy of the game is available for immediate use at:

➡️ **[https://candy.gmbs-consulting.com](https://candy.gmbs-consulting.com)**

## 💻 Technical Implementation

The application is a web-based client-side game built using standard web technologies:

*   **HTML/CSS**
*   **BootstrapJS** for responsive design and UI components.
*   **VueJS** for the interactive front-end logic and data management.

## ⚙️ Local Development

If you wish to clone and run the project locally for development or customization, follow these steps:

### Prerequisites

You will need a web server environment or a local server utility to serve the files, as the application involves multiple HTML and JavaScript files.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GregMBS/CandyAndTaxes.git
    cd CandyAndTaxes
    ```

2.  **Install Dependencies:**
    The project uses `yarn.lock` and `package.json`, suggesting a Node.js/npm or Yarn workflow.
    ```bash
    # If using npm
    npm install
    # OR if using yarn
    yarn install
    ```

3.  **Run Locally:**
    Since this is a client-side application, you can typically open `index.html` directly in your browser. However, for a more reliable experience, it's recommended to use a simple local server (e.g., [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or Python's `http.server`).
    ```bash
    # Example using Python (if installed)
    python3 -m http.server
    ```
    Then, navigate to `http://localhost:8000` (or the address indicated by your server).

## 🤝 Contact and Support

This project is a collaboration between academics and technical professionals.

| Area | Contact Person | Email Address |
| :--- | :--- | :--- |
| **Game Content & Teaching Guide** | **Dr. Elena Delavega** | `mdlavega@memphis.edu` |
| **Technical Implementation** | **Dr. Gregory M. Blumenthal** | `greg@gmbs-consulting.com` |

## 📜 License

This project is open-source and available under the **BSD-3-Clause License**. See the [LICENSE.md](LICENSE.md) file for full details.
