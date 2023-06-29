import React from 'react'
import "./index.scss"


const ModalForm = ({ isOpen, handleFormSubmit, handleInputChange, todo, setModalFormIsOpen }) => {
    if (isOpen) {

        return (
            <div className='background'>
                <form onSubmit={handleFormSubmit} className='form'>
                    <h1>Adicionar uma nova tarefa</h1>
                    <div className='formTitle'>
                        <label htmlFor="todo">Title: </label>
                        <input
                            name="todo"
                            type="text"
                            placeholder='Create a new todo'
                            value={todo}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div className='formDescription'>
                        <label htmlFor="todo">Description: </label>
                        <textarea
                            name="todo"
                            type="text"
                            placeholder='Create a new todo'
                            value={todo}
                            onChange={handleInputChange}
                        />
                    </div> */}
                    
                    <button type="submit">Add</button>
                    <button onClick={setModalFormIsOpen}>fechar</button>
                </form>
            </div>
        )
    }
    return null
}

export default ModalForm