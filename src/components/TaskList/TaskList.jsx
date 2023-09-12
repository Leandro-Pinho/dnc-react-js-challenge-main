import React from 'react'
import edit from "../../assets/material-symbols_edit.svg"
import delet from "../../assets/ic_round-delete.svg"
import '../../app.scss'


const TaskList = ({ todos, sort, filter, search, handleOpenModalDelete, handleOpenModalEdit, completeTask }) => {
    return (
        <section>
            <table>
                <thead >
                    <tr className="title-header">
                        <th>Tarefa { /* todos.length */}</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>

                {todos
                    // filtro por todas e completas e incpmpletas
                    .filter((todo) => (
                        filter === "All"
                            ? true
                            : filter === "Completed"
                                ? todo.completed
                                : !todo.completed
                    ))

                    // pesquisa por titulo 
                    .filter((todo) => (
                        todo.text.toLowerCase().includes(search.toLowerCase())
                    ))

                    // ordernar por ascendente ou decendente na ordem alfabetica
                    .sort((a, b) =>
                        sort === "None"
                            ? true
                            : sort === "Asc"
                                ? a.text.localeCompare(b.text)
                                : b.text.localeCompare(a.text)
                    )

                    .map((task) => (
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
                    ))}

            </table>
        </section>
    )
}

export default TaskList
