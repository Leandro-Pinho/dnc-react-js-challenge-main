import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import edit from "./assets/material-symbols_edit.svg"
import delet from "./assets/ic_round-delete.svg"
import ModalAlert from "./components/ModalAlert/ModalAlert";
import "./app.scss"
import Filter from "./components/Filter/Filter";


function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [takeId, setTakeId] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false)

  // filtrar
  const [filter, setFilter] = useState("All");
  // ordernar
  const [sort, setSort] = useState("Asc");

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
            id: new Date(),
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

  const handleOpenModalDelete = (id) => {
    setTakeId(id);
    setOpenModalDelete(true);
  }

  function handleDeleteClick() {
    setTodos(todos.filter((todo) => todo.id !== takeId))
    setOpenModalDelete(false);
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

  const handleOpenModalEdit = (id) => {
    setTakeId(id);
    setOpenModalEdit(true);
  }

  const handleEdit = () => {
    const findTodo = todos.find((todo) => todo.id === takeId);
    setEditTodo(findTodo);
    setOpenModalEdit(false);
  }

  return (
    <section className="App" >
      <Header />
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <table>
        <thead >
          <tr className="title-header">
            <th>Tarefa { /* todos.length */}</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>


        <ModalAlert
          isOpen={openModalEdit}
          setOpenModal={setOpenModalEdit}

          operation={"Deseja editar esta tarefa?"}
          // title={task.text}
          onClickYes={handleEdit}
        />

        <ModalAlert
          isOpen={openModalDelete}
          setOpenModal={setOpenModalDelete}

          operation={"Deseja excluir esta tarefa?"}
          // title={task.text}
          onClickYes={handleDeleteClick}
        />

        {todos
          // filtro por todas e completas e incpmpletas
          .filter((todo) => (
            filter === "All"
              ? true
              : filter === "Completed"
                ? todo.completed
                : !todo.completed
          ))

          // ordernar por ascendente ou decendente na ordem alfabetica
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )

          .map((task) => (
            <>
              <tbody key={task.id}>
                <tr>
                  <td className={`list ${task.completed ? "complete" : ""}`}>{task.text}</td>
                  <td className="img-complete">{<input type="checkbox" onClick={() => completeTask(task.id)}></input>}</td>
                  <td>
                    {<img src={edit} onClick={() => handleOpenModalEdit(task.id)}></img>}
                    {<img src={delet} onClick={() => handleOpenModalDelete(task.id)}></img>}
                  </td>
                </tr>
              </tbody>
            </>
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
