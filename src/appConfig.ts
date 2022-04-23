import 'dotenv/config';

export default {
  port: process.env.PORT,
  environment: process.env.ENVIRONMENT,
  database: {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};
