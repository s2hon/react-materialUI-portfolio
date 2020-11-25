import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import data from '../data/portfoliodb.json'
import PortfolioGrid from './PortfolioGrid'

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 400,
    margin: 'auto',
    backgroundColor: '#0D0D0D',
    paddingTop: 100,
    paddingLeft: 100,
    paddingBottom: 25,
    color: "#BF545D",
    }
    }));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className="headline bold">Portfolio</h1>
            <Grid container spacing={3}>
                <PortfolioGrid data={data}/>
            </Grid>

        </div>
    )}

    