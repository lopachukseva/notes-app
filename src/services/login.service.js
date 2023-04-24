import axios from "axios"

export const NoteService = {

    async getAll() {
        const response = await axios.get('')

        return response.data
    },


    async getByID(id) {
        const response = await axios.get(`${id}`)

        return response.data
    }
}