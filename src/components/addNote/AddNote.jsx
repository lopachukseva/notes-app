import { useState } from 'react'
import classes from './AddNote.module.css'


const AddNote = ({ setNewNoteActive, addNewNote }) => {
    const [newNote, setNewNote] = useState({ title: '', text: '' })

    const createNewNote = (e) => {
        setNewNoteActive(false)
        addNewNote(newNote)
    }

    return (
        <form className={classes.newNoteForm}>
            <input
                className={classes.noteTitle}
                placeholder='note title...'
                type="text"
                value={newNote.title}
                onChange={(e) => setNewNote(prev => ({ ...prev, title: e.target.value }))}
            />
            <textarea
                className={classes.noteText}
                placeholder='type something...'
                type="text"
                value={newNote.text}
                onChange={(e) => setNewNote(prev => ({ ...prev, text: e.target.value }))}
            />
            <div className={classes.addbtn} onClick={(e) => createNewNote(e)}>Add note</div>
        </form>
    )
}


export default AddNote