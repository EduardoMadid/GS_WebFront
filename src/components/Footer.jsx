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
        href="https://www.linkedin.com/in/eduardo-madid-10aa862b6/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
