import { createContext, useState, useEffect } from "react";

const NoteContext = createContext()

// prover wraps children
export const NoteProvider = ({ children }) => {
    // set to true until we make request
    const [isLoading, setIsLoading] = useState(true)
    const [note, setNote] = useState([])
     // if edit initiated boolean is set to true or 'edit mode'
    const [noteEdit, setNoteEdit] = useState({
        item: {

        },
        edit: false
    })

    useEffect(() => {
        fetchData()
    }, [])

    //Fetch note data
    const fetchData = async () => {
        const response = await fetch(`/note?_sort=id&_order=desc`)
        // return data as json
        const data = await response.json()

        // set data(notes) from our db
        setNote(data)
        // set our spinner to false
        setIsLoading(false)
    }

    // add new note to list
    const addNote = async (newNote) => {
        const response = await fetch('/note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote),
        })

        const data = await response.json()
        // set note to new data from backend
        setNote([data, ...note])
      }

    // remove note from list
    const deleteNote =  async (id) => {
        // display message to user
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/note/${id}`, { method: 'DELETE'})
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
    const updateNote = async (id, updItem) => {
        const response = await fetch(`/note/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        // return array with newly updated item
        // run condition to check for updated item
        setNote(note.map((item) => item.id === id ? {
            ...item, ...data
            // else return current item
        } : item)
        )
    }


    return (
    <NoteContext.Provider value={{
            note,
            // peice of state that holds state and boolean
            noteEdit,
            isLoading,
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