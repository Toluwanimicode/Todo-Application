import PropTypes from "prop-types";
import MyButton from "./MyButton";
import "./Todo.css";

const TodoCard = ({
  todoDone,
  todoEdit,
  todoDelete,
  todoText,
  todoId,
}) => {
  return (
    <div className="todo">
      <p className="text" id={todoId}>
        {todoText}
      </p>
      <div>
        <MyButton bgcolor="green" func={todoDone}>
          Done
        </MyButton>

        <MyButton bgcolor="orange" func={todoEdit}>
          Edit
        </MyButton>

        <MyButton bgcolor="red" func={todoDelete}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

TodoCard.propTypes = {
  todoText: PropTypes.string,
  todoId: PropTypes.number,
  todoDone: PropTypes.func,
  todoEdit: PropTypes.func,
  todoDelete: PropTypes.func,
  isEditable: PropTypes.bool,
};

export default TodoCard;