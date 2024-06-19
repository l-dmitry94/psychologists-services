import { FC } from 'react';

import Modal from 'components/Modal';

import { IAuth } from '../Auth.types';

import scss from './Login.module.scss';

const Login: FC<IAuth> = ({ isOpen, closeModal }) => {
    return (
        <Modal
            modalIsOpen={isOpen}
            closeModal={closeModal}
            title="Log In"
            description={
                'Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.'
            }
            label="Log In"
        >
            Login
        </Modal>
    );
};

export default Login;
