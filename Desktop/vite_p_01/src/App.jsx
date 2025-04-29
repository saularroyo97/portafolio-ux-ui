import { useState } from 'react';
import { Navbar, Container, Nav, Button, Row, Col, Card, Accordion } from 'react-bootstrap';
import fuentesFigma from './img/fuentes-figma_2.jpg';
import uno_fuentes from './img/uno_fuentes-figma_1.jpg';
import tres_fuentes from './img/tres_fuentes-figma.jpg';
import cuart_fuentes from './img/cuart_fuentes-figma.jpg';
import cinco_fuentes from './img/cinco_fuentes-figma.jpg';
import seis_fuentes from './img/seis_fuentes-figma.jpg';
import siete_fuentes from './img/siete_fuentes-figma.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const navLinks = [
    { title: 'Works', href: '#' },
    { title: 'Experience', href: '#' },
    { title: 'About', href: '#' },
    { title: 'Contacts', href: '#' },
  ];



  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="nav-header">
        <Container>
          <Navbar.Brand href="#">SaulArroyo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link, index) => (
                <Nav.Link key={index} href={link.href} className="nav-link">
                  {link.title}
                </Nav.Link>
              ))}
              <Button variant="outline-light" className="cv-button">
                CV
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="mt-5">
        <Container className="header-section mb-5">
          <Row>
            <Col xs={12}>
              <h1 className="display-4">
              Senior UI/UX Designer & Front-End Specialist
              | 6+ años de experiencia en diseño de interfaces, aplicaciones web y móviles, especializado en UX/UI y front-end maquetador en React.
              </h1>
            </Col>
          </Row>
        </Container>

        <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h3 className="fw-bold">Save Box</h3>
          <span className="badge bg-secondary fs-6">2024</span>
        </div>
        <p className="mb-4">
          Save Box es una aplicación móvil diseñada para ayudar a los usuarios a gestionar sus ahorros y
          finanzas personales de forma sencilla. Con un enfoque visual e interactivo, los usuarios pueden
          crear metas de ahorro y realizar un seguimiento de su progreso de manera intuitiva.
        </p>

        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="p-0">
            <img
              src={fuentesFigma}
              alt="Save Box App Screenshots"
              className="w-100"
             
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h3 className="fw-bold">Save Box</h3>
          <span className="badge bg-secondary fs-6">2024</span>
        </div>
        <p className="mb-4">
          Save Box es una aplicación móvil diseñada para ayudar a los usuarios a gestionar sus ahorros y
          finanzas personales de forma sencilla. Con un enfoque visual e interactivo, los usuarios pueden
          crear metas de ahorro y realizar un seguimiento de su progreso de manera intuitiva.
        </p>

        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="p-0">
            <img
              src={uno_fuentes}
              alt="Save Box App Screenshots"
              className="w-100"
             
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h3 className="fw-bold">Save Box</h3>
          <span className="badge bg-secondary fs-6">2024</span>
        </div>
        <p className="mb-4">
          Save Box es una aplicación móvil diseñada para ayudar a los usuarios a gestionar sus ahorros y
          finanzas personales de forma sencilla. Con un enfoque visual e interactivo, los usuarios pueden
          crear metas de ahorro y realizar un seguimiento de su progreso de manera intuitiva.
        </p>

        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="p-0">
            <img
              src={tres_fuentes}
              alt="Save Box App Screenshots"
              className="w-100"
             
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h3 className="fw-bold">Save Box</h3>
          <span className="badge bg-secondary fs-6">2024</span>
        </div>
        <p className="mb-4">
          Save Box es una aplicación móvil diseñada para ayudar a los usuarios a gestionar sus ahorros y
          finanzas personales de forma sencilla. Con un enfoque visual e interactivo, los usuarios pueden
          crear metas de ahorro y realizar un seguimiento de su progreso de manera intuitiva.
        </p>

        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="p-0">
            <img
              src={cuart_fuentes}
              alt="Save Box App Screenshots"
              className="w-100"
             
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h3 className="fw-bold">Save Box</h3>
          <span className="badge bg-secondary fs-6">2024</span>
        </div>
        <p className="mb-4">
          Save Box es una aplicación móvil diseñada para ayudar a los usuarios a gestionar sus ahorros y
          finanzas personales de forma sencilla. Con un enfoque visual e interactivo, los usuarios pueden
          crear metas de ahorro y realizar un seguimiento de su progreso de manera intuitiva.
        </p>

        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="p-0">
            <img
              src={cinco_fuentes}
              alt="Save Box App Screenshots"
              className="w-100"
             
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h3 className="fw-bold">Save Box</h3>
          <span className="badge bg-secondary fs-6">2024</span>
        </div>
        <p className="mb-4">
          Save Box es una aplicación móvil diseñada para ayudar a los usuarios a gestionar sus ahorros y
          finanzas personales de forma sencilla. Con un enfoque visual e interactivo, los usuarios pueden
          crear metas de ahorro y realizar un seguimiento de su progreso de manera intuitiva.
        </p>

        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="p-0">
            <img
              src={seis_fuentes}
              alt="Save Box App Screenshots"
              className="w-100"
             
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <h3 className="fw-bold">Save Box</h3>
          <span className="badge bg-secondary fs-6">2024</span>
        </div>
        <p className="mb-4">
          Save Box es una aplicación móvil diseñada para ayudar a los usuarios a gestionar sus ahorros y
          finanzas personales de forma sencilla. Con un enfoque visual e interactivo, los usuarios pueden
          crear metas de ahorro y realizar un seguimiento de su progreso de manera intuitiva.
        </p>

        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="p-0">
            <img
              src={siete_fuentes}
              alt="Save Box App Screenshots"
              className="w-100"
             
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="experience-section py-5">
  <div className="container">
    <div className="row">
      {/* Columna Izquierda */}
      <div className="col-md-4 mb-5 mb-md-0">
        <div className="sticky-top" style={{ top: '100px' }}>
          <h2 className="display-5 fw-bold mb-4">Experience</h2>
          <button className="btn btn-dark btn-lg w-100">
            Download CV
          </button>
        </div>
      </div>

      {/* Columna Derecha - Acordeón Personalizado */}
      <div className="col-md-8">
        <Accordion defaultActiveKey="0">
          {/* Ítem 1 */}
          <Accordion.Item eventKey="0" className="mb-3">
            <Accordion.Header className="custom-accordion-header">
              <div className="d-flex w-100 align-items-center pe-3">
                <h3 className="h4 mb-0">Frontend Developer</h3>
                <span className="ms-auto text-muted">2021 - Present</span>
              </div>
            </Accordion.Header>
            <Accordion.Body className="pt-4">
              <div className="mb-3">
                <span className="badge bg-dark me-2">Google</span>
                <small className="text-muted">Remoto · Tiempo completo</small>
              </div>
              <p className="mb-0">Desarrollo de aplicaciones web con React y TypeScript...</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Ítem 2 */}
          <Accordion.Item eventKey="1" className="mb-3">
            <Accordion.Header className="custom-accordion-header">
              <div className="d-flex w-100 align-items-center pe-3">
                <h3 className="h4 mb-0">UI Engineer</h3>
                <span className="ms-auto text-muted">2019 - 2021</span>
              </div>
            </Accordion.Header>
            <Accordion.Body className="pt-4">
              {/* Contenido */}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  </div>
</section>
    
    
    
    
    
      </main>
    </>
  );
}

export default App;