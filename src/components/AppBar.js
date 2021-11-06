import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@mui/styles';
import { appBarTypes } from '../constants/commonConstants';


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
        fontSize: 12
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
                        <img src={logo} width={140} alt='logo' />
                    </Box >
                ) : null}

                <Box className={classes.optionsContainer}>
                    {options.map((item, index) => {
                        if (item.type === appBarTypes.LABEL) {
                            return (
                                <Typography
                                    className={classes.menuItem}
                                    component='body2'
                                    {...item.props}>
                                    {item.label}
                                </Typography>
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
