import React from 'react';

function Footer() {
  const setYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className='footer wrapper'>
      <p className='footer__copyright'>&copy; {setYear()} Mesto Russia</p>
    </footer>
  );
}
export default Footer;
