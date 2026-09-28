import { useEffect, useState } from "react";

function Post() {

    const [post, setPost] = useState(null);

    const id = window.location.pathname.split("/")[2];

    useEffect(() => {

        fetch(`http://localhost:5001/api/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [id]);

    if (!post) {
        return <h2>Loading post...</h2>;
    }

    return (

        <article className="single-post">

            <h1>{post.title}</h1>

            <p className="author">
                ✍️ Written by <strong>{post.author}</strong>
            </p>

            <p className="author">
                📅 {new Date(post.createdAt).toLocaleString()}
            </p>

            <hr />

            <div className="post-content">
                {post.content}
            </div>

            <br />

            <a
                href="/"
                className="read-btn"
            >
                ← Back to Home
            </a>

        </article>

    );
}

export default Post;