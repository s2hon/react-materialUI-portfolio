import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    box: {
        margin: 'auto',
        backgroundColor: '#0D0D0D',
    },
    mainBox: {
        margin: 'auto',
        maxWidth: 400,
        paddingTop: 100,
        paddingBottom: 25,
        color: "#BF545D",
    },
    icon:{
        color: '#BF0404'
    },
    right:{
        textAlign: 'right',
        color: '#D9D9D9'
    }
}))

export default function DesignComponent() {
    const classes = useStyles();
    
    return (
        <div className={classes.box} id="pageskills" >
            <div className={classes.mainBox}>
                <h2 className="headline bold">About Me</h2>
                <h5 className="text-justify">
                Hey, I've thrown extravegent parties my whole life <br/> and with Covid-19 I got a chance to throw my ideas online.<br/>
                I mean-if I can bring ideas offline-<br/>do you think I can bring ideas to life wireless?<br/>
                </h5>
                <h2 className={classes.right}>Try me.</h2>
        
                <div>
                    <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon className={classes.icon}/>} checkedIcon={<FavoriteIcon />} iconStyle={{"fill":"#BF0404"}} />}
                    label="HTML/CSS"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon className={classes.icon}/>} checkedIcon={<FavoriteIcon />} iconStyle={{"fill":"#BF0404"}} />}
                    label="Vanilla JavaScript"
                    />
                </div>
                
                <div>
                    <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon className={classes.icon}/>} checkedIcon={<FavoriteIcon />} iconStyle={{"fill":"#BF0404"}} />}
                    label="Node.JS (Express, Axios, Passport, Morgan)"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon className={classes.icon}/>} checkedIcon={<FavoriteIcon />} iconStyle={{"fill":"#BF0404"}} />}
                    label="MySQL/MongoDB/JawsDB"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon className={classes.icon}/>} checkedIcon={<FavoriteIcon />} iconStyle={{"fill":"#BF0404"}} />}
                    label="React"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon className={classes.icon}/>} checkedIcon={<FavoriteIcon />} iconStyle={{"fill":"#BF0404"}} />}
                    label="GitHub"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon className={classes.icon}/>} checkedIcon={<FavoriteIcon />} iconStyle={{"fill":"#BF0404"}} />}
                    label="Material-UI"
                    />
                </div>

                <div>
                    <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorderIcon className={classes.icon}/>} checkedIcon={<FavoriteIcon />} iconStyle={{"fill":"#BF0404"}} defaultChecked/>}
                    label="and more!"
                    />
                </div>
            </div>
        </div>
    );
}
