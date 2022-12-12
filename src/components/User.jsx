import DetailsUser from "./DetailUser";
import ListTodo from "./ListTodo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";

export default function User(){

    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        const getData = async () => {
            const users = await axios.get(
              "https://dummyjson.com/users"
            );
            return users.data;
          };
          getData().then((users) => setUsers(users));
      }, []);

      return(
        <div className="container">
            <div className="img">
                <img src={users[0].image} alt="" />
            </div>
            <div className="nom">
                <h4>{users[0].filter(item => item.firstName)} {users[0].filter(item => item.lastName)}</h4>
            </div>
            <div className="btn">
                <button onClick={() =>  dispatch({DetailsUser})}>Detail User</button>
                <button onClick={() =>  dispatch({ListTodo})}>Liste des taches</button>
            </div>
        </div>
      );

}
