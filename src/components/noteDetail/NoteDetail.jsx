import classes from './NoteDetail.module.css'
import BasePage from '../basePage/BasePage'
import { useNavigate, useParams } from 'react-router-dom'
import { NoteService } from '../../services/note.service'
import { useState, useEffect } from 'react'


const NoteDetail = () => {

    const nav = useNavigate()


    const {id} = useParams()
    const [note, setNote] = useState({})

    useEffect(() => {
        if (!id) return
    
            const fetchData = async () => {
                const data = await NoteService.getByID(id)
    
                setNote(data)
            }
    
            fetchData()
        }, [id])

    
    const putNote = () => {
        const new_title = note.title
        const new_text = note.text
        console.log(new_text)
        const response = NoteService.putNote(note.id, {title: new_title, text: new_text}).then(() => nav('/notes'))
        console.log(response)

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
                        <div className={classes.btn} onClick={putNote}>Confirm</div>
                    </div>

                </form>
            </div>
        </BasePage>
    )
}


export default NoteDetail