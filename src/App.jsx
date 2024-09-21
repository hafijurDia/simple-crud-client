
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        alert('User added successfully');
        form.reset();
      }
    })

  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <Link to='/users'>ALl users</Link>
      <br></br>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id='' placeholder='name'/>
        <br />
        <input type="email" name='email' id='' placeholder='email'/>
        <br />
        <input type="submit" value='Submit' />
      </form>
    </>
  )
}

export default App
