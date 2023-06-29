import React from 'react'
import "./index.scss"


const ModalAlert = ({ isOpen, setModalIsOpen, operation, deleteTask, title }) => {
    if (isOpen) {
        return (
            <div className='background'>
                <div className='modal'>
                    <h1>{operation}</h1>
                    <p>{title}</p>

                    <div className='btn-modal'>
                        <button className='btn_not' onClick={setModalIsOpen}>Não</button>
                        <button className='btn_yes' onClick={deleteTask}>Sim</button>
                    
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export default ModalAlert
