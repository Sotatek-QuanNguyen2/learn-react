import {useState, useEffect} from "react";
import React from 'react';

export default function Test() {
    // const [data, setData] = useState(null);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [a, setA] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setA((a) => a + 1);
            console.log('log a', a)
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    });

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
            .then((res) => res.json())
            .then((res) => setPosts(res))
            .catch((err) => setError(err));
    }, []);
    // console.log('data', data)

    return (
        <React.Fragment>
            <div>
                {!error ? (
                    posts.map((post) => (
                        <ul key={post.id}>
                            <li>{post.title}</li>
                        </ul>
                    ))
                ) : (
                    <p>{error}</p>
                )}
            </div>
            {/*<p>{a}</p>*/}
        </React.Fragment>
    );
};
