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

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleForm = (newTodo) => {
    setTodos([...todos, {
      value: newTodo,
      checked: false,
      date: new Date()
    }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form handleForm={handleForm} />
      <List todos={todos} />
    </div>
  );
};

export default App;

// const func = (param) => {

// }

// func()