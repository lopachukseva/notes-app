import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login/Login"
import NotesList from "./notesList/NotesList"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/notes" element={<NotesList />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router