import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import edit from "./assets/material-symbols_edit.svg"
import delet from "./assets/ic_round-delete.svg"
import ModalAlert from "./components/ModalAlert/ModalAlert";
import "./app.scss"


function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)


  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
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
      //  console.log(todos)
      setTodo("");
    } else {
      updateTodo(todo, editTodo.id, editTodo.completed)
    }
  }

  const updateTodo = (text, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { text, id, completed } : todo
    )
    setTodos(newTodo);
    setEditTodo("");
    // console.log(newTodo)
  }

  useEffect(() => {
    if (editTodo) {
      setTodo(editTodo.text);
    } else {
      setTodo("")
    }
  }, [setTodo, editTodo])

  function handleDeleteClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
    setOpenModalDelete(false)
  }

  const completeTask = (id) => {
    setTodos(
      todos.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    )
  }

  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    setOpenModalEdit(false)
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

        <ModalAlert isOpen={openModalEdit} operation={"Deseja editar esta tarefa?"} title={todos} setOpenModal={setOpenModalEdit} onClickYes={() => handleEdit(task.id)} />
        <ModalAlert isOpen={openModalDelete} operation={"Deseja excluir esta tarefa?"} title={todos} setOpenModal={setOpenModalDelete} onClickYes={() => handleDeleteClick(task.id)} />
       
        {todos.map((task) => (
          <tbody key={task.id}>
            <tr>
              <td className={`list ${task.completed ? "complete" : ""}`}>{task.text}</td>
              <td className="img-complete">{<input type="checkbox" onClick={() => completeTask(task.id)}></input>}</td>
              <td>
                {<img src={edit} onClick={() => setOpenModalEdit(true)} /*onClick={() => handleEdit(task.id)}*/></img>}
                {<img src={delet} onClick={() => setOpenModalDelete(true)} /*onClick={() => handleDeleteClick(task.id)}*/></img>}
              </td>
            </tr>
          </tbody>
        ))}

      </table>

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="todo" placeholder="Nova Tarefa..." value={todo} onChange={handleInputChange} />
        <button type="submit">+</button>
      </form>

    </section>
  );
}

export default App;
