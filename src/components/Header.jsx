import PropTypes from 'prop-types'
import { FaStickyNote } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header({ title }) {
    return (
        <header>
            <div className="container">
                <Link to="/"><h3><FaStickyNote color='green'/> {title}</h3></Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'MyNotes',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
