import { Link } from 'react-router-dom';
import scss from './HeroInfo.module.scss';
import { icons } from 'assets/icons';

const HeroInfo = () => {
    return (
        <div className={scss.info}>
            <h1 className={scss.infoTitle}>
                The road to the <span className={scss.infoTitleColor}>depths</span> of the human
                soul
            </h1>
            <p className={scss.infoDescription}>
                We help you to reveal your potential, overcome challenges and find a guide in your
                own life with the help of our experienced psychologists.
            </p>
            <Link to="psychologists" className={scss.infoLink}>
                <p className={scss.infoLinkText}>Get started</p>
                <svg className={scss.infoLinkIcon}>
                    <use href={`${icons}#icon-arrow`}></use>
                </svg>
            </Link>
        </div>
    );
};

export default HeroInfo;
