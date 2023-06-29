import React, { useState } from "react";
import Header from "./components/Header/Header";
import complete from "../src/assets/mdi_checkbox-blank-outline.svg"
import edit from "../src/assets/material-symbols_edit.svg"
import delet from "../src/assets/ic_round-delete.svg"
import ModalAlert from "./components/ModalAlert/ModalAlert";
import ModalForm from "./components/ModalForm/ModalForm";
import "./app.scss"


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsOpen1, setModalIsOpen1] = useState(false)
  const [modalFormIsOpen, setModalFormIsOpen] = useState(false)

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  // =========== adicionando tarefa ============= 
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  /* ====================== delete ====================== */
  function handleDeleteClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  /* =================== atualizar ================== */

  
  return (
    <div className="App" >
      <Header />
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <table>
        <thead >
          <tr className="title-header">
            <th>Tarefa</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>

        <ModalForm isOpen={modalFormIsOpen} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} setModalFormIsOpen={() => setModalFormIsOpen(!modalFormIsOpen)} todo={todo} />
        {todos.map((task) => (
          <tbody key={task.id}>
            <ModalAlert isOpen={modalIsOpen} setModalIsOpen={() => setModalIsOpen(!modalIsOpen)} operation={"Deseja Excluir esta tarefa?"} deleteTask={() => handleDeleteClick(task.id)} title={task.text} />
            <ModalAlert isOpen={modalIsOpen1} setModalIsOpen={() => setModalIsOpen1(!modalIsOpen1)} operation={"Deseja Editar esta tarefa?"} title={task.text} />
            <tr>
              <td>{task.text}</td>
              <td className="img-complete">{<img src={complete}></img>}</td>
              <td>{<img src={edit} onClick={() => setModalIsOpen1(true)}></img>}{<img src={delet} onClick={() => setModalIsOpen(true)}></img>}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr>
            <td className="new-task">Nova tarefa...</td>
            <td><button onClick={() => setModalFormIsOpen(true)}>+</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
