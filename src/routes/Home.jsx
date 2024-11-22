import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <h1 className="text-3xl font-bold text-center mt-8">Bem-vindo ao Futuro da Energia Limpa</h1>

      {/* Seção do Carrossel de Imagens */}
      <div className="carousel-container mt-8">
        <div className="carousel">
          {/* Adicione as imagens aqui */}
          <img src="caminho/para/sua/imagem1.jpg" alt="Imagem 1" className="carousel-image" />
          <img src="caminho/para/sua/imagem2.jpg" alt="Imagem 2" className="carousel-image" />
          <img src="caminho/para/sua/imagem3.jpg" alt="Imagem 3" className="carousel-image" />
          <img src="caminho/para/sua/imagem4.jpg" alt="Imagem 4" className="carousel-image" />
          {/* Continue adicionando imagens conforme necessário */}
        </div>
      </div>

      <p className="text-center mt-6">A revolução da energia limpa começa aqui. Junte-se a nós para um futuro mais sustentável!</p>
    </div>
  );
}

export default Home;
