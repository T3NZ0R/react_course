import {useEffect, useState} from "react";

import User from "./User";

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