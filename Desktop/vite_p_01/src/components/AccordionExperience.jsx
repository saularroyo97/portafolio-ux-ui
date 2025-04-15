import Accordion from 'react-bootstrap/Accordion';

const AccordionExperience = () => {
  // Datos estructurados para mejor mantenimiento
  const experienceItems = [
    {
      id: 0,
      company: "Bort de Brocaster",
      position: "Diseñador UX/UI",
      duration: "Dic de 2024 - Abril de 2025",
      content: `• Lideré la estrategia UX para una plataforma multicanal nacional, diseñando flujos de usuario basados en mapas de empatía y testeos con más de 100 usuarios.
• Arquitectura de información: Diseñé mapas de navegación para el checkout (tienda online) y el sistema de facturación, reduciendo abandonos en un 25 % tras iteraciones con usuarios.
• Integración UX-APIs: Prototipé flujos de registro y uso de IA en Figma, priorizando accesibilidad y feedback visual en interacciones críticas.
• Validación con usuarios: Realicé pruebas A/B en prototipos de alta fidelidad, optimizando la tasa de conversión en un 18 %.`
    },
    {
      id: 1,
      company: "Finvero · CDMX",
      position: "Diseñador UX/UI",
      duration: "Oct 2023 - Dic 2024",
      content: `• Diseñé productos fintech con IA, desde investigación (entrevistas a usuarios) hasta prototipos interactivos, logrando un NPS de +40 en testeos.
• Desarrollé un score de crédito basado en UX Research, identificando 3 pain points clave en flujos de préstamos mediante user journey maps.
• Prototipado iterativo: Creé más de 15 prototipos en baja y alta fidelidad, validados con más de 200 usuarios (Maze), priorizando la reducción de fricción cognitiva.
• Modelos de decisión centrados en el usuario: Implementé card sorting para simplificar procesos de aprobación, logrando 30 % menos errores.`
    },
    {
      id: 2,
      company: "Skandia · CDMX",
      position: "Diseñador UX/UI",
      duration: "Mayo 2022 - Oct 2023",
      content: `• Lanzamiento de la app "Save Box" (ahorro para jóvenes) con user flows basados en Jobs To Be Done, logrando 65 % de retención en 3 meses.
• Diseño orientado a métricas: Optimicé landing pages mediante heatmaps y pruebas de scroll, aumentando conversiones en un 70 %.
• Investigación cualitativa: Conduje 5 focus groups para validar nuevos productos de ahorro, priorizando pain points de millennials.`
    },
    {
      id: 3,
      company: "Onena · CDMX",
      position: "Diseñador UX/UI",
      duration: "Ene 2022 - May 2022",
      content: `• Rediseño UX/UI de e-commerce basado en análisis de Google Analytics y testeos de usabilidad, logrando 30 % más ventas.
• User flows mobile-first: Diseñé mapas de navegación optimizados para dispositivos móviles, reduciendo el tiempo de compra en 40 %.`
    },
    {
      id: 4,
      company: "Daltech · CDMX",
      position: "Diseñador UX/UI",
      duration: "Sep 2021 - Dic 2021",
      content: `• Rediseño de tienda online aplicando principios de UX Writing y jerarquía visual, aumentando conversiones en 25 %.
• Flujos para app de ventas rápidas: Prototipado en Figma con base en user personas del sector retail, testeado con 50 usuarios.`
    }
  ];

  return (
    <Accordion defaultActiveKey="0">
      {experienceItems.map((item) => (
        <Accordion.Item 
          key={item.id}
          eventKey={String(item.id)}
          className="bg-white border border-black rounded mb-2"
        >
          <Accordion.Header className="text-black flex justify-between">
            <div className="flex gap-2 w-full">
              <span className="font-medium flex-1">{item.company}</span>
              <span className="flex-1">{item.position}</span>
              <span className="flex-1 text-right">{item.duration}</span>
            </div>
          </Accordion.Header>
          
          <Accordion.Body className="text-gray-700">
            {item.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-3 last:mb-0">
                {paragraph.trim()}
              </p>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionExperience;