import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const NoteContext = createContext()

// prover wraps children
export const NoteProvider = ({ children }) => {
    const [note, setNote] = useState([
        {
            id: 1,
            text: 'This note number 1'
        },
        {
            id: 2,
            text: 'This note number 2'
        },
        {
            id: 3,
            text: 'This note number 3'
        }
    ])

     // if edit initiated boolean is set to true or 'edit mode'
    const [noteEdit, setNoteEdit] = useState({
        item: {

        },
        edit: false
    })

    // add new note to list
    const addNote = (newNote) => {
        newNote.id = uuidv4()
        setNote([newNote ,...note])
      }

    // remove note from list
    const deleteNote = (id) => {
        // display message to user
        if (window.confirm('Are you sure you want to delete?')) {
          // setNote to new array minus the note being deleted
          // item id !== to the id that is being passed in
        setNote(note.filter( item => item.id !== id))
        }
    }

    // set item to be updated
    const editNote = (item) => {
        setNoteEdit({
            item,
            edit: true
        })
    }

    // update note item
    const updateNote = (id, updItem) => {
        // return array with newly updated item
        // run condition to check for updated item
        setNote(note.map((item) => item.id === id ? {
            ...item, ...updItem
            // else return current item
        } : item)
        )
    }


    return (
    <NoteContext.Provider value={{
            note,
            // peice of state that holds state and boolean
            noteEdit,
            deleteNote,
            addNote,
            // function 
            editNote,
            updateNote,
           
    }}>
        {children}
        </NoteContext.Provider>
    )
}

export default NoteContext