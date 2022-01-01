import { useState, useContext, useEffect} from "react"
import Button from "./shared/Button"
import NoteContext from "../context/NoteContext"
function NoteForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [mssg, setMssg] = useState('')
    const {addNote, noteEdit, updateNote} = useContext(NoteContext)

    // call func - takes in a callback
    useEffect(() => {
        if (noteEdit.edit === true) {
            setBtnDisabled(false)
            // set new note text 
        setText(noteEdit.item.text)
            
        }

        // takes in an array of dependencies
    }, [noteEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            // set btn to disabled
            setBtnDisabled(true)
            // if nothing don't show mssg
            setMssg(null)
        } else if (text !== '' && text.trim().length <= 5) {
            setBtnDisabled(true)
            setMssg('Note must be at least 5 characters')
        }
        else {
            setMssg(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        // prevent submission to file
        e.preventDefault()
        if (text.trim().length > 5) {
            const newNote = {
                text
            }

            if (noteEdit.edit === true) {
                updateNote(noteEdit.item.id, newNote)
            } else {
                // add note - called from context
                addNote(newNote)
            }
           
            // clear text field
            setText('')
        }

    }
    return (
        <>
            <div className="container">
            <form onSubmit={handleSubmit}>
        <h2 className='center'>Add new note</h2>
        <div className="input-group">
                    <input onChange={handleTextChange}
                        type="text"
                        placeholder='Write a note'
                        value={text}>
                    </input>
                    <Button type='submit'
                        version='primary'
                        isDisabled={btnDisabled}>
                        +
                    </Button>
                </div>

                {mssg && <div className='mssg'>{mssg}</div>}
                </form>
                </div>
    </>
    )
}

export default NoteForm
