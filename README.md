🛠 Backend
API simulada com json-server hospedada no Render.

⚠️ Observação:
No primeiro acesso, o backend pode levar alguns segundos para responder
devido ao cold start do Render (plano gratuito).

📌 Gerenciador de Projetos

Aplicação web para gerenciamento de projetos, permitindo criar projetos, definir orçamento, adicionar serviços, acompanhar custos e editar informações em tempo real.

Este projeto foi desenvolvido com React + Vite no frontend e JSON Server como backend simulado, ambos publicados em produção.

🚀 Demonstração

Frontend (GitHub Pages):
👉 https://philipeelopes.github.io/gerenciador-de-projetos1

Backend (Render):
👉 https://gerenciador-backend-u7qe.onrender.com

🧠 Funcionalidades

✔ Criar projetos
✔ Editar projetos
✔ Definir orçamento
✔ Adicionar serviços aos projetos
✔ Validação de orçamento (não ultrapassa o limite)
✔ Remover serviços
✔ Persistência de dados via API
✔ Interface responsiva

🛠️ Tecnologias Utilizadas
Frontend

React

Vite

React Router DOM

CSS Modules

UUID

Backend

JSON Server

Node.js

Render (Deploy)

📂 Estrutura do Projeto
gerenciador-de-projetos1/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── project/
│   │   ├── service/
│   │   └── form/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── dist/
└── package.json


Backend (repositório separado):

gerenciador-backend/
├── db.json
├── server.js
└── package.json

🔌 Integração Frontend ↔ Backend

O frontend consome uma API REST criada com JSON Server, hospedada no Render.

Exemplo de endpoint:

GET /projects
GET /projects/:id
POST /projects
PATCH /projects/:id
DELETE /projects/:id

🧪 Rodando o projeto localmente
🔹 Frontend
git clone https://github.com/philipeelopes/gerenciador-de-projetos1.git
cd gerenciador-de-projetos1
npm install
npm run dev


Acesse: http://localhost:5173

🔹 Backend
git clone https://github.com/philipeelopes/gerenciador-backend.git
cd gerenciador-backend
npm install
npm start


API disponível em: http://localhost:5000

🌐 Deploy
Frontend

Hospedado no GitHub Pages

Build gerado via vite build

Backend

Hospedado no Render

Executado via node server.js

📌 Decisões Técnicas

JSON Server foi utilizado para simular um backend RESTful real.

Separação de frontend e backend para simular um ambiente profissional.

Validações feitas no frontend para evitar inconsistência de dados.

Deploy separado para demonstrar entendimento de infraestrutura básica.

📈 Possíveis melhorias futuras

Autenticação de usuários

Banco de dados real (PostgreSQL ou MongoDB)

Backend com Express

Testes automatizados

Dockerização

Responsividade

👨‍💻 Autor

Desenvolvido por Philipe Lopes
🔗 LinkedIn: https://www.linkedin.com/in/philipe-lopes

🔗 GitHub: https://github.com/philipeelopes

⭐ Observação para recrutadores

O backend permanece ativo em produção para permitir testes completos da aplicação.
