import { useState } from 'react';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify({ user, password }),
      'secret-key'
    ).toString();
    sessionStorage.setItem('userSession', encryptedData);
    alert('Login realizado com sucesso!');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userSession');
    alert('Logout realizado!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Login</h1>
        
        <div className="space-y-4">
          {/* Input para Usuário */}
          <div>
            <input
              type="text"
              placeholder="Usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Input para Senha */}
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Botões de Login e Logout */}
          <div className="flex flex-col space-y-4 mt-6">
            <button
              onClick={handleLogin}
              className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Login
            </button>
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>

          {/* Link para página de cadastro */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Ainda não tem uma conta?  
            <Link to="/cadastrar" className="text-green-500 hover:text-green-600 font-semibold">
               Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
