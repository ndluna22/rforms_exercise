import React, { useState } from "react";
import uuid from "uuid/v1";

//NewTodoForm - this component should render a form with one text input
//--for the task to be created. When this form is submitted,
//--a new Todo component should be created. -
//Todo- this component should display a div with the task of the todo.

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          onChange={handleChange}
          value={task}
        />
        <button>Add a todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
