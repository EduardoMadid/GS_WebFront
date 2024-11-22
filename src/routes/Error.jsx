import React from 'react';
import { Link } from 'react-router-dom'; // Para adicionar links de navegação, como voltar à home

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Opa! Algo deu errado.</h1>
        <p className="error-message">
          Desculpe, mas não conseguimos encontrar a página que você estava procurando. 
          Pode ter ocorrido um erro ou a página pode não existir.
        </p>
        <Link to="/" className="back-home-button">
          Voltar para a Home
        </Link>
      </div>

      {/* Estilo inline */}
      <style jsx>{`
        .error-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f9;
          color: #333;
        }

        .error-container {
          text-align: center;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }

        .error-title {
          font-size: 3rem;
          font-weight: bold;
          color: #e74c3c;
        }

        .error-message {
          font-size: 1.25rem;
          margin: 20px 0;
          color: #555;
        }

        .back-home-button {
          font-size: 1.2rem;
          background-color: #3498db;
          color: white;
          padding: 12px 20px;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .back-home-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
}

export default ErrorPage;
