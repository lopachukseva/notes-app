import { useContext, useState, useNavigate } from 'react'
import classes from './Login.module.css'
import { Link, Navigate } from 'react-router-dom'
import BasePage from '../basePage/BasePage'
import { AuthService } from '../../services/auth.service'
import { AuthContext } from '../../providers/AuthProvider'


const Login = () => {
    const [inputData, setInputData] = useState({ login: '', password: '' })
    const [loginErr, setLoginErr] = useState('')

    const { user, setUser, token, setToken } = useContext(AuthContext)

    if (token) {
        return <Navigate replace to="/notes" />;
    }

    const getToken = async (login_data) => {
        const response = await AuthService.login(login_data);
        return response.auth_token

    }

    const logIn = async (e) => {
        e.preventDefault()

        try {
            const login_data = { username: inputData.login, password: inputData.password };
            const auth_token = await getToken(login_data)
            setToken(auth_token)
        } catch (err) {
            if (!err?.response) {
              setLoginErr("No server response");
            } else if (err.response?.status === 400) {
              setLoginErr("Wrong username or password");
            } else if (err.response?.status === 401) {
              setLoginErr("Unauthorized");
            } else {
              setLoginErr("Login failed");
            }
          }
    }

    return (
        <BasePage>
            <div className={classes.wrapper}>
                <form className={classes.form}>
                    <h1>Login</h1>
                    <p className={classes.errors}>{loginErr}</p>
                    <input
                        placeholder='login'
                        value={inputData.login}
                        onChange={(e) => setInputData(prev => ({ ...prev, login: e.target.value }))}
                    />
                    <input
                        placeholder='password'
                        type='password'
                        value={inputData.password}
                        onChange={(e) => setInputData(prev => ({ ...prev, password: e.target.value }))}
                    />
                    <Link className={classes.linkbtn} onClick={(e) => logIn(e)}>Login</Link>
                </form>
            </div>
        </BasePage>
    )
}


export default Login