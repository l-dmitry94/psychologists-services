import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { INavigation } from './Navigation.types';

import scss from './Navigation.module.scss';

const Navigation: FC<INavigation> = ({ navigationItems, closeBurgerMenu }) => {
    return (
        <nav>
            <ul className={scss.navigationList}>
                {navigationItems.map(({ label, href }) => (
                    <li key={label} className={scss.navigationItem}>
                        <NavLink
                            to={href}
                            onClick={closeBurgerMenu}
                            className={scss.navigationLink}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
