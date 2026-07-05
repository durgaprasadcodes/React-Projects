import { useState, useRef, useEffect } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  console.log("Checking Re-rendered - only happens when input1 changes or sum2 changes or sum1 changes but not when countref changes");
  const countref = useRef(0);
  const [input1, setInput1] = useState("")
  const [sum1, setsum1] = useState(0)
  const [sum2, setsum2] = useState(0)

  useEffect(() => {
    toast.success("Re Rendered becaue of Input 1")
  }, [input1])

  useEffect(() => {
    toast.info("Re Rendered becaue of Sum 1")
  }, [countref])

  useEffect(() => {
    toast.warning("Re Rendered becaue of Sum 2")
  }, [sum2])

  function handleInput2() {
    setsum2((prev) => prev + Number(countref.current.value) || 0)
  }

  function handleInput1() {
    setsum1((prev) => prev + Number(input1) || 0)
  }

  return (
    <div className="container">
      <ToastContainer autoClose={800} />
      <h1>UseRef Tutorial</h1>
      <div className="parts">
        <div className="rendering">
          <h2>Here Rerender will Happens</h2>
          <input type="number" placeholder='Here rerender Happens' value={input1} onChange={(e) => setInput1(e.target.value)} />
          <p>Sum : {sum1}</p>
          <button onClick={handleInput1}>Add to Sum</button>
        </div>
        <div className="notrendering">
          <h2>Here Rerender Won't Happens</h2>
          <input type="number" placeholder='Here rerender Happens' ref={countref} />
          <p>Sum : {sum2}</p>
          <button onClick={handleInput2}>Add to Sum</button>
        </div>
      </div>
    </div>
  )
}

export default App
