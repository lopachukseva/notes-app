import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login/Login"
import NotesList from "./notesList/NotesList"
import NoteDetail from "./noteDetail/NoteDetail"
import BasePage from "./basePage/BasePage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/notes" element={<NotesList />} />
                <Route path="/detail" element={<NoteDetail />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router