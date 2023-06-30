import React from "react";
import Header from "./components/Header/Header";
import "./app.scss"


function App() {


  return (
    <section className="App" >
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
        {/*
        {todos.map((task) => (
          <tbody key={task.id}>
            <tr>
              <td>{task.text}</td>
              <td className="img-complete">{<img src={complete}></img>}</td>
              <td>{<img src={edit}></img>}{<img src={delet}></img>}</td>
            </tr>
          </tbody>
        ))} */}

        <tfoot>
          <tr>
            <td className="new-task">Nova tarefa...</td>
            <td><button>+</button></td>
          </tr>
        </tfoot>

      </table>
    </section>
  );
}

export default App;
