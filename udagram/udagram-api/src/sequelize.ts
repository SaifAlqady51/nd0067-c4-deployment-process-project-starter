import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";


export const sequelize = new Sequelize(
  `postgres://${config.username}:password@database-udagram.cgtnrc6jnrh7.us-east-1.rds.amazonaws.com:5432/postgres`
)


// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.rds_password,
//   database: config.rds,
//   host: config.host,
//   port: config.postgres_port,

//   dialect: "postgres",
//   storage: ":memory:",
// });