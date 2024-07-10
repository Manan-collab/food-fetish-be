import { connect, ConnectOptions } from "mongoose";

export const connectToMongo = async (): Promise<string> => {
  try {
    await connect(process.env.MONGO_CONNECTION_STRING as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("Connected to MongoDB");
    return "Connected to MongoDB";
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
