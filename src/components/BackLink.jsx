import { FaChevronLeft } from 'react-icons/fa'
import {Link} from 'react-router-dom'
function BackLink() {
    return (
        <div className="back-link">
        <Link to="/">
            <FaChevronLeft size={30} color='gray' />
            </Link>
            </div>
    )
}

export default BackLink
