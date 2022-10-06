import dotenv from 'dotenv';

dotenv.config({});

export default {
  server: {
    port: process.env.PORT || 4400,
  },
  database: {
    url: process.env.DB_URL,
    name: process.env.DB_NAME,
  },
  token: {
    secret: process.env.JWT_SECRET,
  },
};
