import NotesItem from '../notesItem/NotesItem'
import AddNote from '../addNote/AddNote.jsx'
import classes from './NotesList.module.css'
import { useState } from 'react'


const NotesList = () => {


    // sample data from rest api
    const [notes, setNotes] = useState([
        { id: 1, title: "Hello!", text: "Hello!" },
        { id: 2, title: "My first note", text: "Something" },
        { id: 3, title: "My second note", text: "Something" },
        { id: 4, title: "My third note", text: "Something" },
        { id: 5, title: "My fourth note", text: "Something" }])


    const [newNoteActive, setNewNoteActive] = useState(false)


    const addNewNote = ({title, text}) => {
        setNotes(prev => ([...prev, {id: notes.length + 1, title: title, text: text}]))
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.noteswindow}>
                <h1>Notes</h1>

                {notes.length ? notes.map(note => (
                    <NotesItem key={note.id} note={note} />
                ))

                    : <p>No notes</p>

                }

                { newNoteActive ? (<AddNote setNewNoteActive={setNewNoteActive} addNewNote ={addNewNote}/>) : (<div></div>)}
                


                <div className={classes.btnContainer}>
                    { newNoteActive ? (<div></div>) : (<div className={classes.addbtn} onClick={() => setNewNoteActive(true)}>+</div>)}
                </div>

            </div>
        </div>
    )
}


export default NotesList