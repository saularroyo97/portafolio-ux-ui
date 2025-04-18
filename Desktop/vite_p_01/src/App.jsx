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
  const [copied, setCopied] = useState(false);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setModalOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("saularroyo97@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

      <button
        onClick={copyEmail}
        className="h-[43px] px-3 py-2.5 bg-[#424c51cc] text-white rounded-[30px] backdrop-blur-[3px] flex items-center border-none hover:bg-[#535f66cc] transition-all duration-200"
      >
        <span className="w-2 h-2 bg-[#00eb18] rounded-full mr-3"></span>
        <span className="font-['Inter',Helvetica] font-normal text-[17.6px] mr-2">
          {copied ? "¡Correo copiado!" : "Disponible"}
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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col"> {/* Añade estas clases */}

      {/* Header fijo (igual que en about) */}
<div className="sticky top-0 z-10 bg-white p-4 border-b border-neutral-200 rounded-t-2xl flex justify-between items-center">
  <h2 className="text-2xl font-bold text-neutral-900 mr-4">{selectedCard.title}</h2>
  <button
    onClick={closeModal}
    className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition shrink-0"
  >
    X Cerrar
  </button>
</div>

      {/* Contenido desplazable (envolver todo aquí) */}
      <div className="overflow-y-auto p-6 space-y-4"> {/* Añade overflow-y-auto */}

      

        {selectedCard.content.projects.map((project, idx) => (
          <div key={idx} className="border-b pb-4">
              <div className='flex justify-between items-center mb-4' >
           <h3 className="text-lg font-semibold text-neutral-900">{project.name}</h3> {/* Añade color */}
           <span className='w-[135px] h-[35px] px-2 py-px bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#d9d9d9] flex justify-center items-center gap-[3px] overflow-hidde' >{project.fecha}</span>
           </div>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover rounded-lg mb-4" // Mantén igual que en about
            />
            <p className="text-sm text-neutral-600 leading-relaxed">{project.description}</p> {/* Añade leading-relaxed */}
            <p className="text-sm text-neutral-600 leading-relaxed">{project.role}</p> {/* Añade leading-relaxed */}
          </div>
        ))}

      </div>

    </div>
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
      
      {/* Header fijo - Versión mejorada */}
      <div className="sticky top-0 z-10 bg-white p-4 border-b border-neutral-200 rounded-t-2xl flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900 mr-4">{selectedCard.title}</h2>
        <div className="flex gap-2">
          <a
            href="/Saul_Arroyo_Pozos-UX_UI_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition flex items-center"
          >
            Ver CV
          </a>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition"
          >
            X Cerrar
          </button>
        </div>
      </div>

      {/* Contenido desplazable - Mismo estilo que about */}
      <div className="overflow-y-auto p-6">
        <AccordionExperience />
      </div>

    </div>
  </div>
)}

  {/* Modal para "Sobre mí" */}
{selectedCard?.content?.type === 'about' && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col">
      
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 border-b border-neutral-200 rounded-t-2xl flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">Sobre Mí</h2>
        <button onClick={closeModal} className="p-2 hover:bg-neutral-100 rounded-full">
          ✕
        </button>
      </div>

      {/* Contenido con scroll */}
      <div className="overflow-y-auto p-6 space-y-16">  {/* Aumenté el espacio vertical */}
        {aboutData.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Columna izquierda (Imagen) */}
            <div className="md:w-5/12 w-full">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover rounded-xl "
              />
            </div>

            {/* Columna derecha (Contenido) */}
            <div className="md:w-7/12 w-full space-y-6">  {/* Más espacio entre elementos */}
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">{section.title.split(' ')[0]}</span>
                {section.title.replace(section.title.split(' ')[0], '')}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          </div>
        ))}
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
