import classes from './NoteDetail.module.css'
import BasePage from '../basePage/BasePage'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { NoteService } from '../../services/note.service'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'


const NoteDetail = () => {

    const {token} = useContext(AuthContext)

    if (!token) {
        return <Navigate replace to="/login" />;
    }

    const nav = useNavigate()


    const {id} = useParams()
    const [note, setNote] = useState({})

    useEffect(() => {
        if (!id) return
    
            const fetchData = async () => {
                const data = await NoteService.getByID(id, token)
    
                setNote(data)
            }
    
            fetchData()
        }, [id])

    
    const putNote = () => {
        const new_title = note.title
        const new_text = note.text
        console.log(new_text)
        const response = NoteService.putNote(note.id, {title: new_title, text: new_text}, token).then(() => nav('/notes'))
        console.log(response)

    }


    const deleteNote = () => {
        NoteService.deleteNote(note.id, token).then(() => nav('/notes'))
    }
    

    return (
        <BasePage>
            <div className={classes.wrapper}>
                <form className={classes.noteForm}>
                    <h1>Editing</h1>
                    <input value={note.title || ''} onChange={(e) => setNote(prev => ({ ...prev, title: e.target.value }))}
                        className={classes.noteTitle}

                    />
                    <textarea value={note.text} onChange={(e) => setNote(prev => ({ ...prev, text: e.target.value }))}
                        className={classes.noteText}
                    />
                    <div className={classes.btnContainer}>
                        <div className={classes.btn} onClick={() => nav('/notes')}>Exit</div>
                        <div className={classes.btn} onClick={deleteNote}>Delete</div>
                        <div className={classes.btn} onClick={putNote}>Confirm</div>
                    </div>

                </form>
            </div>
        </BasePage>
    )
}


export default NoteDetail