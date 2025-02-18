import React from "react";
import { FaSearch ,FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Editor.css';
const Editor = () => {
  const logoUrl =
    'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png';
  // const logg = {
  //     marginInlineStart: '116px', // Use camelCase
  //     marginBlockStart: '-4em',
  //     marginBlockEnd: '-1em',
  //     color:'black',
  //   };
  // const header ={
  //     marginInlineStart: '116px', 
  //     color: '#4CAF50',// Use camelCase
  //   };
  // const nav={
  //     marginInlineStart: '531px', // Use camelCase
  //     marginBlockStart: '-99px',
  //     marginBlockEnd: '55px',
  //     color:'black',
  //   };
  const footer={
          color:'gray',
        };
  return (
    <div>
    <div className="container">
      {/* Journal Header */}
      <div className="journal-meta">
        <p className="journal-title">JournalReview7 | Title of the Journal</p>
        <p className="journal-date">25/04/2022</p>
      </div>

      {/* Article Title and Author */}
      <h1 className="journal-heading">The Journal heading</h1>
      <p className="journal-author"><strong>Author -</strong> Will Jacks</p>
      <p className="journal-subtitle">2025 | Vol 86 | Issue 5</p>

      {/* Featured Image */}
      <div className="journal-image">
      <img
                    src={logoUrl}
                    className="logo img-fluid"
                    alt="Floating book in library"
                    width="100%" maxWidth="200px" right="250" 
                />
        {/* <img src="/image.png" alt="Floating book in library" /> */}
      </div>

      {/* Article Content */}
      <div className="journal-content">
        <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra arcu 
        imperdiet lectus pharetra, at scelerisque augue ultrices. Ut in condimentum turpis.
         Nunc pulvinar quis nisi sed fermentum. Nulla facilisi. Aenean at augue quis elit
          rutrum sollicitudin. Quisque congue et magna vel condimentum. In quis sem ut 
          magna dictum feugiat eu vel ex. Mauris elementum diam eu tempus aliquet. Mauris tempor, 
          ex eget auctor molestie, orci justo commodo orci, sit amet placerat tellus massa sed augue.
           Donec non fermentum leo, at tincidunt tellus. Maecenas ac pharetra justo. Sed commodo, ligula vel aliquam varius, 
           enim metus eleifend felis, id interdum purus nunc non lectus.

        </p>
        <p>
        Sed blandit porttitor nibh fermentum pretium. Phasellus sagittis nisl vitae lectus feugiat,
         aliquam facilisis eros semper. Sed pharetra iaculis risus, sed faucibus dolor vulputate in. 
         Duis sed ipsum interdum, facilisis odio vel, pharetra odio. Suspendisse fermentum sed augue cursus porta.
          Aenean nec neque mauris. Pellentesque malesuada dictum fermentum. Suspendisse aliquet ante enim, at varius 
          arcu aliquet id. Etiam a ex id augue fringilla interdum eget vestibulum lectus. Sed in arcu quis tellus
           venenatis maximus. Integer accumsan est enim, id elementum metus aliquam eu.

        </p>
        <p>
        Nam in sapien porta, dictum arcu nec, dapibus urna. Quisque et metus varius, rhoncus nunc a,
         vestibulum lacus. Aliquam eget malesuada quam. Nulla eget sapien convallis, tristique nulla et, 
         imperdiet lorem. Quisque sed lacus tellus. Proin tincidunt sapien euismod libero aliquet, 
         nec vulputate turpis condimentum. Sed pellentesque nibh ac fermentum venenatis. Aenean a magna aliquam, 
         pulvinar elit consectetur, consectetur eros. Morbi laoreet eu enim eu ultricies. Cras rutrum sit 
         amet tortor sed mollis. Donec non enim efficitur, porta mauris vitae, ultrices velit. Quisque et lacus
          mollis nibh sollicitudin tristique ut vitae nunc. Vestibulum eu est arcu. Phasellus quis neque orci. 
          Cras vel consequat tellus, sit amet congue neque.
        </p>
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
    </div>
    
  );
};

export default Editor;