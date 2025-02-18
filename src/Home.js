import React from 'react';
import './Home.css';
import { FaSearch ,FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import Editor from './component/editor.js';
// import myLogo from './log.png';


// const home = () => {
  function Home() {
  const logoUrl =
  'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png';
  // const logg = {
  //   marginInlineStart: '116px', // Use camelCase
  //   marginBlockStart: '-4em',
  //   marginBlockEnd: '-1em',
  //   color:'black',
  // };
  // const header ={
  //   marginInlineStart: '116px', 
  //   color: '#4CAF50',// Use camelCase
  // };
  // const nav={
  //   marginInlineStart: '531px', // Use camelCase
  //   marginBlockStart: '-99px',
  //   marginBlockEnd: '55px',
  //   color:'black',
  // };
  const ch2={
    color:'#2c7a2c',
    marginInlineStart: '102px',
    fontFamily:'Sitka Banner',

  };
  const footer={
    color:'gray',
  };
  const button={
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flexEnd',
    flexDirection: 'column',
    alignItems: 'center',
    marginInlineEnd: '-18px',
    marginBlockStart: '-279px',
    marginBlockEnd: '176px',
    marginBlockStart: '-269px',
    marginRight: '-810px',
  };
  const button1= {
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    // color: 'black',
  };
  const h3={
    padding: '20px',
  }
  return (
    <div>

      {/* <header>
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
          <a href="#">The Journal</a>
          <a href="#">Editors</a>
          <a href="#">Current Issue</a>
          <a href="#">Archives</a>
          <a href="#">In Press</a>
          <a href="#">Instructions</a>
          <a href="#">Submissions</a>
          <a><FaSearch className="search-icon" /></a>
        </nav>
        
      </header> */}


      <div className="submission-notice">
        <p>
          All submissions of the FDSWS system will be redirected to Online Manuscript Submission System. Authors are <br></br>requested to submit articles directly to Online Manuscript Submission System of respective journal.
        </p>
      </div>
      <div className="submission-notices">
        <p></p>
      </div>
      <div className="containerr">
      <div className="journal-cover">
      <img
                    src={logoUrl}
                    className="logo img-fluid"
                    alt="Journal Cover"
                    width="100%" maxWidth="200px" right="250" 
                />

        {/* <img src="cover-image-url.jpg" alt="Journal Cover" /> */}
        <p>Volume 58, Issue 2<br />January 21, 2025</p>
      </div>
      <div className="journal-info">
        <h1>Accounts of Chemical Research</h1>
        <p>
          Chemical Reviews publishes short, concise and critical articles<br></br> offering easy-to-read overviews of basic research <br></br>and applications in all areas of chemistry.
        </p>
        <p>
          <strong>Editor-in-Chief:</strong> Christopher J. Chang<br />
          Editors & Editorial Board
        </p>
        <p>
          2 Year Impact Factor 2023: 16.7 | Citations 2023: 82,137 <br></br>| CiteScore 2023: 31.4
        </p>
        <div className="buttons">
          <button className="submit-manuscript">Submit Manuscript</button>
          <button className="get-access">Get Access</button>
          <button className="get-alerts">Get e-Alerts</button>
        </div>
      </div>
    </div>
      <main>
        {/* <div className='container'></div> */}
        <h2 style={ch2}>Current Issues 2025 | Vol 86 | Issue 5</h2>
        <section className="current-issues">
          <article>
            <h3 style={h3}>Emphasizing the Anti-inflammatory and Antioxidant Properties of<br></br> Bioactive Constituents in Herbal Foods</h3>
            <p>V. Verma*, Roopal Mittal, Prema Goel, and A. Mittal</p>
            <p>DOI: 10.36468/pharmaceutical-sciences.1421</p>
            <p>In daily life, nutrition is crucial in maintaining health in all parts of the world. Using foods with medicinal<br></br> characteristics simultaneously can change the body's pathological and physiological states.</p>
            <button>Review Article</button>
            <div className="article-links" style={button}>
            <button style={button1}>HTML Text</button>
              <button style={button1}>Abstract</button>
              <button style={button1}>Docs</button>
              <button style={button1}>PDF</button>
            </div>
          </article>
        </section>
          <aside className='asides'>
            <h2>About the Journal</h2>
            <p>The Indian Journal of Pharmacy was started in 1939 as "a quarterly journal devoted to the Science and practice of Pharmacy in all its branches". The Chief editor and the main guiding force behind the Journal was Prof M.L.Schroff, Head of the Department of Pharmaceutics, Benaras Hindu University, Benaras.</p>
            <a href="#">Read More</a>
          </aside>  
          
          {/* <div className='container'></div> */}
        <h2 style={ch2}>Current Issues 2025 | Vol 86 | Issue 5</h2>
        <section className="current-issues">
          <article>
            <h3 style={h3}>Emphasizing the Anti-inflammatory and Antioxidant Properties of<br></br> Bioactive Constituents in Herbal Foods</h3>
            <p>V. Verma*, Roopal Mittal, Prema Goel, and A. Mittal</p>
            <p>DOI: 10.36468/pharmaceutical-sciences.1421</p>
            <p>In daily life, nutrition is crucial in maintaining health in all parts of the world. Using foods with medicinal<br></br> characteristics simultaneously can change the body's pathological and physiological states.</p>
            <button>Review Article</button>
            <div className="article-links" style={button}>
            <button style={button1}>HTML Text</button>
              <button style={button1}>Abstract</button>
              <button style={button1}>Docs</button>
              <button style={button1}>PDF</button>
            </div>
          </article>
        </section>
          <aside className='asides'>
            <h2>About the Journal</h2>
            <p>The Indian Journal of Pharmacy was started in 1939 as "a quarterly journal devoted to the Science and practice of Pharmacy in all its branches". The Chief editor and the main guiding force behind the Journal was Prof M.L.Schroff, Head of the Department of Pharmaceutics, Benaras Hindu University, Benaras.</p>
            <a href="#">Read More</a>
          </aside>  


          {/* <div className='container'></div> */}
        <h2 style={ch2}>Current Issues 2025 | Vol 86 | Issue 5</h2>
        <section className="current-issues">
          <article>
            <h3 style={h3}s>Emphasizing the Anti-inflammatory and Antioxidant Properties of<br></br> Bioactive Constituents in Herbal Foods</h3>
            <p>V. Verma*, Roopal Mittal, Prema Goel, and A. Mittal</p>
            <p>DOI: 10.36468/pharmaceutical-sciences.1421</p>
            <p>In daily life, nutrition is crucial in maintaining health in all parts of the world. Using foods with medicinal<br></br> characteristics simultaneously can change the body's pathological and physiological states.</p>
            <button>Review Article</button>
            <div className="article-links" style={button}>
            <button style={button1}>HTML Text</button>
              <button style={button1}>Abstract</button>
              <button style={button1}>Docs</button>
              <button style={button1}>PDF</button>
            </div>
          </article>
        </section>
          <aside className='asides'>
            <h2>About the Journal</h2>
            <p>The Indian Journal of Pharmacy was started in 1939 as "a quarterly journal devoted to the Science and practice of Pharmacy in all its branches". The Chief editor and the main guiding force behind the Journal was Prof M.L.Schroff, Head of the Department of Pharmaceutics, Benaras Hindu University, Benaras.</p>
            <a href="#">Read More</a>
          </aside>  
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

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

      </main>
    </div>
  );
};
export default Home;

