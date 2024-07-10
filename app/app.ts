import express from "express";
import { connectToMongo } from "./connection/mongo.connection";
import { registerRoutes } from "./modules/routes/route.register";

export const startServer = async () => {
  try {
    const app = express();

    await connectToMongo();
    registerRoutes(app);

    const { PORT } = process.env;
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`));
  } catch (e) {
    console.error(e);
    throw e;
  }
};
