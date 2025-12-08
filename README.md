# 🧠 MindCare - Plataforma de Telemedicina Psicológica

MindCare é uma solução completa (Full Stack) para conectar psicólogos e pacientes, permitindo agendamento de consultas, gestão de prontuários e comunicação segura. O projeto é estruturado em uma arquitetura moderna de microsserviços no backend, com interfaces web e mobile robustas.

---

## 🚀 Tecnologias e Stack Tecnológico

### Backend (Microsserviços)
*   **Framework:** .NET 10 (C#)
*   **Banco de Dados:** SQL Server (Entity Framework Core)
*   **Autenticação:** ASP.NET Core Identity + JWT (JSON Web Tokens)
*   **Arquitetura:** Microservices (AuthService, ScheduleService, NotesService)
*   **Documentação:** Swagger/OpenAPI

### Frontend (Web)
*   **Framework:** React 19 (Vite)
*   **Linguagem:** TypeScript
*   **Estilização:** Bootstrap 5 + CSS Modules
*   **HTTP Client:** Axios com Interceptors para gestão de tokens
*   **Testes:** Vitest + React Testing Library + Happy DOM
*   **State Management:** Context API (AuthContext)

### Mobile (App)
*   **Framework:** React Native (Expo SDK)
*   **Navegação:** React Navigation (Stack & Bottom Tabs)
*   **UI Library:** React Native Paper
*   **Funcionalidades:** Upload de imagens e Agenda

---

## 📂 Arquitetura do Projeto

O repositório é organizado como um *monorepo* contendo as três camadas principais da aplicação:

```
mindCare/
├── backend/                # Serviços .NET (API)
│   ├── AuthService/        # Gestão de usuários, login e registro
│   ├── NotesService/       # Gestão de prontuários e anotações
│   └── ScheduleService/    # Gestão de agendamentos
│
├── frontend/               # Aplicação Web (React/Vite)
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── context/        # Estado global (Auth, etc.)
│   │   ├── pages/          # Páginas (Login, Dashboard, etc.)
│   │   │   ├── public/     # Rotas públicas
│   │   │   └── main/       # Rotas protegidas (MainLayout)
│   │   ├── services/       # Integração com APIs (Axios)
│   │   └── __tests__/      # Testes unitários e integração
│   └── vitest.config.ts    # Configuração de testes
│
└── mobile/                 # Aplicação Mobile (Expo)
    ├── src/
    │   ├── components/     # Componentes nativos
    │   ├── context/        # AuthProvider mobile
    │   ├── screens/        # Telas (Login, Agenda, Upload)
    │   └── services/       # Configuração de API (IP/Localhost)
    └── App.js              # Ponto de entrada e Navegação
```

---

## ✨ Funcionalidades Principais

### ✅ Autenticação e Segurança
*   Login e Registro separados para **Pacientes** e **Psicólogos**.
*   Validação de CRP para profissionais.
*   Proteção de rotas via JWT no Web e Mobile.

### 📅 Agendamento (Em Desenvolvimento)
*   Psicólogos definem horários disponíveis.
*   Pacientes visualizam e reservam horários.

### 📝 Prontuário Eletrônico (Notes)
*   Psicólogos podem criar anotações sobre sessões.
*   Upload de anexos e imagens (Mobile).

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
*   Node.js (v18+)
*   .NET SDK 8.0
*   SQL Server (LocalDB ou Container)

### 1. Backend
Navegue para cada pasta de serviço (`AuthService`, `NotesService`, etc.) e execute:
```bash
dotnet restore
dotnet ef database update # Criar banco de dados
dotnet run
```
*   AuthService roda na porta: `5107`
*   ScheduleService roda na porta: `5108`
*   NotesService roda na porta: `5109`

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
# Para rodar os testes:
npm test
```

### 3. Mobile
```bash
cd mobile
npm install
npx expo start
```
*   **Atenção:** Em `src/services/apiConfig.js`, configure o IP da sua máquina se estiver testando em dispositivo físico (`DEV_MACHINE_IP`).

---

## 🧪 Testes Automatizados (Frontend)

O projeto Web possui uma suíte de testes robusta cobrindo:
*   **Login:** Renderização, validação de campos e integração com API mockada.
*   **Registro (Psicólogo):** Fluxos condicionais (campo CRP) e submissão.
*   **Acessibilidade:** Verificação de labels e inputs.

Para executar os testes:
```bash
npm test
```

---
**Desenvolvido por Willian Giacomelli**
