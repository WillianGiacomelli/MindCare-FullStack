// src/pages/PatientDashboard.jsx
import React, { useState } from 'react';

const MOCK_SLOTS = [
  { id: 1, time: '09:00', doctor: 'Dr. Silva', available: true },
  { id: 2, time: '10:00', doctor: 'Dr. Silva', available: false }, 
  { id: 3, time: '11:00', doctor: 'Dr. Silva', available: true },
  { id: 4, time: '14:00', doctor: 'Dr. Silva', available: true },
  { id: 5, time: '15:00', doctor: 'Dr. Silva', available: true },
  { id: 6, time: '16:00', doctor: 'Dr. Silva', available: false },
];

const PatientDashboard = () => {
  const [slots, setSlots] = useState(MOCK_SLOTS);

  const handleBook = (id: number) => {
    // Lógica futura de agendamento
    setSlots(slots.map(s => s.id === id ? {...s, available: false} : s));
    alert("Horário pré-reservado!");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-light">Agendar Sessão</h2>
      <p className="text-muted mb-5">Selecione um horário disponível para sua consulta.</p>

      <div className="row g-3">
        {slots.map((slot) => (
          <div key={slot.id} className="col-6 col-md-4 col-lg-3">
            <div 
              className={`card h-100 text-center border-0 shadow-sm ${slot.available ? '' : 'bg-light text-muted'}`}
            >
              <div className="card-body">
                <h5 className="card-title display-6 mb-3">{slot.time}</h5>
                <p className="card-text small mb-3">{slot.doctor}</p>
                
                {slot.available ? (
                  <button 
                    onClick={() => handleBook(slot.id)}
                    className="btn btn-outline-primary w-100 btn-sm"
                  >
                    Reservar
                  </button>
                ) : (
                  <button className="btn btn-secondary w-100 btn-sm" disabled>
                    Ocupado
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;