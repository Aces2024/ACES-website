import './App.css'
import Newsletter from './components/newsletter.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/newsletter" element={<Newsletter/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
