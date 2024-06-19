import { FC } from 'react';

import scss from './CustomError.module.scss';

export interface ICustomError {
    error?: string;
}

const CustomError: FC<ICustomError> = ({ error }) => {
    return <>{error && <p className={scss.error}>{error}</p>}</>;
};

export default CustomError;
