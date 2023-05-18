import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from 'react-router-dom'


const Logout = () => {
    const {token, setToken } = useContext(AuthContext)

    if (token) {
        setToken(null)
        return <Navigate replace to="/login" />;
    }

    return <Navigate replace to="/login" />;
}

export default Logout