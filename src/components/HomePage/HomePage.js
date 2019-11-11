import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        background: 'linear-gradient(315deg, #36096d 0%, #37d5d6 74%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 300,
        padding: '0 30px',
    },
    title: {
        fontSize: 28,
    }
});

function MainCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>
                    Welcome to NumScore!
                </Typography>
            </CardContent>
        </Card>
    );
}

class HomePage extends Component{
    render () {
        return (
            <div>
                <MainCard />
            </div>
        )  
    }
}

export default HomePage;