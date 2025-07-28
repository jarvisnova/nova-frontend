// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-3 text-sm mt-auto">
      © {new Date().getFullYear()} JarvisAI.com · All rights reserved.
    </footer>
  );
};

export default Footer;
