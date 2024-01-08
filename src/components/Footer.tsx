import React from 'react';
const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white p-4 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">My Vermy </p>
        <p className="text-sm">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
