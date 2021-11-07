import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Grid from './../components/common/Grid';

import AppBar from '../components/AppBar';
import logo from './../assets/logo/zerOtheorem_logo.png';
import AppBarOptions from './../config/AppBar.config'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import clsx from 'clsx';

import threeDModlingImage from './../assets/mainPage/3d-modeling.svg';
import orbitImage from './../assets/mainPage/orbit.svg';
import replaceImage from './../assets/mainPage/replace.svg';
import graphImage from './../assets/mainPage/incentives-banner.png';
import humanImage from './../assets/mainPage/incentives-banner-2.png';

import pageBackground from './../assets/mainPage/bg.jpg';
import colors from './../constants/colors'
import useStyles from '../styles/main.styles';


export default function Main() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {/* <Container maxWidth="md"> */}
            <Grid container >
                <Grid item xs={12}
                    className={classes.spacingBottom40, classes.gridPaddingLeft40}>
                    <AppBar
                        logo={logo}
                        options={AppBarOptions}
                    />
                </Grid>
                <Grid item xs={12} container className={clsx(classes.spacingBottom40)}>
                    <Grid item xs={12} container
                        className={clsx(classes.firstRow, classes.gridPaddingLeft40, classes.gridPaddingRight40)}>
                        <Grid item xs={12} md={6} className={clsx(classes.column)}>
                            <Typography
                                variant='h4'
                                className={classes.headingWhite}
                            >

                                The Convergence of AI,
                                Quantitative Finance,
                                and Social Impact

                            </Typography>
                            <Typography
                                variant='body2'
                                className={clsx(classes.textWhite, classes.spacingTop20)}
                            >
                                using bitcoin to empower GENERATION-0!
                            </Typography>
                            <Grid item xs={12} md={12}
                                className={clsx(classes.spacingTop40)}
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
                        <Grid item xs={12} md={6} className={classes.amountContainer}>
                            <Box className={clsx(classes.amountText, classes.spacingBottom20)}>
                                <Typography
                                    variant='h4'
                                    component='span'
                                    className={classes.headingWhite}
                                    style={{ marginRight: 10 }}
                                >
                                    $ 1.000
                                </Typography>
                                <Box className={classes.amountChangeIcons}>
                                    <ArrowDropUpOutlinedIcon style={{ color: 'green' }} />
                                    <ArrowDropDownOutlinedIcon style={{ color: 'red' }} />
                                </Box>
                            </Box>
                            <Typography
                                variant='h4'
                                className={clsx(classes.amountDescription)}
                            >
                                <pre>Z E R O   T H E O R E M   F O R C A S T</pre>
                            </Typography>
                            <Typography
                                variant='h4'
                                className={clsx(classes.amountDescription)}
                            >
                                <pre>F O R   0 8 / 2 5 / 2 0 2 0</pre>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={7}
                        className={clsx(classes.gridPaddingLeft40)}
                    >
                        <Box className={classes.philosophyContainer}>
                            <Typography
                                variant='h4'
                                className={clsx(classes.incentiveDescription)}
                            >
                                <pre>P A Y   I T   F O R W A R D   L E A R N   M O R E</pre>
                            </Typography>
                            <Typography
                                variant='h4'
                                className={clsx(classes.headingWhite)}
                            >
                                Our Philosophy
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item container xs={12} className={classes.gridPaddingLeft40}>
                        <Grid item xs={12} md={4} >
                            <Box className={classes.stepsCards}>
                                <img src={threeDModlingImage} alt='logo' width={40} />
                                <Typography className={classes.stepCardLabel}>
                                    1. Zero Dependancy
                                </Typography>
                                <Typography className={classes.stepCardDescription}>
                                    ..."game theoretical principles that suggest BTC
                                    dominance to absorb value from weaker
                                    substitutes"
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
                                    ..."trending Strategy focused on risk minimization
                                    by targeting temporary price dislocation and
                                    extracting market inefficiencies"
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
                                    ..."trusting statistical methods and allowing
                                    autonomous trade execution without any
                                    human interference or intervention"
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}
                        className={clsx(classes.graphRow, classes.gridPaddingLeft40, classes.gridPaddingRight40)} >
                        <Grid item xs={12} md={6}
                            className={classes.graphContainer} >
                            <img src={graphImage} alt='graph' width='100%' />
                        </Grid>
                        <Grid item container xs={12} md={6}
                            className={classes.incentive} >
                            <Grid item xs={12} md={7}>
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
                            <Grid item xs={12} md={5}>
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
                                <pre>Q U A N T   L A B</pre>
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
                                className={clsx(classes.generationButton, classes.spacingTop40)}
                            >
                                Generation - 0
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.gridPaddingLeft40)}>
                        <AppBar
                            logo={logo}
                            options={AppBarOptions}
                        />
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.copyRightContainer, classes.gridPaddingRight40)}>
                        <Typography
                            variant='h4'
                            className={clsx(classes.copyRightDescription)}
                        >
                            copyright &copy; 2020 Zero Theorem All rights reserved Made by Presto
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* </Container> */}
        </Box>
    )
}
