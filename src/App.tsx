import './App.css';
import { useState, useEffect } from 'react';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "Anom", age: 19, gender: "Male" },
{ name: "Megha", age: 19, gender: "Female" },
{ name: "Subham", age: 25, gender: "Male"},
]

function App() {
  const [students, setStudents] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");


  function elimina(el: String){
    setStudents(students.filter(obj=> obj.name !== el));
  }

  function aggiungi(){
    
  }

  function show_set(){
    if(showForm){
      setShowForm(false);
    }else{
      setShowForm(true);
      }
    

  }

return (
  <center>
	<div className="App">
	<table>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
		<th>Pulsante</th>
		</tr>
		{students.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
      <td><button onClick={() => elimina(val.name)}>Elimina</button></td>
			</tr>
		)
		})}
	</table>

  <div><button onClick={()=> show_set()}> Inserisci</button></div>
  {showForm &&
<form action='post'>
  <div><label>Name:</label><input type="text" id='name' required/></div>
<div><label>Age:</label><input type="number" id='age' required/></div>
<div><label>Gender:</label><select id='gender' required>
  <option value="female">Female</option>
  <option value="male">Male</option>
  </select></div>


<div><button>Salva</button></div>
</form>
  }
	</div>
  </center>
);
}

export default App;
