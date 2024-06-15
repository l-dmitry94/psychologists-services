/* eslint-disable no-unused-vars */
export enum Button {
    Login = 'authLogin',
    Register = 'authRegister',
    ModalAuth = 'modalAuth',
    LoadMore = 'loadMore',
    MakeAppointment = 'makeAppointment',
}

export interface ICustomButton {
    button: Button;
    label: string;
}
