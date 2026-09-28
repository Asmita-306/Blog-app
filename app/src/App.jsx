import Home from "./pages/Home";
import Create from "./pages/Create";
import Post from "./pages/Post";
import Archive from "./pages/Archive";
import "./index.css";

function App() {

    const path = window.location.pathname;

    return (
        <>
            <nav className="navbar">

                <div className="logo">
                    ✍️ MyBlog
                </div>

                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/archive">Archive</a>
                    <a href="/create">Create Post</a>
                </div>

            </nav>

            <main className="container">

                {path === "/create" && <Create />}

                {path === "/archive" && <Archive />}

                {path.startsWith("/post/") && <Post />}

                {path === "/" && <Home />}

            </main>

            <footer className="footer">
                © 2026 MyBlog • Built with React, Express & MongoDB
            </footer>
        </>
    );
}

export default App;