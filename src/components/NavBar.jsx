import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DraftsIcon from '@material-ui/icons/Drafts';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '350',
        margin: 'auto',
        backgroundColor: '#D9D9D9',

    },
    stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
    icon:{
        color: '#BF0404'
    }
    }));

    export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={[classes.root,classes.stickToBottom]}>
            <BottomNavigationAction label="Resume" value="Resume" icon={<DescriptionIcon className={classes.icon}/>} href={"https://drive.google.com/file/d/1xkpr6TA3rSJQrM4UQM_5lC2-mu2A1avV/view"} />
            <BottomNavigationAction label="Email" value="Email" icon={<DraftsIcon className={classes.icon}/>} href={"mailto:staci.shon@gmail.com"} target={"_blank"} rel={"noopener noreferer"} />
            <BottomNavigationAction label="Github" value="Github" icon={<GitHubIcon className={classes.icon}/>} href={"https://github.com/s2hon"} target={"_blank"} rel={"noopener noreferer"} />
            <BottomNavigationAction label="LinkedIn" value="LinkedIn" icon={<LinkedInIcon className={classes.icon}/>} href={"https://www.linkedin.com/in/staci-shon/"} target={"_blank"} rel={"noopener noreferer"} />
        </BottomNavigation>
    );
}