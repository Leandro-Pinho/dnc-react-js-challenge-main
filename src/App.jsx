import React from "react";
import Header from "./components/Header/Header";
import complete from "../src/assets/mdi_checkbox-blank-outline.svg"
import edit from "../src/assets/material-symbols_edit.svg"
import delet from "../src/assets/ic_round-delete.svg"
import adding from "../src/assets/ic_round-delete.svg"
import "./app.scss"


//utilizar esse mockup como exemplo

const db = [
  { "id": 1, "title": "Exercicios", "description": "Ir para academia fazer exercicios", "completed": true },
  { "id": 2, "title": "Limpar o carro", "description": "Limpar o carro inteiro, de dentro pra fora", "completed": false },
  { "id": 3, "title": "Banho e tosa", "description": "Levar o cachorro ao pet shop", "completed": false },
  { "id": 4, "title": "Limpar quarto", "description": "Limpar toda bagunça que está dentro do quarto", "completed": true },
  { "id": 5, "title": "trabalhar", "description": "Chegar ao escritorio antes das 20:00", "completed": true },
 /* { "id": 6, "title": "Ir ao banco", "description": "Chear ao banco antes das 10:00", "completed": false },
  { "id": 7, "title": "Almoçar", "description": "Preparar a comida para a janta", "completed": false },
  { "id": 8, "title": "Jogar volei", "description": "Ir a quadra para jogar volei com os amigos", "completed": true },
  { "id": 9, "title": "Estudar programação", "description": "Entrar na plataforma dos alunos para estudar", "completed": false },
  { "id": 10, "title": "shopping", "description": "Fazer algumas compras no shopping", "completed": true } */
]

console.log(db)
function App() {
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

        {db.map((task) => (
          <tbody key={task.id}>
            <tr>
              <td>{task.title}</td>
              <td className="img-complete">{<img src={complete}></img>}</td>
              <td>{<img src={edit}></img>}{<img src={delet}></img>}</td>
            </tr>
          </tbody>
        ))}
            <tr>
              <td className="new-task">Nova tarefa...</td>
              <td><button>+</button></td>
            </tr>
      </table>
    </div>
  );
}

export default App;
