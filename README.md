# Minimal CI/CD React App

A bare-bones React application configured with a complete CI/CD pipeline using GitHub Actions and Docker.

## Quick Start

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```
   App runs on `http://localhost:3000`

3. Run tests:
   ```bash
   npm test
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Docker

Build the Docker image:
```bash
docker build -t cicd-react-app .
```

Run the container:
```bash
docker run -p 80:80 cicd-react-app
```
App runs on `http://localhost`

## GitHub Actions CI/CD Pipeline

The pipeline (`.github/workflows/ci-cd.yml`) runs on:
- Push to `main` branch
- Pull requests to `main` branch

### Steps:
1. Install dependencies
2. Run tests
3. Build React app
4. Build Docker image
5. Push to Docker Hub with tags: `latest` and commit SHA

### Required Secrets

Set these in GitHub repository settings:
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password/token
- `SLACK_WEBHOOK`: (Optional) Slack webhook for notifications

## Project Structure

```
exp-9/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   └── setupTests.js
├── Dockerfile
├── package.json
└── .github/
    └── workflows/
        └── ci-cd.yml
```

## Files Overview

- **App.js**: Main component displaying "CI/CD Pipeline Working"
- **Dockerfile**: Multi-stage build (Node builder → Nginx server)
- **ci-cd.yml**: GitHub Actions workflow for automated build/test/deploy
- **package.json**: Dependencies and npm scripts

## Notes

- No TypeScript, no extra libraries, no styles frameworks
- Tests pass by default
- Docker image runs on port 80
- Workflow uses docker/build-push-action for efficient builds
