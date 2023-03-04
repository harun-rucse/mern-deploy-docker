# Deployment of MERN project using Docker

## Project directory

```
mern-deployment
    - admin
        - Dockerfile.dev
        - .dockerignore
    - backend
        - Dockerfile.dev
        - .dockerignore
    - frontend
    - Dockerfile.dev
    - .dockerignore
    - docker-compose.dev.yml
```

## RUN

```
docker-compose -f docker-compose.dev.yml up -d --build
```
