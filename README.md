# 🧠 Take Home – Chat RAG (Frontend + Backend)

Este projeto é um **Take Home Challenge** que demonstra a construção de uma aplicação **full stack** com foco em **arquitetura limpa, boas práticas, Docker e integração Frontend + Backend**.

A aplicação consiste em um **chat estilo RAG (Retrieval Augmented Generation)**, onde o usuário envia mensagens e recebe respostas de um agente, além de informações de contexto recuperadas.

---

## 🏗️ Arquitetura do Projeto

Este repositório utiliza um **monorepo**, separando claramente frontend e backend:

```
TAKEHOME/
│
├── take-home-app/        # Frontend (React + Vite + MUI)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   ├── Chat/
│   │   ├── api/
│   │   ├── services/
│   │   ├── theme/
│   │   ├── types/
│   │   │   └── chatTypes.ts
│   │   ├── routes.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env
│   ├── Dockerfile
│   └── README.md
│
├── take-home-core/       # Backend (Node.js + Express)
│   ├── src/
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   └── conversation.controller.ts
│   │   ├── application/
│   │   │   ├── interfaces/
│   │   │   └── conversation.usecase.ts
│   │   ├── domain/
│   │   │   └── escalation/
│   │   │       └── EscalationPolicy.ts
│   │   ├── infrastructure/
│   │   │   ├── openai/
│   │   │   └── vector-db/
│   │   ├── prompts/
│   │   │   └── rag.prompt.ts
│   │   ├── app.ts
│   │   ├── server.ts
│   │   └── index.ts
│   ├── .env
│   ├── Dockerfile
│   └── README.md
│
├── docker-compose.yml
└── README.md

```
## 🚀 Tecnologias Utilizadas

  **Frontend**
  * **React**
  * **Vite**
  * **TypeScript**
  * **Material UI (MUI)**
  * **Axios**
  * **Docker**

**Backend**
  * **Node.js**
  * **Express**
  * **TypeScript**
  * **Arquitetura em camadas (Domain / Application / Infrastructure)**
  * **Integração preparada para IA (OpenAI / RAG)**

**Docker**

### 🎯 Principais decisões técnicas

* **Monorepo** para facilitar versionamento e execução do projeto
* **Docker + Docker Compose** para padronizar ambiente
* **React + Vite + Material UI** no frontend
* **Node.js + Express** no backend
* **Separação de responsabilidades** (services, hooks, pages, routes)
* **Variáveis de ambiente** para tornar o projeto genérico e reutilizável

---

## 🚀 Como rodar o projeto

### Pré-requisitos

* Docker
* Docker Compose (v2)

---

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/PauloFilipini/TAKE-HOME.git
cd TAKE-HOME
```

---

### 2️⃣ Criar arquivos de ambiente

#### Backend – `take-home-core/.env`

```env
OPENAI_API_KEY=sk-proj-...
VECTOR_DB_KEY=
AZURE_SEARCH_ENDPOINT=https://claudia-db.search.windows.net
AZURE_SEARCH_INDEX=claudia-ids-index-large
```

#### Frontend – `take-home-app/.env`

```env
# URL usada pelo browser
VITE_API_BASE_URL=http://localhost:3000
VITE_PROJECT_NAME=tesla_motors
VITE_HELPDESK_ID=123456
```

---

### 3️⃣ Subir a aplicação com Docker

```bash
docker compose up --build
```

---

### 4️⃣ Acessar a aplicação

* **Frontend:** [http://localhost:5173](http://localhost:5173)
* **Backend:** [http://localhost:3000](http://localhost:3000)

---

## 💬 Funcionalidades

* Interface de chat responsiva
* Envio de mensagens do usuário
* Resposta do agente
* Indicação visual de carregamento (`...`)
* Estrutura preparada para **handover humano**
* Tipagem forte com TypeScript

---

## 🧪 Observações importantes

* O frontend roda no **browser**, portanto utiliza `localhost` para acessar a API
* Hostnames como `backend` são usados apenas **entre containers**

```bash
docker compose up --build
```

---

## 🧠 Considerações finais

Este projeto foi desenvolvido com foco em:

* Clareza de arquitetura
* Facilidade de execução
* Boas práticas de mercado
* Código limpo e organizado

Ele pode ser facilmente expandido para:

* Autenticação
* Persistência de histórico
* Streaming de mensagens
* Integração com LLMs reais

---
