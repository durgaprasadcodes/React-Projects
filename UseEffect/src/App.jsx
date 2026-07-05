import { useState, useEffect } from 'react'
import './App.css'
import Timer from './components/Timer'
import KeyboardListener from './components/KeyboardListener'

function App() {
  const [activeTab, setActiveTab] = useState('timer')

  return (
    <div className="app">
      <header>
        <h1>useEffect Examples</h1>
        <p>Learn different use cases of the useEffect hook</p>
      </header>

      <nav className="tabs">
        <button
          className={activeTab === 'timer' ? 'active' : ''}
          onClick={() => setActiveTab('timer')}
        >
          Timer (Cleanup)
        </button>
        <button
          className={activeTab === 'keyboard' ? 'active' : ''}
          onClick={() => setActiveTab('keyboard')}
        >
          Keyboard Listener
        </button>
      </nav>

      <main>
        {activeTab === 'timer' && <Timer />}
        {activeTab === 'keyboard' && <KeyboardListener />}
      </main>

    </div>
  )
}

export default App
