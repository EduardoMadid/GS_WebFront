import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importação do CSS do Swiper

function Home() {
  return (
    <div className="home-page">
      {/* Carrossel Swiper */}
      <div className="carousel-container mt-8">
        <Swiper
          spaceBetween={50} // Espaço entre os slides
          slidesPerView={1} // Número de slides visíveis ao mesmo tempo
          loop={true} // Para fazer o loop infinito dos slides
          autoplay={{
            delay: 2500, // Tempo em milissegundos antes de trocar o slide
            disableOnInteraction: false, // Para não pausar o autoplay se o usuário interagir
          }}
          navigation={true} // Ativa os botões de navegação
          pagination={{ clickable: true }} // Ativa a navegação por pontos
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <img src="../src/assets/a.jpeg" alt="Imagem 1" className="carousel-image" />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <img src="../src/assets/lampada.jpg" alt="Imagem 2" className="carousel-image" />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <img src="../src/assets/tecnologia.jpg" alt="Imagem 3" className="carousel-image" />
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <img src="../src/assets/robo.png" alt="Imagem 4" className="carousel-image" />
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <img src="../src/assets/nature.jpg" alt="Imagem 5" className="carousel-image" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Texto abaixo do carrossel */}
      <p className="text-center mt-6 text-xl">A revolução da energia limpa começa aqui. Junte-se a nós para um futuro mais sustentável!</p>

      {/* Estilo inline */}
      <style jsx>{`
        .home-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh; /* Garante que o conteúdo ocupe pelo menos a altura da tela */
        }

        .carousel-container {
          width: 100%;
          cursor: grab;
          height: auto; /* Ajuste a altura conforme necessário para se adequar ao design */
          position: relative; /* Necessário para que os elementos de navegação apareçam corretamente */
          margin-bottom: 50px; /* Espaço entre o carrossel e o footer */
        }

        .carousel-image {
          width: 100%; /* Faz a imagem ocupar toda a largura do slide */
          height: 50%; /* Faz a imagem ocupar toda a altura do slide */
          
        }

        .text-center {
          text-align: center;
        }

        .mt-8 {
          margin-top: 2rem; /* Distância entre os elementos */
        }

        .text-xl {
          font-size: 1.25rem; /* Ajuste o tamanho da fonte conforme necessário */
        }

        .font-bold {
          font-weight: bold;
        }

        .text-3xl {
          font-size: 2rem; /* Ajuste o tamanho do título */
        }

        /* Estilo do Footer */
        footer {
        background-color: #282c34;
        color: white;
        padding: 20px;
        text-align: center;
        }
      `}</style>
    </div>
);
}

export default Home;
