const REQUIRED_ENV_VARIABLES = [
  'ENVIRONMENT',
  'DB_HOST',
  'DB_PORT',
  'DB_NAME',
  'DB_USERNAME',
  'DB_PASSWORD',
];

for (let i = 0; i < REQUIRED_ENV_VARIABLES.length; i += 1) {
  if (!process.env[REQUIRED_ENV_VARIABLES[i]]) {
    throw new Error(
      `${REQUIRED_ENV_VARIABLES[i]} environment variable is required.`,
    );
  }
}

export default {
  port: 3000,
  environment: process.env.ENVIRONMENT,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};
