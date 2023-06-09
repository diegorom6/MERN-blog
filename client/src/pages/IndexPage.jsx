import { useEffect, useState } from "react";
import Post from "../components/Post";
import Hero from "../components/Hero";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/post").then((res) => {
            res.json().then((posts) => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <>
            <Hero />

            {posts.length > 0 ? (
                posts.map((post) => <Post {...post} key={post._id} />)
            ) : (
                <p className="no-posts">No hay posts creados. ¿Qué tal si te registras y creas algunos? 😶‍🌫️</p>
            )}
        </>
    );
}
