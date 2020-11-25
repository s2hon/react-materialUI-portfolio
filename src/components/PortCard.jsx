
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardItem from './CardList';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 'auto',
        height: 'auto',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 'auto',
        width: 'auto',
    },
}));

export default function MediaControlCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography component="h4" variant="h4">
                {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                <ul>
                    {props.technologies.map(t => <CardItem text={t} />)}
                </ul>
            </Typography>
            </CardContent>
            <div className={classes.controls}>
            <IconButton href={props.deployed} aria-label="previous">
                <GitHubIcon className={classes.icon}/>
            </IconButton>
            <IconButton href={props.github} aria-label="previous">
                <LaunchIcon className={classes.icon}/>
            </IconButton>
            </div>
        </div>
            <CardMedia autoPageSize className={classes.cover} title={props.title} component="iframe" src={props.demo} />
        </Card>
    );
}

