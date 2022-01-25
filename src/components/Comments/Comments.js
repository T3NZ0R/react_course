import {useEffect, useState} from "react";
import Comment from "./Comment";

function Comments(){

    let [commentList, setCommentList] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                setCommentList(comments);
            })


    }, []);

    return(
        commentList.map(item => <Comment
            key = {item.id}
            comment={item}
        />)
    )
}

export default Comments;