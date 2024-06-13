import Container from 'components/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';

import { useMedia } from 'hooks/useMedia';
import navigation from './navigation.json';

import scss from './Header.module.scss';

const Header = () => {
    const { isTablet } = useMedia();
    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <div className={scss.leftWrapper}>
                        <Logo />
                        {isTablet && <Navigation navigationItems={navigation} />}
                    </div>
                    <div className={scss.rightWrapper}>{isTablet && <Auth />}</div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
