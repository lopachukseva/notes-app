import classes from './NotesItem.module.css'


const NotesItem = ({note}) => {
    return (
        <div className={classes.wrapper}>
            <p>{note.title.slice(0, 50)}</p>
        </div>
    )
}


export default NotesItem