@"
# AWS Microservices Project

Production-ready Microservices Architecture deployed on AWS using ECS Fargate.

## Architecture

- **User Service** → /users
- **Product Service** → /products
- **Order Service** → /orders

## AWS Services Used

- Amazon ECR (Docker Images)
- ECS Fargate (Serverless Containers)
- Application Load Balancer (Path-based Routing)
- Target Groups + Health Checks
- VPC + Security Groups
- CloudWatch Logs

## Live Endpoints

- Users: http://microservices-alb-757366496.ap-south-1.elb.amazonaws.com/users
- Products: http://microservices-alb-757366496.ap-south-1.elb.amazonaws.com/products
- Orders: http://microservices-alb-757366496.ap-south-1.elb.amazonaws.com/orders

## Project Structure

``\`
aws-microservices/
├── user-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── product-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
└── order-service/
    ├── Dockerfile
    ├── package.json
    └── server.js
``\`

## How to Run Locally

\`\`\`bash
# Build
docker build -t user-service:v1 ./user-service
docker build -t product-service:v1 ./product-service
docker build -t order-service:v1 ./order-service

# Run
docker run -d -p 3001:3000 --name user-service user-service:v1
docker run -d -p 3002:3000 --name product-service product-service:v1
docker run -d -p 3003:3000 --name order-service order-service:v1
\`\`\`

## Author
Samiksha
"@ | Out-File -FilePath README.md -Encoding utf8