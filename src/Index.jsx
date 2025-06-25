import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import { GiSkills } from "react-icons/gi";
import Header from './Header.jsx';
import Footer from './Footer.jsx';


import Body from './home.jsx';
import About from './pages/About.jsx';
import Exp from './pages/Exp.jsx';
import Contact from './pages/Contact.jsx';
import Dock from './components/Dock';

import './style.css';
import { FaAddressCard, FaHome, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function Index() {
  return (
    <Router>
      <InnerApp />
    </Router>
  );
}

function InnerApp() {
  const navigate = useNavigate();
  const items = [
    {
  label: "Home",
  icon: <FaHome className="w-6 h-6" />,
  onClick: () => {
    navigate("/");
    window.scrollTo(0, 0);
  }
},
{
  label: "About Me",
  icon: <FaAddressCard className="w-6 h-6" />,
  onClick: () => {
    navigate("/about");
    window.scrollTo(0, 0);
  }
},
{
  label: "Experience & Skills",
  icon: <GiSkills className="w-6 h-6" />,
  onClick: () => {
    navigate("/exp");
    window.scrollTo(0, 0);
  }
},
{
  label: "LinkedIn",
  icon: <FaLinkedin className="w-6 h-6" />,
  onClick: () => window.open("https://www.linkedin.com/in/chrisdoss-jr/", "_blank")
},
{
  label: "Contact",
  icon: <FaPhone className="w-6 h-6" />,
  onClick: () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  }
},
  ];

  return (
    <>
    <div className="bg-black text-white flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Dock items={items} />
    </div>
    <Footer />
    </>
  );
}
