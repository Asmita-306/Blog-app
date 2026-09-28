import "./loadEnvironment.mjs";

import express from "express";
import cors from "cors";

import { connectToDatabase } from "./db/conn.mjs";
import postsRouter from "./routes/posts.mjs";

const app = express();

const PORT = process.env.PORT || 5001;


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/posts", postsRouter);


// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Blog API is running"
    });
});


// Connect MongoDB and start server
connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                `Server running on http://localhost:${PORT}`
            );
        });
    })
    .catch((error) => {
        console.error("Server failed to start:", error);
    });