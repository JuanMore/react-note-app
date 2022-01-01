import NoteItem from "./NoteItem"
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'

function NoteList() {
    const {note} = useContext(NoteContext)
    if (!note || note.length === 0) {
        return <p>No Notes yet.</p>
    }
    
    return (
        <div className="grid">
                {note.map(item => (
                <NoteItem key={item.id} item={item} />
            ))}
                </div>
    )
}


export default NoteList
