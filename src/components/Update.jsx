
import { useLoaderData, useNavigate } from 'react-router-dom'

function Update() {
    const loadedUser = useLoaderData();
    const navigate = useNavigate();
    const handleUpdateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email}

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                alert('User data updated successfuly')
            }
            navigate('/users')
        })

    }
  return (
    <>
    <h2>Update information for</h2>
    <p>{loadedUser?._id}</p>
   <form onSubmit={handleUpdateUser}>
    <input type="text" name='name' defaultValue={loadedUser?.name} /> <br />
    <input type="email" name='email' defaultValue={loadedUser?.email} /> <br />
    <input type="submit" value='Update' />
   </form>
    
    </>
  )
}

Update.propTypes = {}

export default Update
