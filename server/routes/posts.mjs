import express from "express";
import { ObjectId } from "mongodb";
import { getDatabase } from "../db/conn.mjs";

const router = express.Router();


// GET ALL POSTS
router.get("/", async (req, res) => {
    try {
        const db = getDatabase();

        const posts = await db
            .collection("posts")
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        res.status(200).json(posts);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch posts"
        });
    }
});


// GET ONE POST
router.get("/:id", async (req, res) => {
    try {
        const db = getDatabase();

        const post = await db
            .collection("posts")
            .findOne({
                _id: new ObjectId(req.params.id)
            });

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json(post);

    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: "Invalid post ID"
        });
    }
});


// CREATE POST
router.post("/", async (req, res) => {
    try {
        const db = getDatabase();

        const { title, content, author } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({
                message: "Title, content and author are required"
            });
        }

        const newPost = {
            title: title,
            content: content,
            author: author,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await db
            .collection("posts")
            .insertOne(newPost);

        res.status(201).json({
            message: "Post created successfully",
            postId: result.insertedId
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to create post"
        });
    }
});


// UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const db = getDatabase();

        const { title, content, author } = req.body;

        const result = await db
            .collection("posts")
            .updateOne(
                {
                    _id: new ObjectId(req.params.id)
                },
                {
                    $set: {
                        title: title,
                        content: content,
                        author: author,
                        updatedAt: new Date()
                    }
                }
            );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post updated successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: "Invalid post ID"
        });
    }
});


// DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const db = getDatabase();

        const result = await db
            .collection("posts")
            .deleteOne({
                _id: new ObjectId(req.params.id)
            });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: "Invalid post ID"
        });
    }
});


export default router;