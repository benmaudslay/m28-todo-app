import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

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
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form handleForm={handleForm} />
      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;

// const func = (param) => {

// }

// func()
