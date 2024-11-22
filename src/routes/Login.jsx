import { useState } from 'react';
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
    <div className="p-4">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
