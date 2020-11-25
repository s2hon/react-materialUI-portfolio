import React from 'react';
import PortfolioCard from './PortCard';
import Grid from '@material-ui/core/Grid';

function PortfolioGrid ({ data }) {
    console.log(data);
    return (
        data.map(projects => (
            <Grid item xs={5.5}>
                <PortfolioCard 
                    deployed={projects.deployed}
                    demo={projects.demo}
                    title={projects.title}
                    github={projects.github}
                    technologies={projects.technologies}
                />
            </Grid>
        ))
    )
}

export default PortfolioGrid;