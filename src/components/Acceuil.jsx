import ListUsers from "./ListUser";

export default function Acceuil() {
  return (
    <div className='header'>
        <h2>Gestion des taches</h2>
        <div>
        <ListUsers />
        </div>
    </div>
    
  )
}