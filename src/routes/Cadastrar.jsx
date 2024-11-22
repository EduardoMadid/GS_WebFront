import { useState } from 'react';

function Cadastrar() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados cadastrados:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Cadastrar;
