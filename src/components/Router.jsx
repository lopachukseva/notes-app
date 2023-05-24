import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Logout from "./Logout"
import NotesList from "./notesList/NotesList"
import NoteDetail from "./noteDetail/NoteDetail"
import Register from "./register/Register"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/notes" element={<NotesList />} />
                <Route path="/note/:id" element={<NoteDetail />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router