import React from 'react';

const Footer = () => {
  return (
    
      <footer className="bg-slate-950 text-white p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="mb-2 md:mb-0">&copy; 2024 True Demon. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <a href="#privacy-policy">Privacy Policy</a>
              <a href="#terms-of-service">Terms of Service</a>
              <a href="#contact-us">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
