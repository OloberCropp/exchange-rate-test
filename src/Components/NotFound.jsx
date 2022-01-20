import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1 style={{color: 'red'}}> 404 NOT FOUND</h1>
            <Link to='/' >To the Start Page</Link>
        </div>
    )
}

export default NotFound
