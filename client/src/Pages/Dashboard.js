import React from 'react';
import CardTemp from '../Components/Card';
import { Grid, 
    AppBar,
    Toolbar, 
    Typography, 
    Button, List, ListItem, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ExitToApp, Dashboard, Settings } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    sideBar: {
        background: 'white',
        minHeight: '50vh',
    },
    mainMenu: {
        background: '#f2f3f9',
        minHeight: '100vh',
    },
    boxDate: {
        background: 'white',
    },
    boxMain: {
        background: 'white',
        height: '77vh',
        borderRadius: '10px',
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
})

const dummyData = [
    {
        week: 'Week 1',
        date: '1 January - 7 January 2020'
    },
    {
        week: 'Week 2',
        date: '1 January - 7 January 2020'
    },
    {
        week: 'Week 3',
        date: '1 January - 7 January 2020'
    },
    {
        week: 'Week 4',
        date: '1 January - 7 January 2020'
    },
    {
        week: 'Week 5',
        date: '1 January - 7 January 2020'
    },
    {
        week: 'Week 6',
        date: '1 January - 7 January 2020'
    }
]

const DashboardPage = () => {
    const classes = useStyles()
    const history = useHistory()
    const handleLogout = () => {
        localStorage.clear()
        history.push(`/`)
    }
    return (
        <Grid container>
            <Grid className={classes.sideBar} item xs={2}>
                <div>
                    <img style={{display: 'block', margin:'20px auto'}} width="50" src='https://i.ibb.co/HYSRbD3/logo-source.png' alt="logo" />
                </div>
                <List component="nav">
                    <ListItem button style={{background: '#8459ff'}}>
                        <div style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                            <Dashboard style={{marginRight: '5px'}} />
                            <Typography variant="subtitle1">Dashboard</Typography>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div style={{display: 'flex', alignItems: 'center', color: 'grey'}}>
                            <Settings style={{marginRight: '5px'}} />
                            <Typography variant="subtitle1">Setting</Typography>
                        </div>
                    </ListItem>
                </List>
            </Grid>
            <Grid className={classes.mainMenu} direction="column" item container xs={10}>
                <Grid item>
                    <AppBar position="static" style={{background: '#f2f3f9', boxShadow: 'none'}}>
                        <Toolbar>
                            <Typography style={{flex: '1'}} color="textPrimary" variant="h5">Dashboard</Typography>
                            <Button color="inherit" onClick={() => handleLogout()} style={{color: '#8459ff'}}><ExitToApp style={{marginRight: '5px'}}/>Logout</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item container style={{padding: '10px'}}>
                    {
                        dummyData.map((data, index) => (
                            <Grid key={index} item xs={2} className={classes.boxDate} style={{padding: '5px'}}>
                                <a href="/dashboard" style={{textAlign: 'center', textDecoration: 'none', color: 'black'}}>
                                    <Typography variant="subtitle1">{data.week}</Typography>
                                    <Typography variant="body2" style={{fontSize: '10px'}}>{data.date}</Typography>
                                </a>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid item container style={{padding: '10px'}}>
                    <Grid item className={classes.boxMain} xs={1} style={{minWidth: '155px'}}>
                        <List component="nav" style={{marginTop: '30px'}}>
                            <ListItem button style={{background: '#8459ff'}}>
                                <div style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                                    <Typography variant="body2">Lorem</Typography>
                                </div>
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <div style={{display: 'flex', alignItems: 'center', color: 'grey'}}>
                                    <Typography variant="body2">Ipsum</Typography>
                                </div>
                            </ListItem>
                            <ListItem button>
                                <div style={{display: 'flex', alignItems: 'center', color: 'grey'}}>
                                    <Typography variant="body2">Dolor</Typography>
                                </div>
                            </ListItem>
                        </List>  
                    </Grid>
                    <Grid item xs={10} style={{marginLeft:'20px'}} className={classes.boxMain}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{padding: '10px'}}>
                                <Typography variant="h5">This is title</Typography>
                            </div>
                            <div>
                                <Grid container spacing={2} style={{padding: '0 10px'}}>
                                    <Grid item xs={4}>
                                        <div style={{background: '#f2f3f9'}}>
                                            <div>
                                                <Typography variant="subtitle1" style={{fontWeight: 'bold', padding: '5px 10px'}}>Section 1</Typography>
                                            </div>
                                            <div style={{maxHeight: '50vh', overflow: 'auto'}}>
                                                <CardTemp />
                                                <CardTemp />
                                                <CardTemp />
                                            </div>
                                            <div style={{padding: '10px'}}>
                                                <Button fullWidth variant="outlined">Add New Task</Button>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{background: '#f2f3f9'}}>
                                            <div>
                                                <Typography variant="subtitle1" style={{fontWeight: 'bold', padding: '5px 10px'}}>Section 2</Typography>
                                            </div>
                                            <div style={{maxHeight: '50vh', overflow: 'auto'}}>
                                                <CardTemp />
                                            </div>
                                            <div style={{padding: '10px'}}>
                                                <Button fullWidth variant="outlined">Add New Task</Button>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{background: '#f2f3f9'}}>
                                            <div>
                                                <Typography variant="subtitle1" style={{fontWeight: 'bold', padding: '5px 10px'}}>Section 3</Typography>
                                            </div>
                                            <div style={{maxHeight: '50vh', overflow: 'auto'}}>
                                                <CardTemp />
                                                <CardTemp />
                                            </div>
                                            <div style={{padding: '10px'}}>
                                                <Button fullWidth variant="outlined">Add New Task</Button>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DashboardPage
