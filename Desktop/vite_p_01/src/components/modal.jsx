import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Cerrar con la tecla ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[20px] max-w-2xl w-full mx-4 overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Contenedor con scroll si hay mucho contenido */}
        <div className="max-h-[80vh] overflow-y-auto p-4 custom-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
