import React from 'react';

import MainSlideshow from '../parts/MainSlideshow';
import About from './About'
import ProjectShowcase from '../parts/ProjectShowcase';

const Home: React.FC = () => {
    return (
        <section className="h-full">
            {/* <MainSlideshow /> */}
            <About />
            <ProjectShowcase />
        </section>
    );
};

export default Home;