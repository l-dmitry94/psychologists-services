import { useCallback, useState } from 'react';

import CustomButton, { Button } from 'components/CustomButton';
import Login from './Login';
import Registration from './Registration';

import { useMedia } from 'hooks/useMedia';

import scss from './Auth.module.scss';

const Auth = () => {
    const { isDesktop } = useMedia();

    const [loginModalIsOpen, setLoginModalIsOpen] = useState<boolean>(false);
    const [registrationModalIsOpen, setRegistrationModalIsOpen] = useState<boolean>(false);

    const handleClick = useCallback((value: string) => {
        if (value === 'login') {
            setLoginModalIsOpen(true);
        } else if (value === 'registration') {
            setRegistrationModalIsOpen(true);
        }
    }, []);

    return (
        <div className={scss.auth}>
            <ul className={scss.authList}>
                <li onClick={() => handleClick('login')} className={scss.authItem}>
                    <CustomButton type="button" button={Button.Login} label="Log In" />
                </li>
                <li onClick={() => handleClick('registration')} className={scss.authItem}>
                    <CustomButton
                        type="button"
                        button={isDesktop ? Button.Register : Button.Login}
                        label="Registration"
                    />
                </li>
            </ul>

            <Login isOpen={loginModalIsOpen} closeModal={() => setLoginModalIsOpen(false)} />

            <Registration
                isOpen={registrationModalIsOpen}
                closeModal={() => setRegistrationModalIsOpen(false)}
            />
        </div>
    );
};

export default Auth;
