import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="p-4 bg-green-600 text-white">
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/solucao">Solução</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
