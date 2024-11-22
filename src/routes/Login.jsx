import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Conteúdo do Login */}
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-white shadow-md rounded w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
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
          <p className="mt-4 text-center">
            Ainda não tem uma conta? <Link to="/cadastrar" className="text-green-500">Cadastre-se aqui</Link>
          </p>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded w-full mt-4 hover:bg-green-600"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
