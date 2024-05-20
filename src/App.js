import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="blog-name">
            <Link to="/">찐빵 블로그</Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <ScrollLink to="gallery-section" smooth={true} duration={500}>
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="blog-section" smooth={true} duration={500}>
                  Blog
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="content">
          <Element name="gallery-section">
            <Gallery />
          </Element>
          <Element name="blog-section">
            <Blog />
          </Element>
        </div>
      </Router>
    </>
  );
}

export default App;
