import { useId, useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const[conts,setcount]=useState(1)

  const addTodo = (e) => {
    const newTodo = {
      count: conts,  // Use the length of todo array to determine the new count
      do: e.target.previousSibling.value // Access the input value
     
    };
    setTodo(prevTodo => [...prevTodo, newTodo]); // Add the new todo to the existing todo array
    e.target.previousSibling.value=""
   setcount(conts+1)
  };
  const deletetodo = (indexToDelete) => {
   let updatedtodo=[...todo]
    updatedtodo.splice(indexToDelete,1);
    setTodo(updatedtodo)
  };
  
  return (
    <>
      <input type="text" />
      <button onClick={addTodo}>ADD</button>

      <table>
        <tbody>
          {todo.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.do}</td>
              <button onClick={()=>deletetodo(index)}>delete</button>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
