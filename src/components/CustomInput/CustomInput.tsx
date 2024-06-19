import { FC } from 'react';

import { ICustomInput } from './CustomInput.types';

import scss from './CustomInput.module.scss';

const CustomInput: FC<ICustomInput> = ({ register, value, type, placeholder }) => {
    return (
        <input type={type} {...register(value)} placeholder={placeholder} className={scss.input} />
    );
};

export default CustomInput;
