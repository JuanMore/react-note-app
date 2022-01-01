import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'

import Card from "./shared/Card"
function NoteItem({ item, destroyNote }) {

    return (
        <Card>
            <button onClick={() => destroyNote(item.id)} className='close'><FaTimes color='red' size={20}/></button>
            <button className="edit"><FaEdit color='blue' size={20} /></button>
            <div className="text-display">{item.text}</div>
        </Card>
            
    )
}

NoteItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default NoteItem
