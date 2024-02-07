import "./App.css";
import Newsletter from "./components/newsletter.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Back from "./components/Home/Back.jsx";
import New from "./components/Projects/New.jsx";
import All from "./components/Teams/All.jsx";
import Technical from "./components/Teams/Technical.jsx";
import Management from "./components/Teams/Management.jsx";
import Cultural from "./components/Teams/Cultural.jsx";
import Sports from "./components/Teams/Sports.jsx";
import SomeCard from "./components/RSVP/SomeCard.jsx";
import Nav from "./components/Nav/Nav.jsx";



function App() {
    return (
        <div className=" bg-[#151414]">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Back/>} />
                    <Route path="/team" element={<All />} />
                    <Route path="/project" element={<New />} />
                    <Route path="/about" element={<Gallery />} />
                    <Route path="/newsletter" element={<Newsletter />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/technical" element={<Technical />} />
                    <Route path="/management" element={<Management />} />
                    <Route path="/cultural" element={<Cultural />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/event" element={<SomeCard />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );

}

export default App;
