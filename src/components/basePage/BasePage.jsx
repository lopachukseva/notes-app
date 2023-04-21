import { Link } from 'react-router-dom'
import classes from './BasePage.module.css'


const BasePage = ({ children }) => {
    return (
        <div className={classes.wrapper}>
            <header>
                <ul className={classes.headerList}>
                    <li><Link to={'/notes'} className={`${classes.headerLink} ${classes.orange}`}>Notes App</Link></li>
                    <li><Link to={'/login'} className={classes.headerLink}>Login</Link></li>
                </ul>
            </header>
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </div>
    )
}


export default BasePage