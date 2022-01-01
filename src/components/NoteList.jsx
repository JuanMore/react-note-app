import NoteItem from "./NoteItem"
import PropTypes from 'prop-types'

function NoteList({ note, destroyNote }) {
    if (!note || note.length === 0) {
        return <p>No Notes yet.</p>
    }
    
    return (
        <div className="grid">
                {note.map(item => (
                <NoteItem key={item.id} item={item} destroyNote={destroyNote}/>
            ))}
                </div>
    )
}

// import proptypes because note is an array
NoteList.propTypes = {
    note: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default NoteList
