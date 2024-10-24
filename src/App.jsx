import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [selectedPuppy, setSelectedPuppy] = useState(null); 
  
  console.log(puppies);
  
  const handleClick = (puppy) => {
    setSelectedPuppy(puppy);
    
  }

  return (
    <>
    
  <div>
   <h1>Select a puppy</h1>
  { 
    puppies.map((puppy) => (
     <button key={puppy.id} onClick={() => handleClick(puppy)}>{puppy.name}</button>
    
     
    ))
}
{
  selectedPuppy && (
    <div>
      <h2>Puppy Details:</h2>
      <p>Name: {selectedPuppy.name}</p>
      <p>ID: {selectedPuppy.id}</p>
      <p>Email: {selectedPuppy.email}</p>
      <p>Is Cute: {selectedPuppy.isCute.toString()}</p>
      <p>Age: {selectedPuppy.age.toString()}</p>
      <p>Owner ID: {selectedPuppy.ownerId.toString()}</p>
      </div>
  )
}

    </div>  
    </>
  )
}

export default App
