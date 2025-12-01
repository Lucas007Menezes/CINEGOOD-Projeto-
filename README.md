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
  <img src="image_1610a0.png" alt="Página Inicial" width="45%">
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
