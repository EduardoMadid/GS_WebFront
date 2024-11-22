import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importação do CSS do Swiper

function Home() {
  return (
    <div className="home-page flex flex-col min-h-screen">
      {/* Carrossel Swiper */}
      <div className="carousel-container mt-8 mb-12 w-full cursor-grab">
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
            <img src="../src/assets/a.jpeg" alt="Imagem 1" className="carousel-image w-full h-full object-cover" />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <img src="../src/assets/lampada.jpg" alt="Imagem 2" className="carousel-image w-full h-full object-cover" />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <img src="../src/assets/tecnologia.jpg" alt="Imagem 3" className="carousel-image w-full h-full object-cover" />
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <img src="../src/assets/robo.png" alt="Imagem 4" className="carousel-image w-full h-full object-cover" />
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <img src="../src/assets/nature.jpg" alt="Imagem 5" className="carousel-image w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Texto abaixo do carrossel */}
      <p className="text-center mt-6 text-xl font-semibold">A revolução da energia limpa começa aqui. Junte-se a nós para um futuro mais sustentável!</p>
    </div>
  );
}

export default Home;
