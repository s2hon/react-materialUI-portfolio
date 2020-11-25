import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        color: "#BF0404",
    },
    subtitle: {
        color: "#BF545D",
        textTransform: "uppercase",
    },
    typedContainer: {
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
        <Typography className={classes.title} variant="h4">
            <Typed strings={["Staci Shon"]} typeSpeed={40} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
            <Typed
            strings={[
                "Frontend Developer",
                "Backend Developer",
                "Web App Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            />
        </Typography>
        </Box>
    );
};

export default Header;