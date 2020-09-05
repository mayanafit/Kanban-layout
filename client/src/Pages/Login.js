import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FormTemp from '../Components/Form';

const useStyles = makeStyles({
    leftBackgroud: {
        background: '#8973e9',
    },
    rightBackground: {
       
    },
    buttonColor: {
        fontWeight: 'bold',
        color: 'white',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,0,36,1) 0%, rgba(53,52,108,1) 0%, rgba(58,61,121,1) 0%, rgba(67,63,123,1) 0%, rgba(67,63,123,1) 33%, rgba(180,36,174,1) 88%)'
    },
    wrapper: {
        minHeight: '100vh'
    },
    title: {
        color: 'white',
        marginLeft: '100px',
        marginTop: '30%'
    }
})

const Login = () => {
    const classes = useStyles()
    return (
        <>
            <Grid className={classes.wrapper} container>
                <Grid item className={classes.leftBackgroud} xs={6}>
                    <div className={classes.title}>
                        <Typography style={{marginBottom: '20px'}} variant="h4">Hello World</Typography>
                        <Typography style={{maxWidth: '70%'}} variant="body2" component="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </div>
                </Grid>
                <Grid item className={classes.rightBackground} xs={6}>
                    <FormTemp />
                </Grid>
            </Grid>
        </>
    )
}

export default Login