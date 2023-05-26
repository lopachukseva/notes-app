import axios from "axios"


export const AuthService = {
    async reg(data) {
        const response = await axios.post('http://127.0.0.1:8000/auth/users/', data);
        
        return response.data
    },
    

    async login(data) {
        const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', data)
        

        // return response
        return response.data
        // console.log(response.data.auth_token);
    },
}