import {useEffect, useState} from "react";

import Post from "./Post";

function Posts(){
    let [postList, setPostList] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPostList(posts);
            })


    }, []);

    return(
        postList.map(item => <Post
            key = {item.id}
            title = {item.title}
            body = {item.body}
        />)
    )
}

export default Posts;