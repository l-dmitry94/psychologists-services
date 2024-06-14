import CustomButton, { Button } from 'components/CustomButton';

import { useMedia } from 'hooks/useMedia';

import scss from './Auth.module.scss';

const Auth = () => {
    const { isDesktop } = useMedia();

    return (
        <div className={scss.auth}>
            <ul className={scss.authList}>
                <li className={scss.authItem}>
                    <CustomButton button={Button.Login} label="Log In" />
                </li>
                <li className={scss.authItem}>
                    <CustomButton
                        button={isDesktop ? Button.Register : Button.Login}
                        label="Registration"
                    />
                </li>
            </ul>
        </div>
    );
};

export default Auth;
