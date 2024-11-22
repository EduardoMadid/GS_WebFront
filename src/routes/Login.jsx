import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold" htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold" htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            className="border rounded p-2 w-full"
            required
          />
        </div>
      </form>
      <p className="mt-4">
        Ainda não tem uma conta? <Link to="/cadastrar" className="text-green-500">Cadastre-se aqui</Link>
      </p>
      <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Entrar
      </button>
    </div>
  );
}

export default Login;
