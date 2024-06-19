import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { icons } from 'assets/icons';
import Modal from 'components/Modal';
import CustomInput from 'components/CustomInput';
import CustomButton, { Button } from 'components/CustomButton';
import CustomError from 'components/CustomError';

import { IAuth } from '../Auth.types';
import { IRegistration } from './Registration.types';

import scss from './Registration.module.scss';

const Registration: FC<IAuth> = ({ isOpen, closeModal }) => {
    const schema = yup
        .object({
            name: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().required(),
        })
        .required();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IRegistration>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<IRegistration> = (data) => {
        console.log(data);
        reset();
        closeModal();
    };
    return (
        <Modal
            modalIsOpen={isOpen}
            closeModal={closeModal}
            title="Registration"
            description={
                'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.'
            }
            label="Sign Up"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={scss.formWrapper}>
                    <div className={scss.inputWrapper}>
                        <CustomInput
                            type="text"
                            register={register}
                            value="name"
                            placeholder="Name"
                        />
                        <CustomError error={errors.name?.message} />
                    </div>

                    <div className={scss.inputWrapper}>
                        <CustomInput
                            type="text"
                            register={register}
                            value="email"
                            placeholder="Email"
                        />

                        <CustomError error={errors.email?.message} />
                    </div>

                    <div className={scss.inputWrapper}>
                        <div className={scss.passwordWrapper}>
                            <CustomInput
                                type="password"
                                register={register}
                                value="password"
                                placeholder="Password"
                            />
                            <button className={scss.passwordButton}>
                                <svg className={scss.passwordIcon}>
                                    <use href={`${icons}#icon-eye`}></use>
                                    <use href={`${icons}#icon-eye-off`}></use>
                                </svg>
                            </button>
                        </div>

                        <CustomError error={errors.password?.message} />
                    </div>
                </div>

                <CustomButton button={Button.ModalAuth} label="Sign Up" type="submit" />
            </form>
        </Modal>
    );
};

export default Registration;
