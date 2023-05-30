import { useState } from "react"
import classes from './Register.module.css'
import BasePage from "../basePage/BasePage"
import { Link, Navigate } from "react-router-dom"
import { AuthService } from '../../services/auth.service'

const Register = () => {

    const [inputData, setInputData] = useState({ login: '', email: '', password: '' })
    const [user, setUser] = useState('')
    const [regErr, setRegErr] = useState('')

    if (user) {
        return <Navigate replace to="/login" />;
    }

    const regUser = async (reg_data) => {
        const response = await AuthService.reg(reg_data);
        return response.id
    }

    const reg = async (e) => {
        e.preventDefault()

        try {
            const reg_data = { username: inputData.login, email: inputData.email, password: inputData.password };
            const response_id = await regUser(reg_data)
            setUser(response_id)
        } catch (err) {
            if (!err?.response) {
                setRegErr("No server response");
            } else if (err.response?.status === 409) {
                setRegErr("Username taken");
            } else {
                setRegErr("Registration failed");
            }
        }
    }

    return (
        <BasePage>
            <div className={classes.wrapper}>
                <form className={classes.form}>
                    <h1>Create account</h1>
                    <p className={classes.errors}>{regErr}</p>
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
                    <Link className={classes.linkbtn} onClick={(e) => reg(e)}>Create account</Link>
                </form>
            </div>
        </BasePage>
    )
}

export default Register