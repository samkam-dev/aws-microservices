# 🚀 AWS Microservices Architecture on Amazon ECS Fargate

![AWS](https://img.shields.io/badge/AWS-ECS%20Fargate-orange)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![GitHub](https://img.shields.io/badge/Git-Version%20Control-black)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

A production-style **Microservices Architecture** built using **Node.js**, **Docker**, **Amazon ECS Fargate**, **Amazon ECR**, and **Application Load Balancer (ALB)**.

---

# 📌 Project Overview

This project demonstrates how to build, containerize, and deploy multiple Node.js microservices on AWS.

The application consists of three independent services:

- 👤 User Service
- 📦 Product Service
- 🛒 Order Service

Each service is containerized using Docker and deployed independently on Amazon ECS Fargate.

---

# 🏗 Architecture

```text
                         Internet
                             │
                             ▼
              Application Load Balancer
                  (Path-Based Routing)
        ┌──────────────┼──────────────┐
        │              │              │
     /users        /products      /orders
        │              │              │
        ▼              ▼              ▼
  User Service   Product Service   Order Service
    ECS Fargate    ECS Fargate      ECS Fargate
        │              │              │
        └──────────────┼──────────────┘
                       ▼
               Amazon CloudWatch
```

---

# 🛠 Tech Stack

- Node.js
- Express.js
- Docker
- Amazon ECS Fargate
- Amazon ECR
- Application Load Balancer (ALB)
- Amazon CloudWatch
- AWS IAM
- Amazon VPC
- Git & GitHub

---

# 📁 Project Structure

```text
aws-microservices/

├── user-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── product-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── order-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

---

# ✨ Features

- Dockerized Node.js Microservices
- Amazon ECS Fargate Deployment
- Application Load Balancer
- Path-Based Routing
- Amazon ECR Image Registry
- CloudWatch Logging
- Independent Microservices
- Production-style AWS Infrastructure

---

# 🔄 Deployment Workflow

```text
Source Code
     │
     ▼
 GitHub Repository
     │
     ▼
 Docker Build
     │
     ▼
 Amazon ECR
     │
     ▼
 Amazon ECS Fargate
     │
     ▼
 Application Load Balancer
```

---

# ▶ Run Locally

Clone the repository

```bash
git clone https://github.com/samkam-dev/aws-microservices.git
cd aws-microservices
```

### User Service

```bash
cd user-service
npm install
npm start
```

### Product Service

```bash
cd product-service
npm install
npm start
```

### Order Service

```bash
cd order-service
npm install
npm start
```

---

# 🐳 Docker

Build Docker Images

```bash
docker build -t user-service ./user-service
docker build -t product-service ./product-service
docker build -t order-service ./order-service
```

Run Containers

```bash
docker run -p 3001:3000 user-service
docker run -p 3002:3000 product-service
docker run -p 3003:3000 order-service
```

---

# ☁ AWS Deployment

This application was deployed using:

- Amazon ECS Fargate
- Amazon ECR
- Application Load Balancer
- CloudWatch Logs
- IAM Roles
- Amazon VPC
- Security Groups

> **Note:** The AWS infrastructure may be offline to avoid cloud charges. The complete source code and deployment configuration remain available in this repository.

---

# 💡 Skills Demonstrated

- Microservices Architecture
- Docker Containerization
- Amazon ECS Fargate
- Amazon ECR
- AWS Networking
- Application Load Balancer
- Cloud Deployment
- REST API Development
- Git & GitHub

---

# 🚀 Future Improvements

- PostgreSQL (Amazon RDS)
- DynamoDB
- Auto Scaling
- HTTPS using ACM
- Route 53 Custom Domain
- GitHub Actions CI/CD
- AWS CodePipeline
- AWS CodeBuild
- Monitoring Dashboard

---

# 👨‍💻 Author

**SAMIKSHA KAMBLE**

GitHub: https://github.com/samkam-dev

---

⭐ If you found this project useful, consider giving it a star.