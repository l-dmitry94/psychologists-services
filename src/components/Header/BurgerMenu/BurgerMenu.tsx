import { useEffect, useState } from 'react';
import clsx from 'clsx';

import Navigation from '../Navigation';
import Auth from '../Auth';

import { icons } from 'assets/icons';
import navigation from '../navigation.json';

import scss from './BurgerMenu.module.scss';

const BurgerMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'visible';
    }, [menuIsOpen]);

    return (
        <div className={scss.burgerMenu}>
            <button onClick={() => setMenuIsOpen(!menuIsOpen)} className={scss.burgerButton}>
                <svg className={scss.burgerIcon}>
                    <use href={`${icons}#icon-burger`}></use>
                </svg>
            </button>

            <div
                onClick={() => setMenuIsOpen(false)}
                className={clsx(scss.menu, menuIsOpen && scss.active)}
            >
                <div className={scss.blur}></div>
                <div onClick={(e) => e.stopPropagation()} className={scss.menuContent}>
                    <Navigation
                        navigationItems={navigation}
                        closeBurgerMenu={() => setMenuIsOpen(false)}
                    />
                    <Auth />
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
