import React, { useState } from "react";
import Header from "./components/Header/Header";
import edit from "./assets/material-symbols_edit.svg"
import complete from "./assets/ic_round-delete.svg"
import delet from "./assets/ic_round-delete.svg"
import "./app.scss"


function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');


  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
          completed: false,
        }
      ]);
    }
console.log(todos)
    setTodo("");
  }

  function handleDeleteClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completeTask = (id) => {
    setTodos(
      todos.map((task) => {
        if (task.id === id && task.completed === false) {
          return { ...task, completed: true };
        } else {
          return { ...task, completed: false };
        }
      })
    )
  }

  return (
    <section className="App" >
      <Header />
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <table>
        <thead >
          <tr className="title-header">
            <th>Tarefa { /* todos.length */}</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>

        {todos.map((task) => (
          <tbody key={task.id}>
            <tr>
              <td>{task.text}</td>
              <td className="img-complete">{<input type="checkbox" onClick={() => completeTask(task.id)}></input>}</td>
              <td>{<img src={edit}></img>}{<img src={delet} onClick={() => handleDeleteClick(task.id)}></img>}</td>
            </tr>
          </tbody>
        ))}

        <tfoot>
          <tr>     
            <td className="new-task"><input type="text" name="todo" placeholder="Nova Tarefa..." value={todo} onChange={handleInputChange} /></td>
            <td><button onClick={handleFormSubmit}>+</button></td>
          </tr>
        </tfoot>

      </table>
    </section>
  );
}

export default App;
