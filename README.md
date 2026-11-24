# EventFlow — Plataforma de Eventos

Projeto desenvolvido para AV3 — Técnicas de Integração de Sistemas (TIS)  
Fundação Edson Queiroz · Unifor · 2026

**Equipe:** Davi Rodrigues · Davi Fontinele · Júlio

---

## Sobre o projeto

EventFlow é uma plataforma web onde usuários podem:
- Descobrir eventos e shows publicados
- Visualizar detalhes e comprar ingressos
- Criar e anunciar seus próprios eventos

A integração com a **Resend API** envia e-mails de confirmação a cada inscrição.

---

## Arquitetura

```
eventflow/
├── frontend/   # React + Vite (deploy: Vercel)
└── backend/    # Node.js + Express + PostgreSQL (deploy: Railway)
```

---

## Stack

| Camada       | Tecnologia                        |
|--------------|-----------------------------------|
| Frontend     | React + Vite + React Router       |
| Backend      | Node.js + Express                 |
| Banco        | PostgreSQL (pg)                   |
| Auth         | JWT (jsonwebtoken + bcryptjs)     |
| Email        | Resend API                        |
| Deploy Front | Vercel                            |
| Deploy Back  | Railway                           |

---

## Rodando localmente

### Backend
```bash
cd backend
cp .env.example .env   # preencher variáveis
npm install
npm run dev            # porta 3001
```

### Frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev            # porta 5173
```

---

## Endpoints da API

| Método | Rota                     | Auth | Descrição                     |
|--------|--------------------------|------|-------------------------------|
| GET    | /api/events              | —    | Listar eventos                |
| GET    | /api/events/:id          | —    | Detalhe do evento             |
| POST   | /api/events              | JWT  | Criar evento (organizador)    |
| PUT    | /api/events/:id          | JWT  | Editar evento                 |
| DELETE | /api/events/:id          | JWT  | Excluir evento                |
| POST   | /api/users/register      | —    | Cadastrar usuário             |
| POST   | /api/users/login         | —    | Login → retorna JWT           |
| GET    | /api/users/me            | JWT  | Perfil do usuário logado      |
| POST   | /api/registrations       | JWT  | Inscrever em evento + e-mail  |
| DELETE | /api/registrations/:id   | JWT  | Cancelar inscrição            |
| GET    | /api/registrations/me    | JWT  | Minhas inscrições             |
