import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import Card from "./shared/Card"
function NoteItem({ item }) {
    const {deleteNote, editNote} = useContext(NoteContext)

    return (
        <Card>
            <button onClick={() => deleteNote(item.id)} className='close'><FaTimes color='red' size={20}/></button>
            <button onClick= {() => editNote(item)} className="edit"><FaEdit color='blue' size={20} /></button>
            <div className="text-display">{item.text}</div>
        </Card>
            
    )
}

NoteItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default NoteItem
