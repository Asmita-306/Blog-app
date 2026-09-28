import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

let db;

export async function connectToDatabase() {
    try {
        await client.connect();

        db = client.db("blogdb");

        console.log("Connected to MongoDB Atlas");

        return db;
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
}

export function getDatabase() {
    if (!db) {
        throw new Error("Database is not connected");
    }

    return db;
}