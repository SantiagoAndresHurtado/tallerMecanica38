import React, {useState} from 'react'
 
const Users = () => {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    id: "",
    role: ""
  })

  const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
  }

  const handleSubmit = (event) => {
        alert('A form was submitted');
        event.preventDefault();
     
        fetch('http://localhost:9000/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(state)
        }).then(function(response) {
          return response.json();
        });
      }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={state.name} onChange={handleChange}/>
      </label> <br />
      <label>
        Apellido:
        <input type="text" name="lastname" value={state.lastname} onChange={handleChange}/>
      </label> <br />
      <label>
        ID:
        <input type="text" name="id" value={state.id} onChange={handleChange} />
      </label> <br />
      <label>
        Rol:
        <select name="role" value={state.role} onChange={handleChange}>
            <option value="Recepcionista">Recepcionista</option>
            <option value="Mecánico">Mecánico</option>
            <option value="Administrador">Administrador</option>
        </select>
      </label> <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
 
export default Users;