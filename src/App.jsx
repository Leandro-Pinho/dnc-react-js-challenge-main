import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ModalAlert from "./components/ModalAlert/ModalAlert";
import Filter from "./components/Filter/Filter";
import TaskList from "./components/TaskList/TaskList";
import Search from "./components/Search/Search";
import "./app.scss"


function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);
  const [todo, setTodo] = useState('');
  const [takeId, setTakeId] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // state de pesquisa
  const [search, setSearch] = useState("");
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
      <Search search={search} setSearch={setSearch} />

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

      <TaskList
        key={todo.id}
        todos={todos}
        filter={filter}
        sort={sort}
        search={search}
        handleOpenModalDelete={handleOpenModalDelete}
        handleOpenModalEdit={handleOpenModalEdit}
        completeTask={completeTask}
      />

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="todo" placeholder="Nova Tarefa..." value={todo} onChange={handleInputChange} />
        <button type="submit">+</button>
      </form>

    </section>
  );
}

export default App;
