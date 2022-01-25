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
            user = {item} />)
    );

}

export default Users;