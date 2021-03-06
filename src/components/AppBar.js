import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import { appBarTypes } from '../constants/commonConstants';
import fonts from '../constants/fonts';


const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    toolBar: {
        display: 'flex',
    },
    logoContainer: {
        flex: 2,
        cursor: 'pointer'
    },
    optionsContainer: {
        flex: 3,
        display: 'flex',
        justifyContent: 'space-around'
    },
    menuItem: {
        color: 'white',
        fontSize: 12,
        cursor: 'pointer',
        fontFamily: fonts.ralewayRegular
    }
});

export default function AppToolBar(props) {
    const classes = useStyles();
    const { options, logo } = props;
    return (
        <AppBar
            className={classes.root}
            position='static'
        >
            <Toolbar className={classes.toolBar}>
                {logo ? (
                    <Box className={classes.logoContainer}>
                        <Link href="#" underline="none">
                            <img src={logo} width={140} alt='logo' />
                        </Link>
                    </Box >
                ) : null}

                <Box className={classes.optionsContainer}>
                    {options.map((item, index) => {
                        if (item.type === appBarTypes.LABEL) {
                            return (
                                <Link href="#" underline="hover">
                                    <Typography
                                        className={classes.menuItem}
                                        component='body2'
                                        {...item.props}>
                                        {item.label}
                                    </Typography>
                                </Link>
                            )
                        } else if (item.type === appBarTypes.ICON) {
                            <item.icon
                                {...item.props}
                            />
                        }
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
