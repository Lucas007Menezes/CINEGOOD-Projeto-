# 🎬 CineGood

> **Gerencie sua paixão pelo cinema.**
> Um catálogo pessoal moderno, responsivo e desenvolvido com a stack mais atual do mercado.

![React](https://img.shields.io/badge/React-v19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Rapid-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🖼️ Prévia do Projeto

<div align="center">
  <img src="Captura de tela 2025-12-01 145310" alt="Página Inicial" width="45%">
  <img src="image_162342.jpg" alt="Catálogo de Filmes" width="45%">
</div>

---

## 💡 Sobre o Projeto

O **CineGood** é uma Single Page Application (SPA) que simula um gerenciador de streaming pessoal. O objetivo principal deste projeto é demonstrar a aplicação de conceitos avançados de **Frontend Moderno**, incluindo arquitetura de componentes, estados globais e locais, e integração com APIs REST simuladas.

### ✨ Funcionalidades Principais

* **Catalogação Dinâmica:** Adicione filmes e séries com URL de pôsteres.
* **Sistema de Avaliação:** Classifique suas obras com um sistema interativo de 0 a 5 estrelas.
* **Status de Visualização:** Organize o que você já assistiu (`watched`) e o que falta ver (`not-watched`).
* **CRUD Completo:** Criação, Leitura, Atualização e Remoção de itens sem recarregar a página.
* **Design Responsivo:** Layout fluido que se adapta a celulares e desktops.

---

## 🛠️ Stack Tecnológica

* **Core:** [React 19](https://react.dev/) (Hooks, Functional Components)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode, Interfaces, Types)
* **Build Tool:** [Vite](https://vitejs.dev/) (HMR, Fast Refresh)
* **Estilização:** CSS Modules (Escopo local para evitar conflitos)
* **Backend Simulado:** [JSON Server](https://github.com/typicode/json-server)
* **Qualidade de Código:** ESLint (Configuração moderna `flat config`)

---

## 📂 Arquitetura do Projeto

A estrutura foi organizada focando em escalabilidade e separação de responsabilidades, conforme as melhores práticas:

```plaintext
src/
├── 📂 assets/              # Recursos estáticos
│   └── 🎨 react.svg
│
├── 📂 components/          # Componentes reutilizáveis (UI)
│   ├── 🎨 Card.css         # Estilização do card
│   ├── ⚛️ Card.tsx         # Componente de exibição de item
│   ├── 🎨 Form.css         # Estilização de formulários
│   ├── ⚛️ Form.tsx         # Componente de Criação/Edição
│   ├── 🎨 Header.css       # Estilização do topo
│   └── ⚛️ Header.tsx       # Barra de navegação global
│
├── 📂 pages/               # Telas da aplicação (Rotas)
│   ├── 🎨 Home.css         # Estilo da Landing Page
│   ├── ⚛️ Home.tsx         # Tela Inicial
│   ├── 🎨 List.css         # Estilo do Grid de Filmes
│   └── ⚛️ List.tsx         # Tela do Catálogo (Lógica Principal)
│
├── 📂 services/            # Camada de Dados
│   └── ts api.ts           # Configuração do Fetch API / Axios
│
├── 📂 types/               # Definições de Tipos (TypeScript)
│   └── ts index.ts         # Interfaces globais (ICatalogItem, etc.)
│
├── 🎨 App.css              # Estilos do Layout Mestre
├── ⚛️ App.tsx              # Componente Raiz (Roteamento Manual)
├── 🎨 index.css            # Reset CSS e Variáveis Globais
└── ⚛️ main.tsx             # Entry Point (Renderização DOM)

🚀 Como Executar
Este projeto depende de dois processos rodando simultaneamente: o Frontend (React) e o Backend (JSON Server).

1️⃣ Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina.

2️⃣ Instalação
Clone o repositório e instale as dependências:

Bash

git clone [https://github.com/seu-usuario/cinegood.git](https://github.com/seu-usuario/cinegood.git)
cd cinegood
npm install
3️⃣ Rodando a Aplicação
Você precisará de dois terminais abertos:

Terminal A (Servidor de Dados):

Bash

npm run server
O servidor iniciará em http://localhost:3001

Terminal B (Aplicação Web):

Bash

npm run dev
O site iniciará em http://localhost:5173

🧠 Aprendizados Acadêmicos
Este projeto serve como estudo de caso para:

React 19 & Hooks: Uso intensivo de useState para controle de UI e useEffect para ciclo de vida.

TypeScript "Strict": Configuração verbatimModuleSyntax exigindo import type para melhor tree-shaking.

Componentização: Criação de componentes isolados (Card, Form) que se comunicam via props e callbacks.

Consumo de API: Padrão de Service Layer (api.ts) para isolar a lógica de fetch dos componentes visuais.

🤝 Contribuição
Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será muito apreciada.

Faça um Fork do projeto

Crie uma Branch para sua Feature (git checkout -b feature/IncrívelFeature)

Adicione suas mudanças (git add .)

Comite suas mudanças (git commit -m 'Adicionando uma Incrível Feature')

Faça o Push da Branch (git push origin feature/IncrívelFeature)

Abra um Pull Request
