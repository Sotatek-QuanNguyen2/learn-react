import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => {
    return {
        textRed: {
            "@media (min-width: 600px) and (max-width: 1024px)": {
                color: 'green'
            },
            "@media (min-width: 1025px) and (max-width: 1439px)": {
                color: 'yellow'
            },
            "@media (min-width: 1440px)": {
                color: 'black'
            },
        },
    }
});
export default useStyles;

