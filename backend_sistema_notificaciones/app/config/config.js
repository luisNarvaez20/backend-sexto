require('dotenv').config(); 

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    operatorAliases: process.env.DB_OPERATOR_ALIASES === "true",
    messageLogicAppUrl: process.env.MESSAGE_LOGIC_APP_URL 
  },
};
