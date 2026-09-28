import { useEffect, useState } from "react";
import PostSummary from "../components/PostSummary";

function Home() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = "http://localhost:5001/api/posts";

    useEffect(() => {

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });

    }, []);

    const deletePost = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this post?"
        );

        if (!confirmDelete) return;

        try {

            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                setPosts(
                    posts.filter(post => post._id !== id)
                );
            }

        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <h2>Loading posts...</h2>;
    }

    return (
        <>

            <section className="hero">

                <h1>Welcome to MyBlog 👋</h1>

                <p>
                    Write, manage and share your thoughts
                    with the world.
                </p>

                <a
                    href="/create"
                    className="secondary-btn"
                >
                    + Create New Post
                </a>

            </section>


            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px"
            }}>

                <h2>Latest Posts</h2>

                <a
                    href="/archive"
                    className="read-btn"
                >
                    View Archive
                </a>

            </div>


            {posts.length === 0 ? (

                <div className="post-card">
                    <h2>No posts yet</h2>

                    <p>
                        Start writing your first blog post!
                    </p>

                    <a
                        href="/create"
                        className="primary-btn"
                    >
                        Create Post
                    </a>
                </div>

            ) : (

                <div className="posts-grid">

                    {posts.map(post => (

                        <PostSummary
                            key={post._id}
                            post={post}
                            onDelete={deletePost}
                        />

                    ))}

                </div>

            )}

        </>
    );
}

export default Home;