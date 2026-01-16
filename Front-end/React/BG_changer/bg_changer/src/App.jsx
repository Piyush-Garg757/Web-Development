import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("Violet")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
    </>
  )
}

export default App
