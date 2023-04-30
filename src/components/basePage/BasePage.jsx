import { Link } from 'react-router-dom'
import classes from './BasePage.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'


const BasePage = ({ children }) => {

    const {token} = useContext(AuthContext);

    return (
        <div className={classes.wrapper}>
            <header>
                <ul className={classes.headerList}>
                    <li><Link to={'/notes'} className={`${classes.headerLink} ${classes.orange}`}>Notes App</Link></li>
                    {token ? <li><Link to={'/logout'} className={classes.headerLink}>Logout</Link></li>
                    : <li><Link to={'/login'} className={classes.headerLink}>Login</Link></li>
                    }
                    
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