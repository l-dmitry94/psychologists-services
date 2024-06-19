import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface ICustomInput {
    register: UseFormRegister<any>;
    value: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
}
