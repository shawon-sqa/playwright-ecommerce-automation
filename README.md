# Playwright E-commerce Automation Framework

A professional end-to-end test automation framework built using Playwright and JavaScript.

---

## Project Overview

This project demonstrates real-world UI and API automation testing practices using Playwright.

The framework follows industry-standard architecture with:

* Page Object Model (POM)
* Reusable methods
* Hooks
* Test data separation
* HTML reporting
* Screenshot & video capture
* API automation
* GitHub Actions CI/CD integration

---

# Tech Stack

* Playwright
* JavaScript
* Node.js
* Git & GitHub
* GitHub Actions

---

# Project Structure

```plaintext
playwright-ecommerce-automation
│
├── tests
│   ├── login.spec.js
│   └── api.spec.js
│
├── pages
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CheckoutPage.js
│
├── test-data
│   └── userData.js
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── playwright.config.js
├── package.json
├── .env
├── .gitignore
└── README.md
```


# Automated Test Scenarios

## UI Automation

* Valid Login Test
* Invalid Login Test
* Add Product To Cart
* Remove Product From Cart
* Complete Checkout Flow

## API Automation

* GET API Test
* POST API Test

---

# Features

* Cross-browser testing
* HTML reporting
* Screenshot capture on failure
* Video recording on failure
* Trace viewer support
* Environment variable support
* CI/CD pipeline with GitHub Actions

---

# Installation

## Clone Repository

```bash
git clone https://github.com/shawon-sqa/playwright-ecommerce-automation.git
```

## Open Project

```bash
cd playwright-ecommerce-automation
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Run Tests

## Run All Tests

```bash
npx playwright test
```

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## Run Specific Test File

```bash
npx playwright test tests/login.spec.js
```

---

# Generate HTML Report

```bash
npx playwright show-report
```

---

# Environment Variables

Create a `.env` file in the project root:

```plaintext
USERNAME=standard_user
PASSWORD=secret_sauce
BASE_URL=https://www.saucedemo.com
```

---

# CI/CD Integration

This framework uses GitHub Actions for Continuous Integration.

Automation tests run automatically on every push to the `main` branch.

---

# Learning Goals of This Project

* Build real-world Playwright automation framework
* Practice UI and API automation
* Learn industry-standard automation architecture
* Understand CI/CD workflow
* Improve debugging and reporting skills

---

# Author

Md Shawon Ahmed

QA Automation Engineer (Learning Journey)

GitHub:
[https://github.com/shawon-sqa](https://github.com/shawon-sqa)

---

# Future Improvements

* Advanced API testing
* Faker data generation
* Database testing
* Docker integration
* Jenkins integration
* Advanced reporting
* Parallel execution optimization

---

# Project Status

Actively learning and improving automation testing skills with Playwright.
