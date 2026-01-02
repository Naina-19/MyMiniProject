# 🚀 Playwright Automation Framework - OrangeHRM

# MyMiniProject: Playwright Automation & API Testing

## Overview
This project demonstrates automated testing using **Playwright**. It includes both **UI automation** using the **Page Object Model (POM)** and **API testing**. All tests have been verified and are passing.

This repository is intended as a learning and demonstration project for web automation and testing best practices.

---

## Project Structure

MyMiniProject/
├── pages/ # Page Object Model classes for UI automation
├── tests/ # Test files for UI automation and API testing
├── playwright.config.js # Playwright configuration
├── package.json # Node.js dependencies
└── README.md # Project documentation

yaml
Copy code

---

## Features

### UI Automation
- Uses **Page Object Model** to separate test logic and page structure.
- Covers **login**, **dashboard interactions**, and **dropdown selections**.
- Includes robust handling for dynamic elements and asynchronous loading.

### API Testing
- Includes API tests for relevant endpoints (example project APIs).
- Validates response status, payload, and data integrity.

---

## Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Naina-19/MyMiniProject.git
cd MyMiniProject
Install dependencies

bash
Copy code
npm install
Run tests

bash
Copy code
npx playwright test
View test report

bash
Copy code
npx playwright show-report
Notes
The project uses the demo site: OrangeHRM Live Demo

Login credentials for testing:

Username: Admin

Password: admin123

UI-Automation test file has been removed; currently, all 21 tests are passing.

Author
Naina

Project demonstrates practical Playwright skills including UI automation, API testing, and Git workflow management.

License
This project is for educational purposes.
