import React, { useState } from 'react';
import { Typography, TextField, Checkbox, FormControlLabel, Button, InputAdornment } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/styles';
import { Person, Lock } from '@material-ui/icons';
import { Link, useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    buttonColor: {
        fontWeight: 'bold',
        marginBottom: '20px',
        color: 'white',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,0,36,1) 0%, rgba(53,52,108,1) 0%, rgba(58,61,121,1) 0%, rgba(67,63,123,1) 0%, rgba(67,63,123,1) 33%, rgba(180,36,174,1) 88%)'
    },
})

const FormTemp = () => {
    const {pathname} = useLocation()
    const history = useHistory()
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVal, setPasswordVal] = useState('')
    const [alert, setAlert] = useState(false)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    
    const handleRegister = () => {
        if (!email || !password || !passwordVal) {
            setMessage('All field must be filled!')
            setAlert(true)
        } else {
            if (password === passwordVal) {
                setSuccess(true)
                localStorage.setItem(`email`, email)
                setTimeout(() => {
                    history.push(`/dashboard`)
                    setSuccess(false)
                }, 1000)
            } else {
                setMessage(`Confirmation password doesn't match your password!`)
                setAlert(true)
            }
        }
    }

    const handleLogin = () => {
        if (!email || !password) {
            setMessage('All field must be filled!')
            setAlert(true)
        } else {
            localStorage.setItem(`email`, email)
            history.push(`/dashboard`)
        }
    }
    return (
        <div>
            <div style={{maxWidth: '250px', textAlign: 'center', display: 'block', margin: '0px auto', marginTop: pathname === '/register' ? '30px' : '20%'}}>
                <Typography variant="h4" style={{marginBottom: '20px',color: '#8459ff'}}>Welcome</Typography>
                <Typography variant="body1">{
                    pathname === '/register' ? 'Silahkan buat akun untuk melanjutkan' : 'Silahkan masuk dengan akun Anda untuk melanjutkan'
                }</Typography>
            </div>
            <div style={{maxWidth: '70%', display: 'block', margin: '40px auto'}}>
                {
                    alert && <Alert style={{marginBottom: '20px'}} severity="error" onClose={() => setAlert(false)}>{message}</Alert>
                }
                {
                    success && <Alert style={{marginBottom: '20px'}} severity="success">You've successfully registered. We'll direct your dashboard.</Alert>
                }
                <form>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <Person style={{color: 'grey'}}/>
                                </InputAdornment>
                            ),
                        }} label="Email" variant="outlined"  size="small" style={{marginBottom: '30px'}}></TextField>
                        <TextField 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <Lock style={{color: 'grey'}}/>
                                </InputAdornment>
                            ),
                            }} style={{marginBottom: '20px'}} size="small" label="Password" type="password" variant="outlined"></TextField>
                        {
                            pathname === '/register' && <TextField value={passwordVal}
                            onChange={(e) => setPasswordVal(e.target.value)}
                            type="password" style={{marginBottom: '20px'}} size="small" label="Ulangi Password" variant="outlined"></TextField>
                        }
                        <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', padding: '0px 15px', alignItems: 'center'}}>
                            { pathname === '/' && <FormControlLabel control={<Checkbox name="checkedC" />} style={{color: 'grey'}} label="Ingat saya" /> }
                            {
                                pathname === '/' && <Link to="/register"><Typography>Daftar?</Typography></Link>
                            }
                                                         
                        </div>
                    </div>
                        <Button onClick={() => pathname === '/register' ? handleRegister() : handleLogin()} 
                        className={classes.buttonColor} fullWidth>{ pathname === '/register' ? 'Daftar' : 'Masuk'}</Button>
                        {
                            pathname === '/register' && (
                                <div style={{color: 'grey', textAlign: 'center'}}>
                                    <span>Sudah punya akun? <Link to="/">Masuk saja.</Link></span>
                                </div>   
                            )
                        }
                </form>
            </div>
        </div> 
    )
}

export default FormTemp