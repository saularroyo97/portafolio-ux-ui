import { useState } from 'react';
import { Card, CardContent } from './components/card';
import Modal from './components/modal';
import { navigationCards } from './data/navigationCards';
import aboutData from './data/aboutData';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionExperience from "./components/AccordionExperience";
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
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <header className="mb-20 flex items-center justify-center gap-4">
          <img
            className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110"
            src="/logo_01.png"
            alt="Logo personal"
          />
          <h1 className="text-3xl font-light text-neutral-900 tracking-tight">
            Saul Arroyo
          </h1>
        </header>

        {/* Hero */}
        <section className="text-center mb-16">
          <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight text-neutral-900 md:text-5xl">
          Señior UI/UX Designer & Front-End Specialist
            <span className="block mt-4 text-2xl font-normal text-neutral-600">
            | 6+ años de experiencia en diseño de interfaces, aplicaciones web y móviles, especializado en UX/UI y front-end maquetador en React.
            </span>
          </h2>
        </section>

        {/* Cards */}
        <nav  className="flex gap-[1rem] justify-center flex-wrap p-[1rem]">
  {navigationCards.map((card) => (
    <Card
      key={card.id}
      onClick={() => openModal(card)} // Asegúrate de que openModal esté definido
      className="w-[280px] h-[280px] bg-[#f7f7f7] rounded-[20px] border-2 border-[#f1f1f1] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-transparent cursor-pointer"
    >
      <CardContent className="p-0 h-full">
        <div className="relative h-full flex flex-col items-center group">
          {/* Mejor manejo de imágenes condicionales */}
          {card.backgroundImage && (
            <div
              className="w-[190px] h-[190px] mt-8 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            />
          )}
          
          {card.logo && ( // Si usas una propiedad "logo" en tu objeto
            <img
              className="w-[190px] h-[190px] mt-12 transition-opacity duration-300 hover:opacity-80"
              alt={card.title || "Logo"} // Mejor accesibilidad
              src={card.logo}
            />
          )}
          
          <p className="absolute bottom-10 font-medium text-[#222222] text-lg tracking-tight">
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

  {/* Modal para contacto */}
  {selectedCard?.content?.type === 'contact' && (
    <div className="p-6 text-center">
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
      <p className="text-neutral-600 mt-2">{selectedCard.content.text}</p>
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
        <div className="flex justify-center mt-16">
          <button className="px-8 py-4 bg-neutral-900 text-white rounded-full text-sm font-medium tracking-wide hover:bg-neutral-800 transition-all duration-300 transform hover:scale-[1.02]">
          Email
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
