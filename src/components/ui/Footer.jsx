// import React from 'react'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-success text-light py-1 mt-auto">
      <div className="container text-center">
        
        <div className="d-flex justify-content-center gap-4 my-3">
         
          <a href="https://www.linkedin.com/company/universal-umbrella-solutions-ltd" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaLinkedinIn size={24} />
          </a>
          {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaInstagram size={24} />
          </a> */}
          <a href="https://github.com/UUSolutions" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaGithub size={24} />
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} Universal Umbrella Solutions (U2S). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;