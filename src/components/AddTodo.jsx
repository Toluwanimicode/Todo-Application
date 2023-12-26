import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import "./Todo.css";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

    // handle add new todo
    const handleAddTodo = () => { 
        if (todoText) {
            dispatch(addTodo({
                id: Date.now(),
                text: todoText,
                completed: false,
            }))
            setTodoText('')
        }
    };
    
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button id="addBtn" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;