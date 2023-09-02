import React from 'react'
import "./index.scss"


const ModalAlert = ({ isOpen, operation, title, setOpenModal, onClickYes }) => {
    if (isOpen) {
        return (
            <div className='background'>
                <div className='modal'>
                    <h1>{operation.text}</h1>
                    <p>{title.text}</p>

                    <div className='btn-modal'>
                        <button className='btn_not' onClick={() => setOpenModal(false)}>Não</button>
                        <button className='btn_yes' onClick={onClickYes}>Sim</button>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export default ModalAlert
