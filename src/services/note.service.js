import axios from "axios"

export const NoteService = {

    async getAll() {
        const response = await axios.get('http://127.0.0.1:8000/api/notes/')

        return response.data
    },


    async getByID(id) {
        const response = await axios.get(`http://127.0.0.1:8000/api/notes/${id}`)

        return response.data
    },

    async postNote(data) {
        axios.post('http://127.0.0.1:8000/api/notes/', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}