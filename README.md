# 🚀 NodeJS Onboarding

A RESTful API built with Node.js and Express for onboarding purposes. It includes a basic server setup, sample endpoints, JWT-based authentication, and tests written with Jest.

## 📁 Project Structure

```
├── /controllers      # Request handlers for different routes  
├── /errors           # Custom error handler  
├── /middleware       # Custom middleware (authentication)  
├── /public           # Static assets like HTML pages, client-side scripts, and styles  
├── /routes           # Express route definitions  
├── /tests            # Integration tests  
├── app.js            # Express app initialization  
├── server.js         # Entry point that loads environment variables and starts the server to host the Express app  
├── .env              # Environment variables (not committed)  
├── package.json      # Dependencies and scripts  
└── README.md         # Project documentation  
```

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```
git clone https://github.com/darko-dimitrievski/nodejs-onboarding.git
cd your-repo-name
```
### 2. Install Dependencies

```
npm install
```

### 3. Set Up Environment Variables

Copy the .env-example file and rename it to .env, then update the values as needed:
```
cp .env-example .env
```

### 4. Start the Application
```
npm run start
```

## 🔌 API Endpoints Overview
### 🔐 JWT Auth
```
| Method | Endpoint            | Description                     | Auth Required |
|--------|---------------------|---------------------------------|---------------|
| POST   | `/api/v1/login`     | Authenticate user and get token | ❌            |
| POST   | `/api/v1/dashboard` | Log in and show a random number | ✅            |
```
### 🔧 Utility
```
| Method | Endpoint            | Description               | Auth Required |
|--------|---------------------|---------------------------|---------------|
| POST   | `/api/v1/sort`      | Sort an array of strings  | ❌            |
| POST   | `/api/v1/date`      | Get todays date and time  | ❌            |
| POST   | `/api/v1/crypto`    | Crypto Exchange Rates     | ❌            |
```