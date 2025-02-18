import React from 'react';
import { TbArrowNarrowDownDashed } from "react-icons/tb";
import { FaSearch ,FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Desk.css';

  const Desk = () => {
  const logoUrl =
    'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png';
  const h2 = {
    color: '#1ee218',
    textAlignLast: 'center',
  }
  const h22 = {
    color: '#1ee218',
  }
  const h222 = {
    color: 'white',
  }
  const p1={
    color: '#004d27',
  }
  const p11={
    color: 'gray',
  }
  const download={
    // height: '5em',
    // Weight: '62em',
  }
  const footer={
    color:'gray',
  };
  return (
    <div>
    <div className="editor-desk">
      <header className="header">
        <h1 style={p1}>Editor Desk</h1>
        <p style={p11}>Stay updated with announcements and insights from the Chief Editor</p>
      </header>
      <section className="chief-editor">
        <div className="editor-infoo">
        <img
                    src={logoUrl}
                    className="profile-picture"
                    alt="Journal Cover"
                    width="100%" maxWidth="200px" right="250" 
                />
          <div className="editor-details">
          <h4 style={h22}>Chief Editor (Education)</h4>
            <h2 style={h222}>Dr. Ashish Varma</h2>
            <div className="download">
    </div>
            <p>
              With over a decade of experience in academic publishing and research, I am committed to fostering a culture of innovation and excellence in scholarly communication. My goal is to bridge the gap between researchers and readers by ensuring every piece we publish adds value to the global knowledge landscape.
            </p>
            <a href="mailto:ashish.varma@journalmail.com">ashish.varma@journalmail.com</a>
          </div>
        </div>
        <blockquote className="editor-quote">
          "As the Chief Editor, it is my privilege to share updates and exciting news from our editorial desk. Through this page, I aim to keep you informed about upcoming journal releases, editorial insights, and announcements relevant to our publication. Thank you for being part of our vibrant community of readers and researchers."
        </blockquote>
      </section>
      <h2 style={h2} >Announcements</h2>
      <section className="announcements">
        <div className="announcement">
          <h3>From the Editor's Desk</h3>
          <p>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more.</p>
          <button>View More</button>
        </div>
        <div className="announcement">
          <h3>From the Editor's Desk</h3>
          <p>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more.</p>
          <button>View More</button>
        </div>
        <div className="announcement">
          <h3>From the Editor's Desk</h3>
          <p>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more.</p>
          <button>View More</button>
        </div>
      </section>
      <footer className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </footer>
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
          </div>
    
  );
}

export default Desk;