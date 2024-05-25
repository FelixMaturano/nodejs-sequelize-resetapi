// src/database/database.js
import Sequelize from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: 'sequelize.sqlite',
});
