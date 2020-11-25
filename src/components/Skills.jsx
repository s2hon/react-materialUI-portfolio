import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

export default function ChipsArray() {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Multitasking' },
        { key: 1, label: 'Strategic Planning' },
        { key: 2, label: 'Staff Management' },
        { key: 3, label: 'Project Management' },
        { key: 4, label: 'Google Suite' },
        { key: 5, label: 'Microsoft Suite' },
        { key: 6, label: 'Slack' },
        { key: 7, label: 'Trello' },
        { key: 8, label: 'Korean' },
        { key: 9, label: 'Chinese (intermediate)' },
    ]);

    const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
    <Paper component="ul" className={classes.root}>
        {chipData.map((data) => {
        let icon;

        return (
        <li key={data.key}>
            <Chip
                icon={icon}
                label={data.label}
                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                className={classes.chip}
            />
        </li>
        );
    })}
    </Paper>
);
}
