
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaSearch ,FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Home from './Home';
import Desk from './Desk';
import Editor from './Editor';
import Test from './Test';
import Bord from './Bord';
import Login from './Login';
import FileList from './FileList';

import './App.css';

function App() {
  const logoUrl =
  'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png';
const logg = {
    marginInlineStart: '116px', // Use camelCase
    marginBlockStart: '-4em',
    marginBlockEnd: '-1em',
    color:'black',
  };
const header ={
    marginInlineStart: '116px', 
    color: '#4CAF50',// Use camelCase
  };
const nav={
    marginInlineStart: '531px', // Use camelCase
    marginBlockStart: '-99px',
    marginBlockEnd: '55px',
    color:'black',
  };
    return (
      <>
        <Router>
            <div className="App">
                <header>
                        <div className="logo-container">
                                <img
                                    src={logoUrl}
                                    className="logo img-fluid"
                                    alt="Logo"
                                    width="90" height="80" right="250" 
                                />
                                     
                        <h3 style={ logg}>The Journal of</h3>
                        <h1 style={header}> Frontiers in Drug <br></br>Science Web Scaffold</h1>
                        </div>
                
                        <nav style={nav}>
                          <Link to="/home">The Journal</Link>
                          <Link to="/editor">Editors</Link>
                          <Link to="/desk">Current Issue</Link>
                          <Link to="/test">Archives</Link>
                          <Link to="/bord">In Press</Link>
                          <Link to="/login">Instructions</Link>
                          <Link to="/fileList">Submissions</Link>
                          <Link to="/editor">Editor</Link>
                          <Link to="/login">Login</Link>

                          <a><FaSearch className="search-icon" /></a>
                        </nav>
                      </header>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/desk" element={<Desk />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/bord" element={<Bord />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/fileList" element={<FileList />} />

                </Routes>
            </div>
        </Router>
       
        </> 
    );
}

export default App;


