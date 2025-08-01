import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewComponent from './NewComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewComponent/>
    </>
  )
}

export default App
