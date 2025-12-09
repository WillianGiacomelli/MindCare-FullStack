import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import RegisterPsychologist from '../psychologist/RegisterPsychologist';
import { MemoryRouter } from 'react-router-dom';
import api from '../../../../services/api';


vi.mock('../../../../services/api', () => ({
    default: {
        post: vi.fn(),
    },
}));


const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

const renderRegister = () => {
    return render(
        <MemoryRouter>
            <RegisterPsychologist />
        </MemoryRouter>
    );
};

describe('RegisterPsychologist Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.spyOn(window, 'alert').mockImplementation(() => { });
    });

    it('renders registration form', () => {
        renderRegister();
        expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/sou psicólogo/i)).toBeInTheDocument();

        expect(screen.queryByLabelText(/registro crp/i)).not.toBeInTheDocument();
    });

    it('toggles CRP field when checkbox is checked', () => {
        renderRegister();
        const checkbox = screen.getByLabelText(/sou psicólogo/i);

        fireEvent.click(checkbox);
        expect(screen.getByLabelText(/registro crp/i)).toBeInTheDocument();

        fireEvent.click(checkbox);
        expect(screen.queryByLabelText(/registro crp/i)).not.toBeInTheDocument();
    });

    it('validates required fields', async () => {
        renderRegister();
        const submitButton = screen.getByRole('button', { name: /criar conta/i });
        fireEvent.click(submitButton);

        // Required error messages should appear
        // Note: The specific text depends on the component's implementation logic/validation messages
        // Based on analysis: "Nome é obrigatório"
        await waitFor(() => {
            // We can check for validation feedback
            // This might be tricky if the text is generic, but let's check input validity or specific message
            // The component has invalid-feedback div
            // Simple check: API should not be called
            expect(api.post).not.toHaveBeenCalled();
        });
    });

    it('submits valid patient registration', async () => {
        renderRegister();

        fireEvent.change(screen.getByLabelText(/nome completo/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'password123' } });

        const submitButton = screen.getByRole('button', { name: /criar conta/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(api.post).toHaveBeenCalledWith('/Auth/register', {
                nomeCompleto: 'John Doe',
                email: 'john@example.com',
                senha: 'password123',
                tipoUsuario: 'Paciente',
                crp: null
            });
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });

    it('submits valid psychologist registration', async () => {
        renderRegister();

        fireEvent.change(screen.getByLabelText(/nome completo/i), { target: { value: 'Dr. Phil' } });
        fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'phil@example.com' } });
        fireEvent.click(screen.getByLabelText(/sou psicólogo/i));
        fireEvent.change(screen.getByLabelText(/registro crp/i), { target: { value: '12345' } });
        fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'securepass' } });

        const submitButton = screen.getByRole('button', { name: /criar conta/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(api.post).toHaveBeenCalledWith('/Auth/register', {
                nomeCompleto: 'Dr. Phil',
                email: 'phil@example.com',
                senha: 'securepass',
                tipoUsuario: 'Psicologo',
                crp: '12345'
            });
        });
    });
});
