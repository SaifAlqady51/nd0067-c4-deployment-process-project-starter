import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";


export const sequelize = new Sequelize(
  `postgres://${config.username}:${config.rds_password}@${config.rds}:${config.postgres_port}/${config.username}`
)
