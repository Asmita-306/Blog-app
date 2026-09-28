import { useState } from "react";

function Create() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const createPost = async (event) => {

        event.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:5001/api/posts",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        title,
                        content,
                        author
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                alert("Post created successfully!");

                window.location.href = "/";

            } else {

                alert(data.message);
            }

        } catch (error) {

            console.error(error);

            alert("Failed to create post");
        }
    };

    return (

        <div>

            <h1>Create a New Post</h1>

            <p style={{ color: "#6b7280" }}>
                Share your thoughts with your readers.
            </p>

            <br />

            <div className="form-card">

                <form onSubmit={createPost}>

                    <div className="form-group">

                        <label>Post Title</label>

                        <input
                            type="text"
                            placeholder="Enter your post title..."
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>Author</label>

                        <input
                            type="text"
                            placeholder="Your name"
                            value={author}
                            onChange={(e) =>
                                setAuthor(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>Content</label>

                        <textarea
                            rows="12"
                            placeholder="Write your blog post..."
                            value={content}
                            onChange={(e) =>
                                setContent(e.target.value)
                            }
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="primary-btn"
                    >
                        Publish Post 
                    </button>

                </form>

            </div>

        </div>

    );
}

export default Create;