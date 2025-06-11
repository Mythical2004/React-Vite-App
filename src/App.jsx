import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const savetoLS = (updatedTodos) => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (JSON.stringify(storedTodos) !== JSON.stringify(updatedTodos)) {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  const handleEdit = (e, id) => {
    let t = todos.find(item => item.id === id);
    if (!t) return;

    setTodo(t.todo);

    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    savetoLS(newTodos)
  };

  const showFinishedTodos = () => {
    setShowFinished(!showFinished)
  }

  const handleDelete = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    savetoLS(newTodos)
  }

  const handleAdd = () => {
    if (todo === "") return;
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
    setTodos(newTodos)
    setTodo("")
    savetoLS(newTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    console.log(newTodos);
    setTodos(newTodos)
    savetoLS(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="bg-violet-200 my-5 rounded-xl p-3 container mx-auto min-h-[70vh] static md:w-3/4 text-[10px] md:text-base">
        <div className="addTodo gap-5 my-5 relative">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='p-[1px] w-1/2 bg-white rounded-xl px-2' />
          <button onClick={handleAdd} disabled={todo.length < 1} className='bg-violet-800 hover:bg-violet-950 disabled:bg-gray-600 px-3 py-1 rounded-lg mx-2 text-white text-sm font-bold'>Save</button>
        </div>
        <input onChange={showFinishedTodos} type="checkbox" checked={showFinished} /> Show Finished
        <h2 className='font-bold text-lg'>Your Todos</h2>
        <div className="todos static">
          {todos.length === 0 && <div>No Todos To Display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-5 w-full relative">
              <div className="flex gap-5 w-3/4 break-words">
                <input name={item.id} onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through overflow-x-auto break-words w-full whitespace-nowrap max-w-[50%]" : "break-words w-full overflow-x-auto whitespace-nowrap max-w-[50%]"}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex">
                <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 px-3 py-1 rounded-lg mx-2 text-white text-sm font-bold'><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 px-3 py-1 rounded-lg mx-2 text-white text-sm font-bold'><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>

  )
}
export default App  
