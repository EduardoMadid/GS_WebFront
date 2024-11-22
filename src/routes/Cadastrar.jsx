import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastrar() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Atualiza os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Salva os dados no sessionStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    // Busca os dados existentes ou cria um novo array
    const savedData = JSON.parse(sessionStorage.getItem('cadastros')) || [];
    savedData.push(formData);

    // Salva o array atualizado no sessionStorage
    sessionStorage.setItem('cadastros', JSON.stringify(savedData));

    alert('Cadastro realizado com sucesso!');
    setFormData({ name: '', email: '' }); // Reseta o formulário
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastrar</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold" htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold" htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <p className="mt-4">
        Já tem uma conta? <Link to="/login" className="text-blue-500">Faça seu Login</Link>
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastrar;
