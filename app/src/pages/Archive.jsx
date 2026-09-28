import { useEffect, useState } from "react";

function Archive() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5001/api/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (

        <div>

            <h1>Post Archive 📚</h1>

            <p style={{ color: "#6b7280" }}>
                Browse all your published posts.
            </p>

            <br />

            {posts.length === 0 ? (

                <div className="post-card">
                    <h2>No posts found.</h2>
                </div>

            ) : (

                posts.map(post => (

                    <div
                        className="archive-item"
                        key={post._id}
                    >

                        <h2>{post.title}</h2>

                        <p className="author">
                            By {post.author}
                        </p>

                        <p>
                            {post.content.substring(0, 200)}
                            {post.content.length > 200
                                ? "..."
                                : ""}
                        </p>

                        <a
                            href={`/post/${post._id}`}
                            className="read-btn"
                        >
                            Read Post →
                        </a>

                    </div>

                ))

            )}

        </div>

    );
}

export default Archive;