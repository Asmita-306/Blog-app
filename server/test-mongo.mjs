import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

try {
    console.log("Connecting to MongoDB Atlas...");

    await client.connect();

    await client.db("blogdb").command({ ping: 1 });

    console.log("MongoDB Atlas connection successful!");

} catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);
} finally {
    await client.close();
}