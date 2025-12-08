import { useState, useContext } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result.success) {
            navigate('/'); // Will be handled by HomeRedirect
        } else {
            alert(result.message || 'Falha no login');
        }
    };

    return (
        <section className="vh-100 bg-login">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">
                                <h2 className="fw-bold mb-2">Mindcare</h2>
                                <p className="text-black-50 mb-5">Bem-vindo(a) de volta!</p>
                                <p className="text-black-50 mb-5">Acesse sua conta para continuar</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control form-control-lg"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label text-start" htmlFor="password">Senha</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control form-control-lg"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-info" href="#!">Esqueceu a senha?</a></p>

                                    <button className="btn btn-info btn-lg px-5 w-100" type="submit">Entrar</button>

                                    <hr className="my-4" />

                                    <button className="btn btn-lg btn-block btn-primary w-100" style={{ backgroundColor: "#dd4b39" }}
                                        type="button"><i className="fab fa-google me-2 text-white"></i> Entrar com google</button>
                                </form>

                                <div className="mt-4">
                                    <p className="mb-0">Não tem uma conta?
                                        <Link to="/register-psychologist" className="text-info fw-bold"> Cadastre-se</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
