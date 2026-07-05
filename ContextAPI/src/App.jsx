import React from 'react'
import { createContext } from 'react'
import { Usercontext } from './hooks/context'
import ElderChild from './ElderChild'
import YoungChild from './YoungerChild'

export default function App() {
  const elderChildMessage = "ELderChild Receiving Data From Parent Through Props Manually";
  const youngerChildMessage = "YoungChild Receiving Data From Parent Through Context API";
  return (
    <div>
      <h1>Parent Component</h1>
      <h2><ElderChild value={elderChildMessage} /></h2>
      <Usercontext.Provider value={youngerChildMessage}>
        <YoungChild />
      </Usercontext.Provider>
    </div>
  )
}



