import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Login from '../Login';
import { AuthContext } from '../../../../context/AuthContext';
import { MemoryRouter } from 'react-router-dom';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock AuthContext values
const mockLogin = vi.fn();
// We use a getter to ensure fresh reference or controllable state if needed
const getMockAuthContext = () => ({
    user: null,
    login: mockLogin,
    logout: vi.fn(),
    authenticated: false,
    loading: false,
});

const renderLogin = () => {
    return render(
        <AuthContext.Provider value={getMockAuthContext()}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </AuthContext.Provider>
    );
};

describe('Login Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        // window.alert is mocked in setupTests.ts
    });

    it('renders login form correctly', () => {
        renderLogin();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /^entrar$/i })).toBeInTheDocument();
    });

    it('updates input fields', async () => {
        renderLogin();
        const user = userEvent.setup();
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/senha/i);

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');

        expect(emailInput).toHaveValue('test@example.com');
        expect(passwordInput).toHaveValue('password123');
    });

    it('calls login function with correct credentials', async () => {
        mockLogin.mockResolvedValue({ success: true });
        renderLogin();
        const user = userEvent.setup();

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/senha/i);
        const submitButton = screen.getByRole('button', { name: /^entrar$/i });

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');
        await user.click(submitButton);

        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
        });
    });

    it('navigates to home on successful login', async () => {
        mockLogin.mockResolvedValue({ success: true });
        renderLogin();
        const user = userEvent.setup();

        const submitButton = screen.getByRole('button', { name: /^entrar$/i });
        await user.click(submitButton);

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/');
        });
    });

    it('shows alert on failed login', async () => {
        mockLogin.mockResolvedValue({ success: false, message: 'Invalid credentials' });
        renderLogin();
        const user = userEvent.setup();

        const submitButton = screen.getByRole('button', { name: /^entrar$/i });
        await user.click(submitButton);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith('Invalid credentials');
        });
    });
});
