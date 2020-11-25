import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardItem from './CardList';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function MediaCard(props) {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia className={classes.media} title={props.title}>
                <iframe src={props.demo} className="img-fluid" />
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <ul>
                        {props.technologies.map(t => <CardItem text={t} />)}
                    </ul>
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={props.deployed}>            
                    <Button size="small" color="primary">
                    Demo
                    </Button>
                </a>

                <a href={props.github}>            
                    <Button size="small" color="primary">
                    GitHub
                    </Button>
                </a>
            </CardActions>
        </Card>
    );
}

export default MediaCard
