import { useState } from 'react'
import classes from './Login.module.css'
import { Link } from 'react-router-dom'


const Login = () => {
    const [inputData, setInputData] = useState({login: '', password:''})

    const logIn = (e) => {
        e.preventDefault()
        console.log(inputData.login, inputData.password)
    } 

    return (
        <div className={classes.wrapper}>
            <form className={classes.form}>
                <h1>Login</h1>
                <input 
                    placeholder='login' 
                    value={inputData.login} 
                    onChange={(e) => setInputData(prev => ({...prev, login: e.target.value}))}
                />
    
                <input 
                    placeholder='password' 
                    type='password' 
                    value={inputData.password} 
                    onChange={(e) => setInputData(prev => ({...prev, password: e.target.value}))}
                />
                <Link className={classes.linkbtn} onClick={(e) => logIn(e)}>Login!</Link>
            </form>
        </div>
    )
}


export default Login