// src/models/Medic.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Medic = sequelize.define("medics", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  speciality: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  services: {
    type: DataTypes.STRING,
  },
  certifications: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: "activo",
  },
}, {
  timestamps: false,
});
