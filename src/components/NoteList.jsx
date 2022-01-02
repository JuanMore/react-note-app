import NoteItem from "./NoteItem"
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import Spinner from "./shared/Spinner"

function NoteList() {
    const {note, isLoading} = useContext(NoteContext)
    if (!isLoading &&  (!note || note.length === 0)){
        return <p>No Notes yet.</p>
    }

    return isLoading ? <Spinner /> : (
            <div className="grid">
                    {note.map(item => (
                    <NoteItem key={item.id} item={item} />
                ))}
                    </div>
    )
    
}


export default NoteList
