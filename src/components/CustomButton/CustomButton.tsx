import { FC } from 'react';
import clsx from 'clsx';

import { Button, ICustomButton } from './CustomButton.types';

import scss from './CustomButton.module.scss';

const CustomButton: FC<ICustomButton> = ({ button, label }) => {
    return (
        <button
            className={clsx(
                scss.button,
                button === Button.Login && scss.authLogin,
                button === Button.Register && scss.authRegister,
                button === Button.LoadMore && scss.loadMore,
                button === Button.MakeAppointment && scss.makeAppointment,
                button === Button.ModalAuth && scss.modalAuth
            )}
        >
            {label}
        </button>
    );
};

export default CustomButton;
