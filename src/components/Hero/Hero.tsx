import Container from 'components/Container';
import HeroInfo from './HeroInfo';
import HeroImage from './HeroImage';

import scss from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={scss.hero}>
            <Container>
                <div className={scss.wrapper}>
                    <HeroInfo />
                    <HeroImage />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
