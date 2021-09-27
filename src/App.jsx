import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

/** AIMS
 * Add todo items to a todo list
 * Display todo list
 * Mark completed items
 * Delete items
 **/

/** COMPONENTS
 * Input Form for the todos
 * List component to show todos
 * List item component for each todo
 */

// CRUD - create, read, update & delete

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleForm = (newTodo) => {
    setTodos([
      ...todos,
      {
        value: newTodo,
        checked: false,
        date: new Date(),
      },
    ]);
  };

  const handleChecked = (index) => {
    let tempArr = [...todos];
    tempArr[index].checked = !tempArr[index].checked;
    setTodos(tempArr);
  };

  const handleDelete = (index) => {
    let tempArr = [...todos];
    tempArr.splice(index, 1)
    setTodos(tempArr);
  };

  return (
    <div className="app-wrapper">
      <h1>Todo List</h1>
      <Form handleForm={handleForm} />
      <List
        todos={todos}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;

// const func = (param) => {

// }

// func()
