import { useState, useMemo } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  const heavyCalculation = () => {
    console.log('Calculating...')
    let num = 0;
    for (let i = 0; i < 2000000000; i++) {
      num += 1
    }
    return num
  }
  const memoizedValue = useMemo(() => heavyCalculation(), [])
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Memoized Value: {memoizedValue}</h1>
    </div>
  )
}

export default App
