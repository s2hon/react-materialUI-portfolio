import React from 'react';
import PortfolioCard from './PortfolioCard';

function PortfolioGrid ({ data }) {
    console.log(data);
    return (
        data.map(projects => (
            <PortfolioCard 
                deployed={projects.deployed}
                demo={projects.demo}
                title={projects.title}
                github={projects.github}
                technologies={projects.technologies}
            />
        ))
    )
}

export default PortfolioGrid;