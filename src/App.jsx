import { useState } from 'react'
import Filters from './filters.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Filters />
    </div>
  )
}

export default App
