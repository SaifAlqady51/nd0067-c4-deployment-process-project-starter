import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";


export const sequelize = new Sequelize(
  `postgres://${config.username}:${config.rds_password}@${config.rds}:${config.postgres_port}/${config.username}`
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