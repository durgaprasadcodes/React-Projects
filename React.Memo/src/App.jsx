import ReactMemo from './components/ReactMemo'

function App() {
  console.log('App re-rendering');
  return (
    <div className="App">
      <ReactMemo />
    </div>
  )
}

export default App
