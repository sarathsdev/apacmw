import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {  Dot} from "lucide-react";

import "./App.css";
import citiLogo from "./citibank-logo.png";
import Home from "./pages/Home";
import KnowledgeBase from "./pages/KnowledgeBase";
import Queries from "./pages/Queries";
import Automation from "./pages/Automation";
import BAU from "./pages/BAU";
import Contact from "./pages/Contact";
import Access from "./pages/Access";
import AddIssue from "./pages/AddIssue";

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleDrawer}>✖</button>
      <ul className="sidebar-links">
        <li><a href="">< Dot size={20} />Confluence</a></li>
        <li><a href="">< Dot size={20} /> WAIS</a></li>
        <li><a href="">< Dot size={20} />SaaS Service Now</a></li>
        <li><a href="">< Dot size={20} />Cyberark Portal</a></li>
        <li><a href="">< Dot size={20} />Server Info</a></li>
        <li><a href="">< Dot size={20} />Power BI</a></li>
        <li><a href="">< Dot size={20} />IRIS</a></li>
        <li><a href="">< Dot size={20} />Citi Market Place</a></li>
        <li><a href="">< Dot size={20} /></a>VTM tracker tool</li>
        <li><a href="">< Dot size={20} /></a>Justify IT</li>
        <li><a href="">< Dot size={20} /></a>Sharepoint</li>
        <li><a href="">< Dot size={20} /></a>CAS</li>
      </ul>
     
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/knowledge-base">Knowledge Base</Link></li>
          <li><Link to="/query">Queries</Link></li>
          <li><Link to="/automation">Automation</Link></li>
          <li><Link to="/access">iAccess</Link></li>
          <li><Link to="/bau">BAU</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="logo-container">
            <img src={citiLogo} onClick={toggleDrawer} alt="Citi Bank Logo" className="logo" />
            <h1>APAC Middleware</h1>
          </div>
          <Navbar />
        </header>
        <Sidebar isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/query" element={<Queries />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/access" element={<Access />} />
            <Route path="/bau" element={<BAU />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add" element={<AddIssue />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;


/**
 <footer className="footer">
          <p>Copyright © 2025 | Contact us | Share Feedback</p>
        </footer>
 */