import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPsychologist.css';

import api from '../../../../services/api';
import { useNavigate } from 'react-router-dom';

const RegisterPsychologist = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isPsychologist, setIsPsychologist] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      // Logic: If CRP is filled (and we are in psychologist mode), type is Psicologo
      const tipoUsuario = (isPsychologist && data.crp) ? 'Psicologo' : 'Paciente';

      const payload = {
        nomeCompleto: data.nome,
        email: data.email,
        senha: data.senha,
        tipoUsuario: tipoUsuario,
        crp: isPsychologist ? data.crp : null
      };

      await api.post('/Auth/register', payload);
      alert("Cadastro realizado com sucesso! Faça login.");
      navigate('/login');
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data || "Erro ao cadastrar");
    }
  };

  return (
    <div className="register-psychologist-page bg-register-psychologist w-100 vh-100 d-flex align-items-center justify-content-center">
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-body p-4">
                <h3 className="text-center mb-4 text-primary fw-bold">Criar Conta</h3>
                <p className="text-muted text-center mb-4">
                  Junte-se ao PsiConnect.
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Nome */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="nome">Nome Completo</label>
                    <input
                      type="text"
                      id="nome"
                      className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                      placeholder="Ex: Ana Souza"
                      {...register("nome", { required: true })}
                    />
                    {errors.nome && <div className="invalid-feedback">Nome é obrigatório.</div>}
                  </div>

                  {/* E-mail */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="email@exemplo.com"
                      {...register("email", { required: true })}
                    />
                  </div>

                  {/* Tipo de Conta Toggle */}
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPsychologist"
                      checked={isPsychologist}
                      onChange={(e) => setIsPsychologist(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="checkPsychologist">
                      Sou Psicólogo(a)
                    </label>
                  </div>

                  {/* CRP - Conditional */}
                  {isPsychologist && (
                    <div className="mb-3">
                      <label className="form-label" htmlFor="crp">Registro CRP</label>
                      <input
                        type="text"
                        id="crp"
                        className={`form-control ${errors.crp ? 'is-invalid' : ''}`}
                        placeholder="06/12345"
                        {...register("crp", { required: isPsychologist })}
                      />
                      <div className="form-text">Necessário para validação do perfil profissional.</div>
                      {errors.crp && <div className="invalid-feedback">CRP é obrigatório para psicólogos.</div>}
                    </div>
                  )}

                  {/* Senha */}
                  <div className="mb-4">
                    <label className="form-label" htmlFor="senha">Senha</label>
                    <input
                      type="password"
                      id="senha"
                      className="form-control"
                      placeholder="******"
                      {...register("senha", { required: true, minLength: 6 })}
                    />
                    {errors.senha && <div className="text-danger small">Mínimo 6 caracteres.</div>}
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                    Criar Conta
                  </button>
                </form>

                <div className="mt-3 text-center">
                  <p className="mb-0">Já tem uma conta? <a href="/login" className="text-primary fw-bold">Fazer Login</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPsychologist;
