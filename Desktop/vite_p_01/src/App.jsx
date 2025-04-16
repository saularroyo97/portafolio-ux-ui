import { useState } from 'react';
import { Card, CardContent } from './components/card';
import Modal from './components/modal';
import { navigationCards } from './data/navigationCards';
import aboutData from './data/aboutData';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionExperience from "./components/AccordionExperience";
import SocialMedia from './components/SocialMedia';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#131313]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <header className="flex w-full items-center justify-between mb-[126px]">
  <div className="flex items-center gap-2">
    <div className="w-[59.72px] h-[59.72px] bg-[#ffb800] rounded-full flex items-center justify-center">
      <img
        src="/logo_01.png"
        alt="Saul Arroyo Logo"
        className="w-[42px] h-[34px] object-contain"
      />
    </div>
    <h1 className="font-['Inter',Helvetica] font-normal text-white text-2xl">
      Saul Arroyo
    </h1>
  </div>

  <button className="h-[43px] px-3 py-2.5 bg-[#424c51cc] text-white rounded-[30px] backdrop-blur-[3px] flex items-center border-none">
    <span className="w-2 h-2 bg-[#00eb18] rounded-full mr-3"></span>
    <span className="font-['Inter',Helvetica] font-normal text-[17.6px]">
      Available
    </span>
  </button>
</header>


        {/* Hero */}
        <section className="text-center mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[222px] p-4 w-full text-center md:text-left">
  <h2 className="font-['Roboto',Helvetica] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
    <span className="text-white">I'm Saúl — </span>
    <span className="text-[#ffb800]">UX/UI Designer <br className="hidden md:block" /></span>
    <span className="text-white">& Front-End Specialist</span>
  </h2>

  <img
    className="w-8 h-8 md:w-[39.13px] md:h-[42.13px]"
    alt="Down arrow"
    src="/vector.svg"
  />
</div>
        </section>

        {/* Cards */}
        <nav className="flex gap-[1rem] justify-center flex-wrap p-[1rem]">
  {navigationCards.map((card) => (
    <Card
      key={card.id}
      onClick={() => openModal(card)}
      className="w-[280px] h-[280px] bg-[#1f1f1f] rounded-[20px] border-none overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-transparent cursor-pointer custom-card"
    >
      <CardContent className="p-0 h-full">
        <div className="relative h-full flex flex-col items-center justify-between group pb-4"> {/* Added justify-between y pb-4 */}
          {card.backgroundImage && (
            <div
              className="w-[160px] h-[160px] mt-6 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" // Reduced size and margin
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            />
          )}
          
          {card.logo && (
            <img
              className="w-[160px] h-[160px] mt-6 object-contain transition-opacity duration-300 hover:opacity-80" // Reduced size and margin
              alt={card.title || "Logo"}
              src={card.logo}
            />
          )}
          
          <p className="font-medium text-[#fff] text-2xl tracking-tight px-4 text-center"> {/* Removed absolute positioning */}
            {card.title}
          </p>
         
        </div>
      </CardContent>
    </Card>
  ))}
</nav>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
  {/* Modal para proyectos */}
  {selectedCard?.content?.type === 'projects' && (
    <div className="p-6 space-y-4">
     {/* Header fijo */}
     <div className="sticky top-0 z-10 bg-white p-4 border-b border-neutral-200 rounded-t-2xl flex justify-end">
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition"
        >
          X Cerrar
        </button>
      </div>
      <h2 className="text-2xl font-bold">{selectedCard.title}</h2>
      {selectedCard.content.projects.map((project, idx) => (
        <div key={idx} className="border-b pb-4">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm text-neutral-600">{project.description}</p>
        </div>
      ))}
    </div>
  )}

  {/* Modal para texto simple */}
  {selectedCard?.content?.type === 'text' && (
    <div className="p-6">
     {/* Header fijo */}
     <div className="sticky top-0 z-10 bg-white p-4 border-b border-neutral-200 rounded-t-2xl flex justify-end">
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition"
        >
          X Cerrar
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-2">{selectedCard.title}</h2>
      <p className="text-neutral-700">{selectedCard.content.text}</p>
    </div>
  )}


  {/* Modal para experiencia con accordion */}
  {selectedCard?.content?.type === 'accordion' && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col">

      {/* Header fijo */}
      <div className="sticky top-0 z-10 bg-white p-4 border-b border-neutral-200 rounded-t-2xl flex justify-between items-center gap-4">
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition"
        >
          X Cerrar
        </button>
        <a
          href="/tu-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition"
        >
          CV
        </a>
      </div>

      {/* Contenido desplazable */}
      <div className="overflow-y-auto p-6 space-y-6">
        <h2 className="text-2xl font-bold">{selectedCard.title}</h2>
        <AccordionExperience />
      </div>

    </div>
  </div>
)}

  {/* Modal para "About" */}
  {selectedCard?.content?.type === 'about' && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col">

      {/* Header fijo */}
      <div className="sticky top-0 z-10 bg-white p-4 border-b border-neutral-200 rounded-t-2xl flex justify-end">
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition"
        >
          X Cerrar
        </button>
      </div>

      {/* Contenido desplazable */}
      <div className="overflow-y-auto p-6 space-y-6 text-center">
        <h2 className="text-2xl font-bold text-neutral-900">{aboutData.title}</h2>

        <img
          src={aboutData.image}
          alt="Sobre mí"
          className="w-4/5 mx-auto h-auto object-cover rounded-lg"
        />

        <p className="text-neutral-700 leading-relaxed text-base">
          {aboutData.text}
        </p>
      </div>

    </div>
  </div>
)}




</Modal>

     
        {/* Botón de contacto */}
        <div className="flex flex-col items-center justify-center mt-4">
  <div className="flex justify-center mt-16">
    <SocialMedia className="custom_social-media" />
  </div>
</div>
      </div>
    </main>
  );
}

export default App;
