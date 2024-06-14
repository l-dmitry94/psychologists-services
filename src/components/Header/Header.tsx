import Container from 'components/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';
import BurgerMenu from './BurgerMenu';

import { useMedia } from 'hooks/useMedia';
import navigation from './navigation.json';

import scss from './Header.module.scss';

const Header = () => {
    const { isDesktop } = useMedia();
    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <div className={scss.leftWrapper}>
                        <Logo />
                        {isDesktop && (
                            <Navigation navigationItems={navigation} />
                        )}
                    </div>
                    <div className={scss.rightWrapper}>
                        {isDesktop && <Auth />}
                        {!isDesktop && <BurgerMenu />}
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
