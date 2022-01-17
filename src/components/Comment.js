import {useEffect, useState} from "react";

import './Comment.css';

function Comment(props){

    let{name,email, body}=props;

    return(
        <div className={'comment'}>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <p>{body}</p>
        </div>
    )
}

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
                name = {item.title}
                email = {item.email}
                body = {item.body}
            />)
    )
}

export default Comments;