import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    box: {
    fontSize: 19,
    fontWeight: 400,
    margin: 'auto',
    backgroundColor: '#0D0D0D',
    paddingTop: 400,
    marginTop: -70,
    },
}));

function Home() {
    const classes = useStyles();
        return (
            <div className={classes.root}  id="pagehome" >
                <Box className={classes.box}></Box>   
            </div>
        )
    }        

export default Home;