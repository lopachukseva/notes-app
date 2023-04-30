import { useContext, useState } from 'react'
import classes from './Login.module.css'
import { Link } from 'react-router-dom'
import BasePage from '../basePage/BasePage'
import { NoteService } from '../../services/note.service'
import { AuthContext } from '../../providers/AuthProvider'


const Login = () => {
    
    const [inputData, setInputData] = useState({ login: '', password: '' })
    const [loginErr, setLoginErr] = useState('')

    const {user, setUser, token, setToken} = useContext(AuthContext)



    const getToken = async (login_data) => {
        const response = await NoteService.login(login_data);
        return response.auth_token
        
    }

    const logIn = async (e) => {
        e.preventDefault()
        const login_data = {username: inputData.login, password: inputData.password};
        
        const auth_token = await getToken(login_data)
        console.log(auth_token)
    
        setToken(auth_token)
    }

    return (
        <BasePage>
            <div className={classes.wrapper}>
                <form className={classes.form}>
                    <h1>Login</h1>
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
                    <Link className={classes.linkbtn} onClick={(e) => logIn(e)}>Login!</Link>
                </form>
            </div>
        </BasePage>
    )
}


export default Login