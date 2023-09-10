import React from 'react'
import "./index.scss"


const ModalAlert = ({ isOpen, operation, title, setOpenModal, onClickYes }) => {
    if (isOpen) {
        return (
            <div className='background'>
                <div className='modal'>
                    <h1>{operation}</h1>
                    <p>{title}</p>
{console.log(title)}
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
