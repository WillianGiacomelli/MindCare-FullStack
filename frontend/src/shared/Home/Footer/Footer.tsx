import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const FooterDefault = () => {
  return (
    <footer className="bg-white-personalized w-100 text-start mt-5 py-5 px-2">
      <Container>
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-3">
          <span>© 2025 MindCare. Todos os direitos reservados.</span>
          <div className="d-flex gap-3">
            <a href="/terms" className="text-decoration-none text-dark">
              Termos de Serviço
            </a>
            <a href="/privacy" className="text-decoration-none text-dark">
              Política de Privacidade
            </a>
            <a href="/contact" className="text-decoration-none text-dark">
              Contato
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterDefault;
