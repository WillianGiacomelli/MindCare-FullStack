import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import scheduleApi from '../../../../services/scheduleApi';

interface AvailableSlot {
    id: string;
    date: string;
    psychologistName: string;
}

const PatientDashboard: React.FC = () => {
    const { user, logout } = useContext(AuthContext);
    const [slots, setSlots] = useState<AvailableSlot[]>([]);

    const fetchAvailableSlots = async () => {
        try {
            const response = await scheduleApi.get('/appointments/available');
            setSlots(response.data);
        } catch (error) {
            console.error('Erro ao buscar horários disponíveis:', error);
        }
    };

    useEffect(() => {
        fetchAvailableSlots();
    }, []);

    const handleBookSlot = async (slotId: string) => {
        if (!user) return;

        // Confirmação simples
        if (!window.confirm('Confirma o agendamento?')) return;

        try {
            await scheduleApi.put(`/appointments/book/${slotId}`, {
                patientId: user.id,
                patientName: user.name
            });
            alert('Agendamento realizado com sucesso!');
            fetchAvailableSlots(); // Recarrega a lista para remover o horário agendado
        } catch (error) {
            console.error('Erro ao agendar:', error);
            alert('Erro ao realizar agendamento.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Painel do Paciente</h2>
                <div>
                    <span className="me-3">Olá, {user?.name}</span>
                    <button className="btn btn-outline-danger btn-sm" onClick={logout}>Sair</button>
                </div>
            </div>

            <h4 className="mb-3">Horários Disponíveis</h4>

            {slots.length === 0 ? (
                <div className="alert alert-info">
                    Nenhum horário disponível no momento.
                </div>
            ) : (
                <div className="row">
                    {slots.map(slot => (
                        <div className="col-md-4 mb-3" key={slot.id}>
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">Psicólogo: {slot.psychologistName}</h5>
                                    <p className="card-text fs-5">
                                        <strong>Data:</strong> {new Date(slot.date).toLocaleDateString()} <br />
                                        <strong>Hora:</strong> {new Date(slot.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                    <button
                                        className="btn btn-primary w-100 mt-2"
                                        onClick={() => handleBookSlot(slot.id)}
                                    >
                                        Agendar Consulta
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PatientDashboard;
