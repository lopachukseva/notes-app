import classes from './NoteDetail.module.css'


const NoteDetail = () => {
    return (
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
                    <div className={classes.btn}>Exit</div>
                    <div className={classes.btn}>Confirm</div>
                </div>
                
            </form>
        </div>
    )
}


export default NoteDetail