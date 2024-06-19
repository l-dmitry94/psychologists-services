import { FC, useEffect } from 'react';
import ReactModal from 'react-modal';

import { IModal } from './Modal.types';

import scss from './Modal.module.scss';
import { icons } from 'assets/icons';

ReactModal.setAppElement('#root');

const Modal: FC<IModal> = ({ modalIsOpen, closeModal, title, description, children }) => {
    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'visible';
    }, [modalIsOpen]);

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            overlayClassName={scss.overlay}
            className={scss.content}
        >
            <button onClick={closeModal} className={scss.closeButton}>
                <svg className={scss.closeIcon}>
                    <use href={`${icons}#icon-close`}></use>
                </svg>
            </button>
            <div className={scss.modalInfo}>
                <h3 className={scss.modalTitle}>{title}</h3>
                <p className={scss.modalDescription}>{description}</p>
            </div>

            {children}
        </ReactModal>
    );
};

export default Modal;
