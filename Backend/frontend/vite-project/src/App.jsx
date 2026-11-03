import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [information, setInformation] = useState([])
  useEffect(()=>{
    axios.get('/api/information')
    .then((response)=>{
      setInformation(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
      <h1>Vibhuti Seth this side</h1>
      <p>JOKES: {information.length}</p>

      {
        information.map((information,index)=>(
          <div key={information.id}>
            <h2>{information.name}</h2>
            
          </div>
          

        ))
      }
    </>
  )
}

export default App
