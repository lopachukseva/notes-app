import NotesItem from '../notesItem/NotesItem'
import AddNote from '../addNote/AddNote.jsx'
import classes from './NotesList.module.css'
import { useState, useEffect, useContext } from 'react'
import BasePage from '../basePage/BasePage'
import { NoteService } from '../../services/note.service'
import { AuthContext } from '../../providers/AuthProvider'
import { Navigate } from 'react-router-dom'


const NotesList = () => {

    const {token} = useContext(AuthContext)

    if (!token) {
        return <Navigate replace to="/login" />;
    }

    // sample data from rest api
    // const sample = [
    //     { id: 1, title: "Hello!", text: "Hello!" },
    //     { id: 2, title: "My first note", text: "Something" },
    //     { id: 3, title: "My second note", text: "Something" },
    //     { id: 4, title: "My third note", text: "Something" },
    //     { id: 5, title: "My fourth note", text: "Something" }]
    
    const [notes, setNotes] = useState([])
    const [page, setPage] = useState(0)

    const fetchNotes = async () => {
        const data = await NoteService.getAll(token)
        setNotes(data)
        console.log(data)
    }


    useEffect(() => {
        fetchNotes()
    }, [page])


    const [newNoteActive, setNewNoteActive] = useState(false)

    const addNewNote = async ({ title, text }) => {
        let response = await NoteService.postNote({ title: title, text: text }, token)
        setPage(page+1)
    }

    return (
        <BasePage>
            <div className={classes.wrapper}>
                <div className={classes.noteswindow}>
                    <h1>Notes</h1>

                    {notes.length ? notes.map(note => (
                        <NotesItem key={note.id} note={note} />
                    ))

                        : <h3>No notes</h3>

                    }

                    {newNoteActive ? (<AddNote setNewNoteActive={setNewNoteActive} addNewNote={addNewNote} />) : (<div></div>)}

                    <div className={classes.btnContainer}>
                        {newNoteActive ? (<div></div>) : (<div className={classes.addbtn} onClick={() => setNewNoteActive(true)}>+</div>)}
                    </div>
                </div>
            </div>
        </BasePage>
    )
}


export default NotesList