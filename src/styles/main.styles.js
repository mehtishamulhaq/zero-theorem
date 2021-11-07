
import { makeStyles } from '@mui/styles';
import circleBack from './../assets/mainPage/circleBack.png';
import circleBackTop from './../assets/mainPage/circleBackTop.png';
import pageBackground from './../assets/mainPage/bg.jpg';
import colors from './../constants/colors'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#16161d',
        borderRadius: 4,
        width: '50%',
        height: 'auto',
        margin: 'auto',
        backgroundImage: `url(${pageBackground})`
    },
    spacingBottom40: {
        marginBottom: '40px'
    },
    spacingTop40: {
        marginTop: '40px'
    },
    spacingBottom20: {
        marginBottom: '20px'
    },
    spacingTop20: {
        marginTop: '20px'
    },
    gridPaddingLeft40: {
        paddingLeft: 40
    },
    gridPaddingRight40: {
        paddingRight: 40
    },
    headingWhite: {
        color: colors.textDefault,
        alignItems: 'center'
    },
    textWhite: {
        color: colors.textDefault,
        fontSize: 12,
    },
    button: {
        width: 150,
    },
    firstRow: {
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${circleBackTop})`,
        backgroundSize: 'cover'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    amountContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountText: {
        display: 'flex',
        flexDirection: 'row',
    },
    amountChangeIcons: {
        display: 'flex',
        flexDirection: 'column',
    },
    amountDescription: {
        color: colors.textDefault,
        fontSize: 10,
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
        height: '650px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${circleBack})`,
        backgroundSize: 'cover'
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

export default useStyles;