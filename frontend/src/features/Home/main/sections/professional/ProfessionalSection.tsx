import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import CustomCard from "../../../../../shared/Home/Card/CustomCard";

const ProfessionalSection = () => {
  const cardData = [
    {
      icon: "bi bi-people-fill text-primary",
      title: "Acesso a Pacientes",
      description:
        "Conecte-se com uma ampla base de pacientes que buscam apoio psicológico, expandindo sua prática profissional.",
    },
    {
      icon: "bi bi-calendar-check text-primary",
      title: "Agenda Flexível",
      description:
        "Gerencie sua agenda de forma prática, escolhendo os horários que melhor se adequam à sua rotina profissional.",
    },
    {
      icon: "bi bi-shield-lock text-primary",
      title: "Segurança e Privacidade",
      description:
        "Nossa plataforma garante a confidencialidade dos dados dos psicólogos e pacientes, promovendo um ambiente seguro para todos.",
    },
  ];

  return (
    <div className="bg-white w-100 text-start mt-5 py-5 px-2">
      <Container>
        <h3 className="text-bold fs-1 w-75 mb-2">
          Para psicólogos : Expanda sua prática e alcance mais pacientes
        </h3>
        <p>
          Junte-se a nossa plataforma e conecte-se com pacientes que precisam do
          seu apoio.
        </p>
        <Button
          className="flex-sm-column flex-md-row w-sm-100"
          variant="primary"
        >
          Saiba mais
        </Button>
        <div className="my-5 d-flex justify-content-center align-items-stretch gap-5 flex-wrap">
          {cardData.map((card, index) => (
            <CustomCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProfessionalSection;
