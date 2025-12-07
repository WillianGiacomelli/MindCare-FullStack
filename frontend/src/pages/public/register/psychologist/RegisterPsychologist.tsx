import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPsychologist.css';
import { GoogleLogin } from '@react-oauth/google';

const RegisterPsychologist = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log("Dados do Psicólogo:", data);
//     alert("Cadastro enviado com sucesso!");
//   };

//   const handleGoogleSuccess = (credentialResponse) => {
//     console.log("Token Google:", credentialResponse.credential);
//   };

  return (
    <div className="register-psychologist-page bg-register-psychologist w-100 vh-100 d-flex align-items-center justify-content-center">
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-body p-4">
                <h3 className="text-center mb-4 text-primary fw-bold">Junte-se a nós</h3>
                <p className="text-muted text-center mb-4">
                  Crie sua conta profissional para atender pacientes online.
                </p>

                {/* Área do Google - Centralizada */}
                <div className="d-flex justify-content-center mb-4">
                  {/* <GoogleLogin
                    // onSuccess={handleGoogleSuccess}
                    onError={() => console.log('Login Falhou')}
                    text="signup_with"
                    shape="circle"
                    width="300" // Tenta ocupar largura
                  /> */}
                </div>

                <div className="d-flex align-items-center mb-4">
                  <hr className="flex-grow-1" />
                  <span className="px-2 text-muted small">ou cadastre com e-mail</span>
                  <hr className="flex-grow-1" />
                </div>

                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <form>
                  {/* Nome */}
                  <div className="mb-3">
                    <label className="form-label">Nome Completo</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                      placeholder="Ex: Dra. Ana Souza"
                      {...register("nome", { required: true })} 
                    />
                    {errors.nome && <div className="invalid-feedback">Nome é obrigatório.</div>}
                  </div>

                  {/* E-mail */}
                  <div className="mb-3">
                    <label className="form-label">E-mail Profissional</label>
                    <input 
                      type="email" 
                      className="form-control"
                      placeholder="ana@psicologia.com"
                      {...register("email", { required: true })} 
                    />
                  </div>

                  {/* CRP */}
                  <div className="mb-3">
                    <label className="form-label">Registro CRP</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.crp ? 'is-invalid' : ''}`}
                      placeholder="06/12345"
                      {...register("crp", { required: true })} 
                    />
                    <div className="form-text">Necessário para validação do perfil.</div>
                    {errors.crp && <div className="invalid-feedback">CRP é obrigatório.</div>}
                  </div>

                  {/* Senha */}
                  <div className="mb-4">
                    <label className="form-label">Senha</label>
                    <input 
                      type="password" 
                      className="form-control"
                      placeholder="******"
                      {...register("senha", { required: true, minLength: 6 })} 
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                    Criar Conta Profissional
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPsychologist;