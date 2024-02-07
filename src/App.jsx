import './App.css'
import Newsletter from './components/newsletter.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/newsletter" element={<Newsletter/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
