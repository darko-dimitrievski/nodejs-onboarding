# 🚀 NodeJS Onboarding

A RESTful API built with Node.js and Express for onboarding purposes. It includes a basic server setup, sample endpoints, JWT-based authentication, and tests written with Jest.

## 📁 Project Structure

```
├── /src
│   ├── /controllers      # Request handlers for different routes
│   ├── /errors           # Custom error handler
│   ├── /routes           # Express route definitions
│   ├── /middleware       # Custom middleware (authentication)
│   ├── /tests            # Integration tests
│   ├── app.js            # Express app initialization
│   └── server.js         # Entry point that loads environment variables and starts the server to host the Express app
├── /config               # Configuration files and environment setup
├── /tests                # Test cases
├── .env                  # Environment variables (not committed)
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory and include the following:

```
| Variable        | Required | Description                              | Example                                 |
|-----------------|----------|------------------------------------------|-----------------------------------------|
| `PORT`          | ✅       | Server port                              | `8141`                                  |
| `JWT_SECRET`    | ✅       | Secret key for signing JWT tokens        | `jwtSecret`                             |
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