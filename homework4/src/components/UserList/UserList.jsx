import React from "react"
import { useState , useEffect } from "react"
import ApiUsers from "../../api/api"
import './UserList.css'

const UserList =  () => {
    const [users, setUsers] = useState();

    useEffect (
        () => {
            const apiUsers = new ApiUsers();

            apiUsers.getUsers()
            .then(function (response) {
                setUsers(response.data);
            });  
    }, [])


    
    return (
        <div className="userList">
            <ul>
                {users?.map((user) => {
                    return (
                        <li>
                            {user.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default UserList

console.log(window)