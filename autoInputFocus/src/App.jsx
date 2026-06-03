import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = () => {
    alert(`Hello, ${name}!`)
  }
  return (
    <div className="container">
      <h1>Auto Focus Input</h1>
      <p>Input field will be focused automatically when the component mounts</p>
      <input ref={inputRef} type="text" placeholder="Auto Focus Here!" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default App
