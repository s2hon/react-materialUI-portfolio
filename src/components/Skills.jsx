import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    box: {
        margin: 'auto',
        backgroundColor: '#432D59',
    },
        mainBox: {
        margin: 'auto',
        maxWidth: 400,
        paddingBottom: 200,
    },
    sectionTitle: {
        textAlign: 'center',
        margin: 'auto',
        fontSize: 20,
        fontWeight: 600,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 100,
        paddingBottom: 30,
        color: 'white',
    },
    headTitle: {
        paddingTop: 20,
        fontSize: 16,
        fontWeight: 600,
        color: "white",
    },
    table: {
        margin: 'auto',
        maxWidth: 'auto',
        maxHeight: 400,
        paddingBottom: 20,
        backgroundColor: '#432D59',
    },
    tableRow: {
        margin: 'auto',
        maxWidth: 400,
        fontSize: 16,
        fontWeight: 400,
        color: "#ffffff",
    }
}));

function createData(basic,db,other) {
    return { basic,db,other };
}
const rows = [
    createData('HTML/CSS', 'MySQL', 'Express.js'),
    createData('JavaScript', 'JawsDB','Axios'),
    createData('React', 'MongoDB', 'Passport'),
    createData('Material-UI','','GitHub'),
];

export default function Skills() {
    const classes = useStyles();

    return (<div className={classes.box} id="pageskills" >
    <div className={classes.mainBox}>
    <Typography className={classes.sectionTitle}>Skills</Typography>
    <Table className={classes.table} aria-label="simple table">
        <TableHead >
            <TableRow >
                <TableCell align="center" className={classes.headTitle}>UX/UI</TableCell>
                <TableCell align="center" className={classes.headTitle}>Database</TableCell>
                <TableCell align="center" className={classes.headTitle}>Other</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow key={row.name}>
                <TableCell align="center" className={classes.tableRow}>{row.basic}</TableCell>
                <TableCell align="center" className={classes.tableRow}>{row.db}</TableCell>
                <TableCell align="center" className={classes.tableRow}>{row.other}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        <p>and more!</p>
        </Table>
        </div></div>
    );
}
