import { useNavigate } from 'react-router-dom';
import IntfButton from '../ui/IntfButton';
import classes from './NotesItem.module.css'



const NotesItem = ({note}) => {

    const getTitle = (note) => {
        if (note.title.length > 50 ) {
            return note.title.slice(0, 50) + '...';
        } 

        return note.title
    }


    const nav = useNavigate()


    const openDetail = () => {
        console.log('Open detail')
        nav(`/note/${note.id}`)
    }

    return (
        <div className={classes.wrapper} onClick={openDetail}>
            <p>{getTitle(note)}</p>
            <IntfButton onClick={(e) => console.log(e)}>-</IntfButton>
            
        </div>
    )
}


export default NotesItem