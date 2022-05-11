import Students from '../components/student-table'
// import Count from '../components/Count'
import Test from '../components/Test'
import React from 'react';
import useStyles from '../style'

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Students></Students>
            <Test></Test>
            <p className={classes.textRed}>Test use style</p>
        </React.Fragment>
    )
}
export default Home