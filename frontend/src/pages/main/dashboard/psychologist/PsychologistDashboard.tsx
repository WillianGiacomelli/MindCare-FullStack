// src/pages/PsychologistDashboard.jsx
import React from 'react';

const MOCK_APPOINTMENTS = [
  { id: 1, time: '10:00', patientName: 'João da Silva', status: 'Confirmado', type: 'Terapia Cognitiva' },
  { id: 2, time: '15:30', patientName: 'Maria Oliveira', status: 'Pendente', type: 'Primeira Consulta' },
];

const PsychologistDashboard = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-light">Minha Agenda</h2>
        <button className="btn btn-success">
          <i className="bi bi-plus-circle me-2"></i>+ Novo Horário
        </button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="ps-4">Horário</th>
                  <th scope="col">Paciente</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="text-end pe-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_APPOINTMENTS.map((appt) => (
                  <tr key={appt.id}>
                    <td className="ps-4 fw-bold">{appt.time}</td>
                    <td>{appt.patientName}</td>
                    <td><span className="badge bg-info text-dark">{appt.type}</span></td>
                    <td>
                      <span className={`badge ${appt.status === 'Confirmado' ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {appt.status}
                      </span>
                    </td>
                    <td className="text-end pe-4">
                      <button className="btn btn-sm btn-outline-secondary me-2">
                        Prontuário
                      </button>
                      <button className="btn btn-sm btn-primary">
                        Iniciar Vídeo
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologistDashboard;