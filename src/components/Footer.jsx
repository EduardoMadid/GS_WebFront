import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="p-4 bg-green-900 text-white flex justify-center gap-4 mt-auto">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaFacebook />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500"
      >
        <FaInstagram />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
