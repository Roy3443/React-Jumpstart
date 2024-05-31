import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from './components/Note'
import axios from 'axios'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNOte, setNewNote] = useState(
    'a new note...'
  )
useEffect(()=>{
  console.log('effect')
  axios
  .get('http://localhost:3001/notes')
  .then(response=>{
    console.log('promise fulfilled')
    setNotes(response.data)
  })
},[])

  const addNote=(event)=>{
    event.preventDefault()
    console.log('button clicked', event.target)
  }
  const handleNotechange=(event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note=>
        <Note key={note.id}
          note={note}/>
          )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNOte} onChange={handleNotechange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
