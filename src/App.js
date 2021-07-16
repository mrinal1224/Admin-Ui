import React , {useState , useEffect} from "react"
import axios from 'axios'
import './App.css';


function App() {
  const[list , setList] = useState([])

  const api = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"

  useEffect(()=>{
      axios.get(api).then(res=>{setList(res.data)}).catch((err) => {console.log(err)})
  },[])




  return (

    <>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
   list.map(person =>(
      <tr key={person.id}>
      <th scope="row">{person.id}</th>
      <td>{person.name}</td>
      <td>{person.email}</td>
      <td>{person.role}</td>
      <td><button className="fas fa-user-edit"></button>
          <button className="fas fa-trash-alt"></button>
      </td>
    </tr>
   ))
}
  </tbody>
</table>
</>
  );
}

export default App;
