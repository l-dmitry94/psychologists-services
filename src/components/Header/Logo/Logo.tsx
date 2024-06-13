import { Link } from 'react-router-dom';

import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <Link to="/" className={scss.logo}>
            psychologists<span className={scss.logoDot}>.</span>
            <span className={scss.logoColor}>services</span>
        </Link>
    );
};

export default Logo;
