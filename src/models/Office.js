// src/models/Office.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Medic } from "./Medic.js";

export const Office = sequelize.define("offices", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.STRING,
  },
  medicId: {
    type: DataTypes.INTEGER,
    references: {
      model: Medic,
      key: 'id'
    }
  }
}, {
  timestamps: false,
});

Medic.hasMany(Office, { foreignKey: 'medicId' });
Office.belongsTo(Medic, { foreignKey: 'medicId' });
