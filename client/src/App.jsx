import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);


  useEffect(() => {
    async function fetchTodos() {
      try {
        // Make a fetch GET request to your API endpoint
        const response = await fetch("http://localhost:5173/api/todos");
        

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Handle the data by updating the state
        console.log(data)
        setTodos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchTodos();
  }, []);   

  return (
    <div>
    <h1 className="text-green-500 font-semibold text-2xl mt-4 mb-3">JA Samuel's toDo List</h1>  
      <input type="text" /><button type="button">Remove</button>
      <ul>     
        {todos.map((todo)=>(
          <li key={todo.id} ><input type="checkbox"/> {todo.task} <button type="button">Remove</button> </li>
        )) }
      </ul>
    </div>
  )
}

export default App