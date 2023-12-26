import { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleComplete } from "../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  // handle todo completed
  const handleTodoCompleted = (todoId) => {
    dispatch(toggleComplete(todoId));
    // get todo and add completed class
    const todo = document.getElementById(todoId);
    todo.classList.toggle("completed");
  };

  // handle todo edit
  const handleTodoEdit = (todoId) => {
    setIsEditable(true);
    // get todo element
    const todo = document.getElementById(todoId);
    //   make todo editable
    todo.contentEditable = true;
    todo.focus();
    //   add edit class
    dispatch(
      editTodo({
        id: todoId,
        text: todo.innerText,
        
      })
    );
  };

  // handle todo delete
  const handleTodoDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div>
      {todos.length === 0 ? (
        <h5>No todos. Add new</h5>
      ) : (
        todos.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              todoText={todo.text}
              todoId={todo.id}
              isEditable={isEditable}
              todoDone={() => handleTodoCompleted(todo.id)}
              todoEdit={() => {
                handleTodoEdit(todo.id);
              }}
              todoDelete={() => {
                handleTodoDelete(todo.id);
              }}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;