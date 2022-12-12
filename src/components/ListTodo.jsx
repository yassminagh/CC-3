import React from "react";
import TodoSlice from "../Redux/TodoSlice";
import { useSelector } from "react-redux/es/exports"

const ListTodos=()=>{
     
    const todos = useSelector(state => state.todos);

    return (
        <div className="list">
            {todos.map(item =>  <TodoSlice key={item.id} Todo={item} />)}
        </div>
    );
}

export default ListTodos;