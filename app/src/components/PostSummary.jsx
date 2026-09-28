function PostSummary({ post, onDelete }) {

    return (

        <article className="post-card">

            <h2>{post.title}</h2>

            <p className="author">
                ✍️ By {post.author}
            </p>

            <p>
                {post.content.substring(0, 150)}
                {post.content.length > 150 ? "..." : ""}
            </p>

            <div className="post-actions">

                <a
                    href={`/post/${post._id}`}
                    className="read-btn"
                >
                    Read More
                </a>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(post._id)}
                >
                    Delete
                </button>

            </div>

        </article>

    );
}

export default PostSummary;