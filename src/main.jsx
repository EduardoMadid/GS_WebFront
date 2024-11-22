import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Login from './routes/Login';
import Solucao from './routes/Solucao';
import Sobre from './routes/Sobre';
import Cadastrar from './routes/Cadastrar';
import Error from './routes/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/solucao', element: <Solucao /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/cadastrar', element: <Cadastrar /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
