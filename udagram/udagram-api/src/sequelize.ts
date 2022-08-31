import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";


export const sequelize = new Sequelize(
  `postgres://${config.username}:${config.rds_password}@${config.rds_password}:5432/postgres`
);


// export const sequelize = new Sequelize(
//   `postgres://postgres:password@database-udagram.cgtnrc6jnrh7.us-east-1.rds.amazonaws.com:5432/postgres`
// )

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port :config.port,

//   dialect: "postgres",
//   storage: ":memory:",
// });
