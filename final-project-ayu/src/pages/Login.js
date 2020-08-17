import React, { useContext, useState } from "react"
import {UserContext} from "../context/UserContext"
import './Login.css'
import Icon from '@material-ui/core/Icon';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login = () =>{
  const [, setUser] = useContext(UserContext)
  const [input, setInput] = useState({username: "" , password: ""})

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (input.username === "admin" && input.password === "admin"){
      setUser({username: input.username})
      localStorage.setItem("user", JSON.stringify({username: "admin", password: "admin"}))
    }else{
      alert("username dan password gagal")
    }
  }

  const handleChange = (event) =>{
    let value = event.target.value
    let name = event.target.name
    switch (name){
      case "username":{
        setInput({...input, username: value})
        break;
      }
      case "password":{
        setInput({...input, password: value})
        break;
      }
      default:{break;}
    }
  }

  return(
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <Avatar style={{margin: '10px auto', padding:'5px'}}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <CssBaseline />
          <Typography component="h1" variant="h5">
          Sign in
          </Typography>

          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            type="text"
            onChange={handleChange} 
            value={input.username}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange} 
            value={input.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  )
}

export default Login