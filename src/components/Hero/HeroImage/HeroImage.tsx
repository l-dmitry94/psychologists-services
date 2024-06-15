import { hero_1x, hero_2x } from 'assets/images/hero';

import scss from './HeroImage.module.scss';
import { icons } from 'assets/icons';

const HeroImage = () => {
    return (
        <div className={scss.imageWrapper}>
            <img
                src={hero_1x}
                srcSet={`${hero_1x} 1x, ${hero_2x} 2x`}
                alt="woman in glasses"
                className={scss.image}
            />

            <div className={scss.usersWrapper}>
                <svg className={scss.usersIcon}>
                    <use href={`${icons}#icon-users`}></use>
                </svg>
            </div>

            <div className={scss.questionWrapper}>
                <svg className={scss.questionIcon}>
                    <use href={`${icons}#icon-question`}></use>
                </svg>
            </div>

            <div className={scss.imageLabel}>
                <div className={scss.checkWrapper}>
                    <svg className={scss.checkIcon}>
                        <use href={`${icons}#icon-check`}></use>
                    </svg>
                </div>
                <div className={scss.imageLabelInfo}>
                    <p className={scss.labelText}>Experienced psychologists</p>
                    <p className={scss.labelNumber}>15,000</p>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;
