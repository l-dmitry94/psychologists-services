import { FC } from 'react';
import { Link } from 'react-router-dom';

import { INavigation } from './Navigation.types';

import scss from './Navigation.module.scss';

const Navigation: FC<INavigation> = ({ navigationItems }) => {
    return (
        <nav>
            <ul className={scss.navigationList}>
                {navigationItems.map(({ label, href }) => (
                    <li key={label} className={scss.navigationItem}>
                        <Link to={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
