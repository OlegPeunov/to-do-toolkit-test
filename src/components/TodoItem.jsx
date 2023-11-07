import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({id, text, completed}) => {
  const dipatch = useDispatch();

  return (
    <li key = {id}>
      <input type = 'checkbox' 
        checked={completed} 
        onChange={() => dipatch(toggleTodoComplete({id}))}>
      </input>
      <span>{text}</span>
      <span className='delete' onClick={() => dipatch(removeTodo({id}))}>&times;</span>
    </li>
  )
}

export default TodoItem
