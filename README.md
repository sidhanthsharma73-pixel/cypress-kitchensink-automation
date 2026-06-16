# Cypress Kitchen Sink Automation Framework

## Project Overview

This project demonstrates a Cypress Automation Framework built using industry-standard automation practices.

The framework includes:

* Page Object Model (POM)
* Fixtures
* Custom Commands
* Hooks (beforeEach)
* UI Automation
* API Automation
* Git Version Control

---

## Project Structure

```text
cypress
│
├── e2e
│   ├── ui
│   │   └── commands.cy.js
│   │
│   └── api
│       └── posts.cy.js
│
├── fixtures
│   └── users.json
│
├── pages
│   └── HomePage.js
│
└── support
    └── commands.js
```

---

## Features Implemented

### UI Automation

* Navigate to Commands Page
* URL Validation
* Element Validation
* Page Object Model Implementation

### API Automation

* GET Request Validation
* POST Request Validation
* PUT Request Validation
* DELETE Request Validation

### Framework Features

* Fixtures for Test Data Management
* Custom Commands for Reusable Actions
* Hooks using beforeEach()
* Reusable Page Objects

---

## Technologies Used

* Cypress
* JavaScript
* Node.js
* Git
* GitHub

---

## Running The Project

### Install Dependencies

```bash
npm install
```

### Open Cypress

```bash
npx cypress open
```

### Run Tests Headlessly

```bash
npx cypress run
```

---

## Author

Sidhanth Sharma

QA Automation Engineer | Cypress | API Testing | Git
