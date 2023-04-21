import IntfButton from '../ui/IntfButton';
import classes from './NotesItem.module.css'



const NotesItem = ({note}) => {

    const getTitle = (note) => {
        if (note.title.length > 50 ) {
            return note.title.slice(0, 50) + '...';
        } 

        return note.title
    }

    return (
        <div className={classes.wrapper}>
            <p>{getTitle(note)}</p>
            <IntfButton>-</IntfButton>
            
        </div>
    )
}


export default NotesItem