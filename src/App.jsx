import './App.css'
import Newsletter from './components/newsletter.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Back from './components/Home/Back.jsx'
import New from './components/Projects/New.jsx';
import All from './components/Teams/All.jsx';
import Technical from './components/Teams/Technical.jsx';
import Management from './components/Teams/Management.jsx';
import Culturals from './components/Teams/Culturals.jsx';
import General from './components/Teams/General.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Back/>} />
        <Route path="/team" element={<All/>} />
        <Route path="/project" element={<New/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/newsletter" element={<Newsletter/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/technicals" element={<Technical/>} />
        <Route path="/PR Design" element={<Management/>} />
        <Route path="/cultural" element={<Culturals/>} />
        <Route path="/sports" element={<General/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
