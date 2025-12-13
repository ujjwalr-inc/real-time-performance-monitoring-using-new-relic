# 📈 **Real Time Performance Monitoring using New Relic APM**

## 📌 Overview

This is a full-stack **Node.js, Express and MongoDB** application integrated with **New Relic APM** for performance monitoring.
It uses **EJS templates**, session-based authentication (Passport.js), and server-side form validation (Joi).

The project includes:

* Dynamic listing pages (create, edit, view)
* User authentication
* Flash messages
* MongoDB models for Listings & Reviews
* New Relic performance monitoring
* Centralized error handling utilities

---

## 🚀 Features

### 🔐 **Authentication**

* User signup & login using Passport Local Strategy
* Password hashing via `passport-local-mongoose`
* Session management using `express-session`

### 📄 **Listings Module**

* Create new listings
* Edit listings
* View all listings
* Detailed listing pages
* EJS templated UI

### 📝 **Reviews Module**

* Add reviews for listings
* Edit/delete reviews
* Server-side validation with **Joi**

### 📊 **New Relic Monitoring**

* Integrated via `newrelic.js`
* Tracks performance, routing, DB speed, throughput & errors

---

## 🗂 Project Structure

```
project/
│── app.js                # Main Express app
│── newrelic.js           # New Relic APM config
│── .env                  # Environment variables
│── package.json
│── schema.js             # Joi validation schemas
│
├── models/               # Mongoose Models
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/               # Express Routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/                # EJS views
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── error.ejs
│
├── public/               # Static assets (CSS, JS)
│
└── utils/                # Utilities
    ├── ExpressError.js
    └── wrapAsync.js
```

---

## 🛠️ Tech Stack

| Category        | Technologies                          |
| --------------- | ------------------------------------- |
| Runtime         | Node.js                               |
| Framework       | Express.js                            |
| Database        | MongoDB + Mongoose                    |
| Template Engine | EJS, EJS-Mate                         |
| Auth            | Passport.js + passport-local-mongoose |
| Validation      | Joi                                   |
| Monitoring      | New Relic                             |
| Environment     | dotenv                                |
| Utilities       | method-override, connect-flash        |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ujjwalr-inc/real-time-performance-monitoring-using-new-relic.git
cd real-time-performance-monitoring-using-new-relic
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the server

```bash
node -r newrelic app.js
```

Server runs at:

```
http://localhost:3000
```

---

## 📈 Using New Relic

To enable New Relic monitoring:

1. Get and Add your license key and app name to `.env`
2. Ensure `newrelic.js` is correctly configured
3. Start the server normally — New Relic will auto-inject monitoring

You can see logs in:

```
newrelic_agent.log
```
---

## 🐞 Error Handling

The app uses:

* Custom `ExpressError`
* `wrapAsync` to catch async errors
* A fallback `error.ejs` template to show error messages

---

## 📄 License
This project is open-source under the **MIT License**.

---
