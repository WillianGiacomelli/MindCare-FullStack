import React from "react";
import { Container } from "react-bootstrap";

const Testimonial = () => {
  return (
    <Container>
      <div className="w-100 text-center mt-5 py-5 px-2">
        <h3 className="text-bold fs-1 w-75 mb-2 w-100">
          O que nossos usuários dizem
        </h3>
        <p>
          Histórias reais de pessoas que encontraram apoio e transformação
          através da nossa plataforma.
        </p>
      </div>
    </Container>
  );
};

export default Testimonial;
