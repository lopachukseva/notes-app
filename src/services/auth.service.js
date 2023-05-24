import axios from "axios"


export const AuthService = {
    async reg(data) {
        const response = await axios.post('http://127.0.0.1:8000/auth/users/', data);
        
        return response.data
    },
}