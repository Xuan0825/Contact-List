import './App.css'
import React from 'react'
import ContactList from './components/ContactList'
import { useState } from 'react'
import { useEffect } from 'react'
import SelectedContact from './components/SelectedContact'
import ContactRow from './components/ContactRow'
function App() {
  const[selectedContactId, setSelectedContactId]= useState(null)

    return(
    <>
    {selectedContactId?(
    <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId = {selectedContactId} />
    ):(
      <ContactList setSelectedContactId={setSelectedContactId} /> )}
      

      
    </>
  )
}

export default App
