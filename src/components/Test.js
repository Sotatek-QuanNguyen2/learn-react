import { useState, useEffect } from "react";

export default function Test() {
    const [data, setData] = useState(null);
    // const [a, setA] = useState(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setA((a) => a + 1);
    //         console.log('log a', a)
    //     }, 3000);
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    console.log('data', data)

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
};
