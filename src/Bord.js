import React from "react";
import { FaSearch ,FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Bord.css";

const Bord = () => {
    const logoUrl =
  'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png';
  const footer={
    color:'gray',
  };
  return (
    <>
    <div className="editorial-container">
      <h2 className="title">Editorial Board</h2>
      <p className="subtitle">
        Meet the distinguished members of our editorial board.
      </p>

      <div className="editor-card">
        <div className="editor-image">
          <img
                                    src={logoUrl}
                                    className="editor-image"
                                    alt="Logo"
                                    width="90" height="80" right="250" 
                                />
        </div>
        <div className="editor-info">
          <h3 className="editor-name">Mr. Ashutosh Narayan</h3>
          <p className="editor-title">Senior Editor, AI Research.</p>
          <p className="editor-description">
            "Dr. Ashutosh Narayan is a Senior Editor with over 15 years of
            experience in academic publishing and peer-reviewed research.
            Specializing in Artificial Intelligence and Data Science, she has
            contributed to numerous high-impact journals and conferences. Her
            editorial vision focuses on fostering innovation and maintaining
            research integrity."
          </p>
          <a href="#" className="editor-link">
            Know More
          </a>
        </div>
      </div>

      <div className="editor-cardd">
        <div className="editor-info">
          <h3 className="editor-name">Mr. Ashutosh Narayan</h3>
          <p className="editor-title">Senior Editor, AI Research.</p>
          <p className="editor-description">
            "Dr. Ashutosh Narayan is a Senior Editor with over 15 years of
            experience in academic publishing and peer-reviewed research.
            Specializing in Artificial Intelligence and Data Science, she has
            contributed to numerous high-impact journals and conferences. Her
            editorial vision focuses on fostering innovation and maintaining
            research integrity."
          </p>
          <a href="#" className="editor-link">
            Know More
          </a>
        </div>
        <div className="editor-image">
          <img
                                    src={logoUrl}
                                    className="editor-image"
                                    alt="Logo"
                                    width="90" height="80" right="250" 
                                />
        </div>
      </div>

      <div className="editor-card">
        <div className="editor-image">
          <img
                                    src={logoUrl}
                                    className="editor-image"
                                    alt="Logo"
                                    width="90" height="80" right="250" 
                                />
        </div>
        <div className="editor-info">
          <h3 className="editor-name">Mr. Ashutosh Narayan</h3>
          <p className="editor-title">Senior Editor, AI Research.</p>
          <p className="editor-description">
            "Dr. Ashutosh Narayan is a Senior Editor with over 15 years of
            experience in academic publishing and peer-reviewed research.
            Specializing in Artificial Intelligence and Data Science, she has
            contributed to numerous high-impact journals and conferences. Her
            editorial vision focuses on fostering innovation and maintaining
            research integrity."
          </p>
          <a href="#" className="editor-link">
            Know More
          </a>
        </div>
      </div>

      <div className="editor-cardd">
        <div className="editor-info">
          <h3 className="editor-name">Mr. Ashutosh Narayan</h3>
          <p className="editor-title">Senior Editor, AI Research.</p>
          <p className="editor-description">
            "Dr. Ashutosh Narayan is a Senior Editor with over 15 years of
            experience in academic publishing and peer-reviewed research.
            Specializing in Artificial Intelligence and Data Science, she has
            contributed to numerous high-impact journals and conferences. Her
            editorial vision focuses on fostering innovation and maintaining
            research integrity."
          </p>
          <a href="#" className="editor-link">
            Know More
          </a>
        </div>
        <div className="editor-image">
          <img
                                    src={logoUrl}
                                    className="editor-image"
                                    alt="Logo"
                                    width="90" height="80" right="250" 
                                />
        </div>
      </div>

    </div>
<div className="App">
      <footer className="footer">
        <div className="footer-logo-address">
        <img
                    src={logoUrl}
                    className="logo img-fluid"
                    alt="Logo"
                    width="90" height="80" right="250" 
                />
          <p><b>Frontiers in Drug Science Web Scaffold</b></p>
          <p style={footer}>Opp. of house of jewels, ring Road, Jalgaon.</p>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Instructions</a></li>
            <li><a href="#">Reviewers</a></li>
            <li><a href="#">Submission Guidelines</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About us</h3>
          <ul>
            <li><a href="#">Editor Desk</a></li>
            <li><a href="#">Archives</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Careers</h3> 
          <ul>
            <li><a href="#">Editorial Assistant</a></li>
            <li><a href="#">Internship</a></li>
            <li><a href="#">Collaborate</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <div className="icon">
              <FaFacebookF size={24} />
            </div>
            <div className="icon">
              <FaTwitter size={24} />
            </div>
            <div className="icon">
              <FaInstagram size={24} />
            </div>
            </div>
          </div>
            <div className="footer-copyright">
              <p>© 2025 Simplesphere. All Right Reserved</p>
            </div>
      </footer>
    </div>
    

    </>
  );
};

export default Bord;
