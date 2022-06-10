import {useState} from 'react'


const CreateTodo = ({createTodo}) => {
  const [todo, setTodo] = useState("")
  let newTodo ={ completed: false,id:Math.random()*100, title:todo}
  return (
    <div className="d-flex form">
      <div className="form-group mx-sm-3 mb-2">
        <input type="text" className="form-control" id="CreateTodo" placeholder="Create To-do" 
        onChange={e => setTodo(e.target.value)}/>
      </div>
      <button onClick={()=>createTodo(newTodo)} className="btn btn-primary mb-2">Add</button>
    </div>
  )
}

export default CreateTodo