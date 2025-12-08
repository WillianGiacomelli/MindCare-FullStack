import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import scheduleApi from '../../../../services/scheduleApi';
import ScheduleCreator from '../../../../components/ScheduleCreator';

interface AppointmentSlot {
    id: string;
    date: string;
    isBooked: boolean;
    patientName?: string;
}

const PsychologistDashboard: React.FC = () => {
    const { user, logout } = useContext(AuthContext);
    const [slots, setSlots] = useState<AppointmentSlot[]>([]);

    const fetchSchedule = async () => {
        if (!user?.id) return;
        try {
            const response = await scheduleApi.get(`/appointments/my-schedule/${user.id}`);
            setSlots(response.data);
        } catch (error) {
            console.error('Erro ao buscar agenda:', error);
        }
    };

    useEffect(() => {
        fetchSchedule();
    }, [user]);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Painel do Psicólogo</h2>
                <div>
                    <span className="me-3">Olá, Dr(a). {user?.name}</span>
                    <button className="btn btn-outline-danger btn-sm" onClick={logout}>Sair</button>
                </div>
            </div>

            <div className="d-flex justify-content-end mb-4">
                {user?.id && (
                    <ScheduleCreator psychologistId={user.id} onSuccess={fetchSchedule} />
                )}
            </div>

            <div className="card shadow-sm">
                <div className="card-header">
                    <h5 className="mb-0">Minha Agenda</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Data e Hora</th>
                                <th>Status</th>
                                <th>Paciente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slots.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="text-center py-3">Nenhum horário cadastrado.</td>
                                </tr>
                            ) : (
                                slots.map(slot => (
                                    <tr key={slot.id}>
                                        <td>{new Date(slot.date).toLocaleString()}</td>
                                        <td>
                                            {slot.isBooked ? (
                                                <span className="badge bg-warning text-dark">Reservado</span>
                                            ) : (
                                                <span className="badge bg-success">Livre</span>
                                            )}
                                        </td>
                                        <td>{slot.patientName || '-'}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PsychologistDashboard;
