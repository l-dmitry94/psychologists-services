import { FC } from 'react';
import clsx from 'clsx';

import { icons } from 'assets/icons';

import { IHeroIcons, Icon } from './HeroIcon.types';

import scss from './HeroIcons.module.scss';

const HeroIcons: FC<IHeroIcons> = ({ icon }) => {
    return (
        <div
            className={clsx(
                scss.wrapperIcon,
                icon === Icon.Users && scss.usersWrapper,
                icon === Icon.Question && scss.questionWrapper
            )}
        >
            <svg className={scss.icon}>
                <use href={`${icons}#icon-${icon}`}></use>
            </svg>
        </div>
    );
};

export default HeroIcons;
