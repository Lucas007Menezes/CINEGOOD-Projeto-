# 🎬 CineGood

> **Seu universo cinematográfico, organizado.**
> Uma aplicação SPA moderna para gerenciar seu catálogo pessoal de filmes e séries, construída com a stack mais robusta do mercado.

<div align="center">

![React](https://img.shields.io/badge/React-v19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Rapid-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>

---

## 🖼️ Prévia do Projeto

<div align="center">
 <img width="1917" height="851" alt="image" src="https://github.com/user-attachments/assets/857f3626-70a9-49d8-b9d3-f88eeedec432" />

</div>

---

## 💡 Sobre o Projeto

O **CineGood** não é apenas uma lista de filmes. É uma aplicação completa que simula um ambiente de streaming real, permitindo que o usuário tenha controle total sobre seu conteúdo.

O projeto foi desenvolvido focando em **Performance** e **Experiência de Desenvolvimento (DX)**, utilizando React 19 com TypeScript em "Strict Mode" para garantir um código limpo, seguro e escalável.

### ✨ Funcionalidades Exclusivas

* **🎨 UI Imersiva:** Design escuro (Dark Mode) com cards interativos e feedback visual.
* **⭐ Sistema de Avaliação:** Classifique títulos de 0 a 5 estrelas.
* **🎯 Controle de Status:** Etiquetas visuais para identificar rapidamente o que você já assistiu.
* **⚡ CRUD Instantâneo:** Adicione, edite e remova títulos sem recarregamentos (SPA).
* **📱 Mobile First:** Layout totalmente responsivo para celulares, tablets e desktops.

---

## 📂 Arquitetura do Projeto

A estrutura de pastas segue os padrões de organização modular, facilitando a manutenção e escalabilidade:

```plaintext
cinegood/
├── 📂 public/              # Arquivos públicos estáticos
│   └── 🎨 vite.svg
│
├── 📂 src/                 # Código fonte da aplicação
│   ├── 📂 assets/          # Recursos como imagens e ícones
│   │   └── ⚛️ react.svg
│   │
│   ├── 📂 components/      # Componentes de UI reutilizáveis
│   │   ├── ⚛️ Card.tsx     # Card de exibição do filme/série
│   │   ├── 🎨 Card.css
│   │   ├── ⚛️ Form.tsx     # Formulário inteligente (Criação/Edição)
│   │   ├── 🎨 Form.css
│   │   ├── ⚛️ Header.tsx   # Barra de navegação fixa
│   │   └── 🎨 Header.css
│   │
│   ├── 📂 pages/           # Rotas / Telas da aplicação
│   │   ├── ⚛️ Home.tsx     # Landing Page (Boas-vindas)
│   │   ├── 🎨 Home.css
│   │   ├── ⚛️ List.tsx     # O Catálogo (Lógica principal do CRUD)
│   │   └── 🎨 List.css
│   │
│   ├── 📂 services/        # Camada de Comunicação
│   │   └── ts api.ts       # Configuração do Fetch API (Service Pattern)
│   │
│   ├── 📂 types/           # Definições de Tipos Globais
│   │   └── ts index.ts     # Interfaces (ICatalogItem, CreateCatalogItem)
│   │
│   ├── ⚛️ App.tsx          # Componente Raiz & Roteamento Manual
│   ├── 🎨 App.css          # Estilos do Layout Mestre
│   ├── ⚛️ main.tsx         # Ponto de Entrada (React DOM)
│   └── 🎨 index.css        # Reset CSS e Variáveis Globais
│
├── 📄 db.json              # Banco de Dados Simulado (JSON Server)
├── ⚙️ vite.config.ts       # Configuração do Bundler
└── 📄 package.json         # Dependências e Scripts

🚀 Guia de Instalação e Execução
Este projeto utiliza uma arquitetura de Front-end desacoplado de um Back-end simulado. Para funcionar, você precisa de dois terminais rodando.

1️⃣ Pré-requisitos
Node.js (v18 ou superior)

npm (gerenciador de pacotes padrão)

2️⃣ Instalação
# Clone o repositório
git clone [https://github.com/seu-usuario/cinegood.git](https://github.com/seu-usuario/cinegood.git)

# Entre na pasta do projeto
cd cinegood

# Instale as dependências
npm install

3️⃣ Executando a Aplicação
Abra dois terminais no seu editor de código:

Terminal 1: Servidor de Dados (Backend) Este comando inicia a API simulada na porta 3001.

Bash

npm run server
Terminal 2: Aplicação Web (Frontend) Este comando inicia o React na porta 5173.

Bash

npm run dev
🌟 Tudo pronto! Acesse http://localhost:5173 e aproveite.

🛠️ Tecnologias Utilizadas
React 19: A biblioteca JavaScript mais popular para construção de interfaces.

TypeScript: JavaScript com superpoderes (tipagem estática).

Vite: Ferramenta de build de próxima geração.

JSON Server: API REST completa criada em 30 segundos para prototipagem.

CSS Modules: Estilização com escopo local, evitando conflitos de classes.

ESLint: Linter para garantir a qualidade e padronização do código.

 * Contribuição
Contribuições são o que fazem a comunidade open source um lugar incrível. Sinta-se à vontade para:

Fazer um Fork do projeto.

Criar uma Branch para sua Feature (git checkout -b feature/NovaFeature).

Commitar suas mudanças (git commit -m 'Adicionando uma nova feature').

Dar Push na Branch (git push origin feature/NovaFeature).

Abrir um Pull Request.
