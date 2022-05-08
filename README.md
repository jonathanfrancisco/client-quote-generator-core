# About The Project

This repository is the backend that will serve APIs to the Client quote generator app which is a utility app for my S.O (She's a financial advisor) for generating quotation for a client instead of designing/creating it over sketch, adobe, or figma.

### Built With

- TypeScript
- Node.js
- Express.js
- PostgreSQL
- Docker

## Getting Started

### Prerequisites

- Node.js v16.14.0 or greater
- Yarn
- Docker. You may download here [Docker Desktop - Docker](https://www.docker.com/products/docker-desktop/)

### Dev Environment Setup

1. Clone the repo

```
https://github.com/jonathanfrancisco/client-quote-generator-core
```

2. Build a Docker image of the node app by going to the repository via terminal then run

```
yarn build:dev
```

3. Start the dev server
   Note: If you have existing PostgreSQL server running on your local machine stop it before running the dev server to avoid conflicts with the PostgreSQL of this project

```
yarn start:dev
```

4. To stop the server just press `CTRL+C` on the terminal
5. To remove the exited/stopped running containers run (Optional)

```
yarn down:dev
```

### Connecting to Database

You may connect to the database using the SQL client of your choice using these ff values that are found in `local.env`

```
DB_HOST=client-quote-generator-core-db-server
DB_PORT=5432
DB_NAME=client-quote-generator-core-db
DB_USERNAME=admin
DB_PASSWORD=password
```

For the DB_HOST use `localhost` or `127.0.0.1` when connecting using your SQL client of your choice e.g TablePlus. `client-quote-generator-core-db-server` is only used internally on docker/docker-compose so don't use it

### Running knex migrations

When running knex migrations, you must execute it inside the node app docker container currently running. For convenience you may use the the ff script:

```
yarn kmigrate `your knex migration command here`
```

Example:

```
yarn kmigrate knex migrate:latest
```

### Todo

- [ ] Create Build & Deployment Process for test environment
- [ ] Create Build & Deployment Process for production environment

Note: Docker Compose will not be used for test & production environment,only Docker for containerization.
