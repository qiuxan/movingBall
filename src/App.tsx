import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ball from './components/Ball'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ball xSpeed={100} ySpeed={200} left={100} top={100} bgColor='blue'/>
    </>
  )
}

export default App
