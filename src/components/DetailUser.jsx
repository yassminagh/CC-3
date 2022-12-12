import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function DetailsUser(){
    const SelectedUser = useSelector(state => state.user.SelectedUser);
    const user = useSelector(state => state.user.data).filter(item => item.name.common===SelectedUser);

    return(
        <div>
            {user.length!==0 &&
                <div>
                    <img src={user[0].image} alt="" />
                    <h1>Nom : {user[0].firstName}</h1>
                    <h1>Prenom : {user[0].lastName}</h1>
                    <h1>Age : {user[0].age}</h1>
                    <h1>Gender : {user[0].gender}</h1>
                    <h1>Email : {user[0].email}</h1>
                    <h1>Phone : {user[0].phone}</h1>
                    <h1>Poids : {user[0].weight}</h1>
                    <h1>Hauteur : {user[0].height}</h1>
                    <h1>Date de naissance : {user[0].birthDate}</h1>
                    <h1>Groupe sanguin : {user[0].bloodGroup }</h1>
                    <h1>Couleur de l'œil : {user[0].eyeColor }</h1>
                </div>
            }
        </div>
    )
}