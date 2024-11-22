import React from 'react';

function Solucao() {
  return (
    <div className="p-6 bg-green-100 text-center">
      <h2 className="text-2xl font-bold mb-6">Solução: Energia Limpa para um Futuro Sustentável</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Introdução */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">A Importância da Energia Limpa</h3>
          <p className="text-sm text-gray-700">
            A crescente demanda por energia e os impactos negativos das fontes tradicionais de energia, como os combustíveis fósseis, têm destacado a importância da transição para fontes de energia limpa.
          </p>
        </div>

        {/* Card 2: Solução Proposta */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Nossa Solução: Energia Solar</h3>
          <p className="text-sm text-gray-700">
            A energia solar, junto com sistemas de armazenamento inteligente, representa uma das soluções mais promissoras para a geração de energia limpa e renovável.
          </p>
        </div>

        {/* Card 3: Funcionamento */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Como Funciona?</h3>
          <p className="text-sm text-gray-700">
            Placas solares convertem a luz solar em energia elétrica, que é armazenada em baterias inteligentes, permitindo o uso durante o dia e a noite, de maneira eficiente e sustentável.
          </p>
        </div>

        {/* Card 4: Benefícios */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Impactos e Benefícios</h3>
          <ul className="text-sm text-gray-700">
            <li>Redução das emissões de gases de efeito estufa.</li>
            <li>Independência energética para comunidades.</li>
            <li>Criação de novos empregos no setor renovável.</li>
            <li>Preservação dos recursos naturais.</li>
          </ul>
        </div>

        {/* Card 5: Futuro */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">O Futuro com Energia Limpa</h3>
          <p className="text-sm text-gray-700">
            A transição para uma economia de energia limpa é crucial para combater as mudanças climáticas e garantir um planeta mais saudável para as gerações futuras.
          </p>
        </div>

        {/* Card 6: Educação e Conscientização */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Educação e Conscientização</h3>
          <p className="text-sm text-gray-700">
            A educação sobre sustentabilidade e energias renováveis é essencial para aumentar a conscientização e incentivar a adoção de práticas mais responsáveis em todos os níveis da sociedade.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mt-6">
        Com soluções como a energia solar e outras fontes renováveis, podemos construir um futuro mais equilibrado e próspero para todos, promovendo um impacto positivo no meio ambiente e na sociedade.
      </p>
    </div>
  );
}

export default Solucao;
