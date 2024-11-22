import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="p-4 bg-gray-800 text-white flex justify-center gap-4">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        </footer>
    );
}

export default Footer;
