# About The Project

This repository is the backend that will serve APIs to the Client quote generator app which is a utility app for my S.O (She's a financial advisor) for generating quotation for a client instead of designing/creating it over sketch, adobe, or figma.

### Built With

- TypeScript
- Node.js
- Express.js

## Getting Started

### Prerequisites

- Node.js v16.14.0 or greater
- Yarn
- pino-pretty NPM package

### Dev Environment Setup

1. Clone the repo

```
https://github.com/jonathanfrancisco/client-quote-generator-core
```

2. Once cloned. Add new `.env` file on the project and paste and configure the following environment variable(s)

```
PORT=3000
```

3. Install NPM packages. Since we're using yarn for this project run:

```
yarn install
```

4. Install pino-pretty globally. This is used for colorizing/prettifying pino logs during development. You can also opt in installating this but make sure to remove `| pino-pretty` on `yarn start:dev` script on `package.json` before starting the dev server

```
npm install pino-pretty -g
```

4. Start the dev server

```
yarn start:dev
```
