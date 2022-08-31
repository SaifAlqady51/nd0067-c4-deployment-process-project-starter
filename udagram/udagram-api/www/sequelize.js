"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize("postgres://postgres:password@database-udagram.cgtnrc6jnrh7.us-east-1.rds.amazonaws.com:5432/postgres");
// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port :config.postgres_port,
//   dialect: "postgres",
//   storage: ":memory:",
// });
//# sourceMappingURL=sequelize.js.map