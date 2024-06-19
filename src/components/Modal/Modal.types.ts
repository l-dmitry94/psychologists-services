import { ReactNode } from 'react';

export interface IModal {
    modalIsOpen: boolean;
    closeModal: () => void;
    title: string;
    description: string;
    label: string;
    children: ReactNode;
}
