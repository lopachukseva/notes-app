import classes from './NoteDetail.module.css'
import BasePage from '../basePage/BasePage'
import { useNavigate } from 'react-router-dom'


const NoteDetail = () => {

    const nav = useNavigate()

    return (
        <BasePage>
            <div className={classes.wrapper}>
                <form className={classes.noteForm}>
                    <h1>Editing</h1>
                    <input
                        className={classes.noteTitle}

                    />
                    <textarea
                        className={classes.noteText}
                    />
                    <div className={classes.btnContainer}>
                        <div className={classes.btn} onClick={() => nav('/notes')}>Exit</div>
                        <div className={classes.btn}>Confirm</div>
                    </div>

                </form>
            </div>
        </BasePage>
    )
}


export default NoteDetail