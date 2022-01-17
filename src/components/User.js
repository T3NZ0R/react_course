import {useEffect, useState} from "react";


import './User.css';

function User (props){
    let { id, name, username, email} = props;
    return(
        <div className={'user'}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{username}</h3>
            <h3>{email}</h3>
        </div>
    );
}

function Users (){
    let [userList, setUserList] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUserList(users);
            })


    }, []);

    return(
        userList.map(item => <User
                key = {item.id}
                id = {item.id}
                name = {item.name}
                username = {item.username}
                email = {item.email} />)
    );

}

export default Users;