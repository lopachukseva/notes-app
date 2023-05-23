import axios from "axios"

export const NoteService = {

    async getAll(token) {
        const response = await axios.get('http://127.0.0.1:8000/api/notes/', {headers: {
            Authorization: `Token ${token}`
            }})

        return response.data
    },


    async getByID(id, token) {
        const response = await axios.get(`http://127.0.0.1:8000/api/notes/${id}`, {headers: {
            Authorization: `Token ${token}`
            }})

        return response.data
    },

    async postNote(data, token) {
        const response = await axios.post('http://127.0.0.1:8000/api/notes/', data, {headers: {
            Authorization: `Token ${token}`
            }})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        return response
    },


    async putNote(id, data, token) {
        const response = await axios.patch(`http://127.0.0.1:8000/api/notes/${id}`, data, {headers: {
            Authorization: `Token ${token}`
            }});

        return response.data
    },
    

    async deleteNote(id, token) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/notes/${id}`, {headers: {
            Authorization: `Token ${token}`
            }})
        .then(function (response) {
            console.log(response);
        });

        return response
    },


    async login(data) {
        const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', data)
        

        // return response
        return response.data
        // console.log(response.data.auth_token);
    },



}