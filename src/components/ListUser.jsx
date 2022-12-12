import React from "react";
import User from "./User";
import { useSelector } from "react-redux/es/exports"

const ListUsers=()=>{
     
    const users = useSelector(state => state.users);

    return (
        <div className="list">
            {users.map(item => <User key={item.id} user={item}/>)}
        </div>
    );
}

export default ListUsers;