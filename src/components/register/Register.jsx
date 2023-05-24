import { useState } from "react"
import classes from './Register.module.css'
import BasePage from "../basePage/BasePage"
import { Link, Navigate } from "react-router-dom"
import { AuthService } from '../../services/auth.service'

const Register = () => {

    const [inputData, setInputData] = useState({login: '', email: '', password: ''})

    const regUser = async (reg_data) => {
        const response = await AuthService.reg(reg_data);
        return response
    }

    const reg = async (e) => {
        e.preventDefault()
        const reg_data = { username: inputData.login, email: inputData.email, password: inputData.password };

        const resp = await regUser(reg_data)
        
        console.log(resp.id)
    }

    return (
       <BasePage>
            <div className={classes.wrapper}>
                <form className={classes.form}>
                    <h1>Registration</h1>
                    <input
                        placeholder='login'
                        value={inputData.login}
                        onChange={(e) => setInputData(prev => ({ ...prev, login: e.target.value }))}
                    />
                    <input
                        placeholder='email'
                        value={inputData.email}
                        onChange={(e) => setInputData(prev => ({ ...prev, email: e.target.value }))}
                    />
                     <input
                        placeholder='password'
                        type='password'
                        value={inputData.password}
                        onChange={(e) => setInputData(prev => ({ ...prev, password: e.target.value }))}
                    />
                    <Link className={classes.linkbtn} onClick={(e) => reg(e)}>Login!</Link>
                </form>
            </div>
        </BasePage>
    )
}

export default Register