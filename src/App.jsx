import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newsletter from './components/newsletter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Hello */}
      <Newsletter/> 
    </>
  )
}

export default App;
