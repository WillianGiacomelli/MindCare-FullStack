import React, { useState } from 'react';
import scheduleApi from '../services/scheduleApi';

interface ScheduleCreatorProps {
    psychologistId: string;
    onSuccess: () => void;
}

const ScheduleCreator: React.FC<ScheduleCreatorProps> = ({ psychologistId, onSuccess }) => {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOpen = () => setShowModal(true);

    const handleClose = () => {
        setShowModal(false);
        setDate('');
        setTime('');
    };

    const handleSubmit = async () => {
        if (!date || !time) {
            alert('Por favor, preencha data e hora.');
            return;
        }

        setLoading(true);
        const dateTime = `${date}T${time}:00`;

        try {
            await scheduleApi.post('/appointments/slots', {
                psychologistId,
                date: dateTime
            });
            alert('Horário criado com sucesso!');
            onSuccess();
            handleClose();
        } catch (error) {
            console.error('Erro ao criar horário:', error);
            alert('Erro ao criar horário. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button className="btn btn-primary" onClick={handleOpen}>
                Novo Horário
            </button>

            {showModal && (
                <>
                    <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050 }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Disponibilizar Horário</h5>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Data</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Hora de Início</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                    >
                                        {loading ? 'Carregando...' : 'Confirmar Disponibilidade'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ScheduleCreator;
