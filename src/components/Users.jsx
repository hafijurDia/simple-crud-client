import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"

const Users = () => {
const loadedUsers = useLoaderData();
const [users, setUsers] = useState(loadedUsers);


const deleteHandle = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.deletedCount>0) {
            alert('User deleted successfully!');
            const remaining = users.filter(user => user._id !== _id);
            setUsers(remaining);
        }
        else{
            alert('User not deleted!')
        }
    })
}

  return (
    <>
    <h2>Users {users.length}</h2>
    <Link to='/'>Home</Link>
    <br></br>
    <div>
        {
            users.map(user => <p 
                key={user._id}
                >{user.name} : {user.email} 
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
                <button onClick={()=>deleteHandle(user._id)}>x</button></p>)
        }
    </div>
    </>
  )
}



export default Users