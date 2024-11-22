import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="p-4 bg-green-800 text-white flex justify-center gap-4">
      <Link
        to="#"
        onClick={() => handleExternalLink('https://facebook.com')}
        className="hover:text-blue-500"
      >
        <FaFacebook />
      </Link>
      <Link
        to="#"
        onClick={() => handleExternalLink('https://instagram.com')}
        className="hover:text-pink-500"
      >
        <FaInstagram />
      </Link>
      <Link
        to="#"
        onClick={() => handleExternalLink('https://linkedin.com')}
        className="hover:text-blue-300"
      >
        <FaLinkedin />
      </Link>
    </footer>
  );
}

export default Footer;
