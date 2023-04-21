import classes from './IntfButton.module.css'


const IntfButton = ({children}) => {
    return (
        <div className={classes.btn}>{children}</div>
    )
}

export default IntfButton