import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import AppBar from '../components/AppBar';
import logo from './../assets/logo/zerOtheorem_logo.png';
import AppBarOptions from './../config/AppBar.config'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import clsx from 'clsx';

import threeDModlingImage from './../assets/mainPage/3d-modeling.svg';
import orbitImage from './../assets/mainPage/orbit.svg';
import replaceImage from './../assets/mainPage/replace.svg';
import graphImage from './../assets/mainPage/incentives-banner.png';
import humanImage from './../assets/mainPage/incentives-banner-2.png'
import colors from './../constants/colors'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#16161d',
        // backgroundColor: '#ffffff',
        border: '1px solid gray',
        borderRadius: 4,
        width: '50%',
        height: 'auto',
        margin: 'auto',
    },
    spacingBottom: {
        marginBottom: '40px'
    },
    spacingTop: {
        marginTop: '40px'
    },
    headingWhite: {
        color: colors.textDefault,
        alignItems: 'center'
    },
    textWhite: {
        color: colors.textDefault,
        fontSize: 12,
        marginTop: 10,
    },
    button: {
        width: 150,
    },
    firstRow: {
        height: '300px',
        display: 'flex',
        alignItems: 'center'
    },
    forecastButton: {
        width: 150,

    },
    performanceButton: {
        width: 150,
        marginLeft: '30px',
    },
    checkButton: {
        width: 150,
    },
    generationButton: {
        width: 150,
    },
    philosophyContainer: {
        height: '300px',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    philosophyHeading: {

    },
    philosophyDescription: {
        color: colors.textDefault,
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: 10,
    },
    stepsCards: {
        height: '200px',
        flex: 1,
        flexDirection: 'column'
    },
    stepCardLabel: {
        color: colors.textDefault,
        marginTop: '10px',
        fontSize: 12,
    },
    stepCardDescription: {
        color: colors.textDefault,
        marginTop: '10px',
        marginRight: '50px',
        fontSize: 10,
    },
    graphRow: {
        height: '400px',
        display: 'flex',
        alignItems: 'center'
    },
    graphContainer: {
        padding: '20px',
    },
    inCentiveContainer: {
        display: 'flex',
        flexDirection: 'column',

    },
    incentiveHeading: {
    },
    incentiveDescription: {
        color: colors.textDefault,
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: 10,
    },
    alignRightForColumn: {
        alignItems: 'flex-end'
    },
    lastRow: {
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lastRowContainer: {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    copyRightContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    copyRightDescription: {
        color: colors.textDefault,
        fontSize: 10,
    },
});

export default function Main() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={12} className={classes.spacingBottom}>
                        <AppBar
                            logo={logo}
                            options={AppBarOptions}
                        />
                    </Grid>
                    <Grid item xs={12} container className={clsx(classes.spacingBottom)}>
                        <Grid item xs={12} container className={clsx(classes.firstRow)}>
                            <Grid item xs={12} md={7}>
                                <Typography
                                    variant='h4'
                                    className={classes.headingWhite}
                                >
                                    The Convergence of AI,
                                    Quantitative Finance,
                                    and Social Impact
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography
                                    variant='h4'
                                    className={classes.headingWhite}
                                >
                                    $ 1.000
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Typography
                                    variant='body2'
                                    className={classes.textWhite}
                                >
                                    using bitcoin to empower GENERATION-0!
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={7}
                                className={clsx(classes.spacingTop)}
                            >
                                <Button
                                    variant="contained"
                                    className={classes.forecastButton}
                                >
                                    Forcast
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    className={classes.performanceButton}
                                >
                                    Performance
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={7}
                            className={clsx(classes.spacingTop)}
                        >
                            <Box className={classes.philosophyContainer}>
                                <Typography
                                    variant='h4'
                                    className={clsx(classes.incentiveDescription)}
                                >
                                    <pre> P A Y   I T   F O R W A R D   L E A R N   M O R E</pre>
                                </Typography>
                                <Typography
                                    variant='h4'
                                    className={clsx(classes.headingWhite)}
                                >
                                    Our Philosophy
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item container xs={12} >
                            <Grid item xs={12} md={4} >
                                <Box className={classes.stepsCards}>
                                    <img src={threeDModlingImage} alt='logo' width={40} />
                                    <Typography className={classes.stepCardLabel}>
                                        1. Zero Dependancy
                                    </Typography>
                                    <Typography className={classes.stepCardDescription}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <Box className={classes.stepsCards}>
                                    <img src={orbitImage} alt='logo' width={40} />
                                    <Typography className={classes.stepCardLabel}>
                                        1. Zero Entropy
                                    </Typography>
                                    <Typography className={classes.stepCardDescription}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <Box className={classes.stepsCards}>
                                    <img src={replaceImage} alt='logo' width={40} />
                                    <Typography className={classes.stepCardLabel}>
                                        1. Zero Recognition
                                    </Typography>
                                    <Typography className={classes.stepCardDescription}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} className={classes.graphRow} >
                            <Grid item xs={12} md={6}
                                className={classes.graphContainer} >
                                <img src={graphImage} alt='graph' width='100%' />
                            </Grid>
                            <Grid item container xs={12} md={6}
                                className={classes.incentive} >
                                <Grid item xs={12} md={8}>
                                    <Box className={classes.inCentiveContainer}>
                                        <Typography
                                            variant='h4'
                                            className={clsx(classes.headingWhite)}
                                        >
                                            Explore Our Research,
                                            Market Metrices
                                            And Forecast
                                        </Typography>
                                        <Typography
                                            variant='h4'
                                            className={clsx(classes.incentiveDescription)}
                                        >
                                            who is behind Zero Theorem Quant Lab?
                                        </Typography>
                                        <Button
                                            variant='outlined'
                                            color='primary'
                                            className={classes.checkButton}
                                        >
                                            Check
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src={humanImage} alt='human image' width='200' style={{ zIndex: 1000 }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} className={classes.graphRow}>
                            <Grid item container xs={12} md={6}
                                className={classes.incentive} >
                                <Grid item xs={12} md={4}>
                                    <img src={humanImage} alt='human image' width='200' />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Box className={clsx(classes.inCentiveContainer, classes.alignRightForColumn)}>
                                        <Typography
                                            variant='h4'
                                            className={clsx(classes.headingWhite)}
                                            style={{ width: 'min-content' }}
                                        >
                                            Interogate Our
                                            Fund Performance,
                                            Backtest and
                                            Optimizations
                                        </Typography>
                                        <Typography
                                            variant='h4'
                                            className={clsx(classes.incentiveDescription)}
                                        >
                                            who is behind Zero Theorem Quant Lab?
                                        </Typography>
                                        <Button
                                            variant='outlined'
                                            color='primary'
                                            className={classes.checkButton}
                                        >
                                            Check
                                        </Button>
                                        <Box className>

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}
                                className={classes.graphContainer} >
                                <img src={graphImage} alt='graph' width='100%' />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.lastRow}>
                            <Box className={classes.lastRowContainer}>
                                <Typography
                                    variant='h4'
                                    className={clsx(classes.incentiveDescription)}
                                >
                                    <pre> Q U A N T   L A B </pre>
                                </Typography>
                                <Typography
                                    variant='h4'
                                    className={clsx(classes.headingWhite)}
                                >
                                    How for Down
                                    the rabbit hole are
                                    you willing to go?
                                </Typography>

                                <Button
                                    variant='contained'
                                    color='primary'
                                    className={clsx(classes.generationButton, classes.spacingTop)}
                                >
                                    Generation - 0
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={clsx(classes.spacingTop)}>
                            <AppBar
                                logo={logo}
                                options={AppBarOptions}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.copyRightContainer}>
                            <Typography
                                variant='h4'
                                className={clsx(classes.copyRightDescription)}
                            >
                                copyright &copy; 2020 Zero Theorem All rights reserved Made by Presto
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
