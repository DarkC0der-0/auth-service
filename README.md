# Authentication and Authorization Service

This project is a comprehensive Authentication and Authorization Service built with Node.js, Express, and Passport.js. It uses PostgreSQL as the database and includes features such as JWT-based authentication, role-based access control, and OAuth2 integration. The project is designed to showcase secure authentication and authorization mechanisms and is deployed using Docker and AWS.

## Features

- **JWT-based authentication**: Secure token-based authentication.
- **Role-based access control**: Restrict access to resources based on user roles.
- **OAuth2 integration**: Support for OAuth2 login using Passport.js.
- **Dockerized deployment**: Easy deployment with Docker and Docker Compose.
- **AWS deployment**: Ready for deployment on AWS ECS or EC2.

## Technologies Used

- Node.js
- Express
- Passport.js
- PostgreSQL
- Docker
- AWS


## Installation

### Prerequisites

- Node.js
- Docker
- PostgreSQL
- AWS Account (for deployment)

### Steps

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your_username/auth-service.git
   cd auth-service
2. **Install Dependencies**:
   ```sh
   npm install
3. **Set up environment variables**:
   -Create a .env file in the root directory and add the following variables:
   ```makefile
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   OAUTH_CLIENT_ID=your_oauth_client_id
   OAUTH_CLIENT_SECRET=your_oauth_client_secret
   PORT=3000
4. **Start the application**:
   ```sh
   npm run dev
5. **Run with Docker**:
   ```sh
   docker-compose up --build
   
### Usage

### API Endpoints

- POST /auth/signup: Register a new user.
- POST /auth/login: Login with email and password.
- GET /auth/oauth/callback: OAuth2 callback for third-party login.
- GET /user/me: Get the authenticated user's information (requires JWT and role-based access).

### Example Requests

1. **Signup**:
   ```sh
   curl -X POST http://localhost:3000/auth/signup \
   -H 'Content-Type: application/json' \
   -d '{"email": "test@example.com", "password": "password", "role": "user"}'
2. **Login**:
   ```sh
   curl -X POST http://localhost:3000/auth/login \
   -H 'Content-Type: application/json' \
   -d '{"email": "test@example.com", "password": "password"}'
3. **Get User Info**:
   ```sh
   curl -X GET http://localhost:3000/user/me \
   -H 'Authorization: Bearer <your_jwt_token>'

### Deployment

### Docker

1. **Build and run the containers**:
   ```sh
   docker-compose up --build

### AWS

1. Set up an AWS ECS or EC2 instance.
2. Deploy the Docker containers to the instance.
3. Set up a PostgreSQL instance using Amazon RDS.
4. Configure environment variables in your AWS service.

### Contributing 

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Open a Pull Request.

### License 

This project is licensed under the MIT License.

