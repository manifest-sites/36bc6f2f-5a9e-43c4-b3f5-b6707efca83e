import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import Scoreboard from './components/Scoreboard'

function App() {

  return (
    <Monetization>
      <Scoreboard />
    </Monetization>
  )
}

export default App