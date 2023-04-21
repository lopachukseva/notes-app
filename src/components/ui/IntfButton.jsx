import classes from './IntfButton.module.css'


const IntfButton = ({children}) => {

    const deteleItem = (e) => {
        e.stopPropagation()
    }


    return (
        <div className={classes.btn}  onClick={(e) => deteleItem(e)}>{children}</div>
    )
}

export default IntfButton