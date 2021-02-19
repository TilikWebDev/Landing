import React, { useState } from 'react';
import Modal from 'react-modal';

import './modal.scss';

const Styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        inset: 'auto',
        padding: 0,
        width: '100%',
        maxWidth: '395px',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '4px'
    }
}


export const ModalCongratulations = ({closeCallback}) => {
    const [modalIsOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        closeCallback && closeCallback();
        setIsOpen(false);
    }

    return (
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            portalClassName={'modal'}
            ariaHideApp={false}
            style={Styles}
        >
            <div className={'modal__header'}>
                <h2 className={'h2'}>
                    Congratulations
                </h2>

                <button onClick={closeModal} className={'modal__close'}>
                    +
                </button>
            </div>

            <div className={'modal__body'}>
                <p className={'p1'}>
                    You have successfully passed the registration
                </p>
            </div>
            
            <div className={'modal__footer'}>
                <button className={'button_primary'} onClick={closeModal}>
                    Great
                </button>
            </div>
        </Modal>
    )
}