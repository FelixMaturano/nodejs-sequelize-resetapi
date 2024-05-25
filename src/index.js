// src/index.js
import express from "express";
import morgan from "morgan";
import { sequelize } from "./database/database.js";
import medicRoutes from "./routes/medic.routes.js";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/medics", medicRoutes);

// Test the database connection
async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
