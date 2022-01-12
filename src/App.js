import './App.css';
import {useEffect, useState} from "react";
import User from "./components/User";
import Post from "./components/Post";
import Comment from "./components/Comment";

export default function App() {

  let [userList, setUserList] = useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          setUserList(users);
        })


  }, []);

  let [postList, setPostList] = useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          setPostList(posts);
        })


  }, []);

  let [commentList, setCommentList] = useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
          setCommentList(comments);
        })


  }, []);

  return (
      <div className={'wrap'}>

        <div className={'topInfo'}>
          <div className={'users'}>
            {userList.map(item => <User
                key = {item.id}
                id = {item.id}
                name = {item.name}
                username = {item.username}
                email = {item.email} />)}
          </div>
          <div className={'posts'}>
            {postList.map(item => <Post
                key = {item.id}
                title = {item.title}
                body = {item.body}
            />)}
          </div>
        </div>

        <div className={'comments'}>
          {commentList.map(item => <Comment
              key = {item.id}
              name = {item.title}
              email = {item.email}
              body = {item.body}
          />)}
        </div>
      </div>
  );
}