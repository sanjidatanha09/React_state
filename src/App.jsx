

import { useState } from 'react'
import './App.css'

function App() {

  const [team, setTeam] = useState(0)

  const handleAdd = () => {
    const teams = team + 1
    setTeam(teams)


  }
  const handleRemove = () =>{
     const teams = team - 1 
    setTeam(teams)
  }

  const teamStyle = {

    border:'2px solid purple',
    margin:'15px',
    padding: '15px',
    borderRadius: '16px',
  }
  

  return (
    <>
      
      <div style={teamStyle}>
        <h1>players : {team}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
      
      
    </>
  )
}

export default App
