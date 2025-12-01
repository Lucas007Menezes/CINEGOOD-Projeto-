🎬 CineGood
Seu universo cinematográfico, organizado.

O CineGood é uma aplicação Single Page Application (SPA) desenvolvida para gerenciar um catálogo pessoal de filmes e séries. Mais do que um simples CRUD, este projeto é um estudo prático sobre arquitetura de componentes, tipagem estática e consumo de APIs no ecossistema React moderno.

✨ Funcionalidades
🗂️ Organização Visual: Visualize seus títulos em cards interativos com pôsteres.

⭐ Sistema de Avaliação: Classifique suas obras favoritas de 0 a 5 estrelas.

✅ Controle de Progresso: Marque o que já assistiu e o que está na sua lista de pendentes.

⚡ Gestão Completa: Adicione, edite e remova títulos instantaneamente.

📱 Responsividade: Interface adaptável para Desktop e Mobile.

🛠️ Tecnologias & Ferramentas
Este projeto foi construído utilizando as melhores práticas do mercado atual:

React 19: A biblioteca UI mais popular do mundo.

TypeScript: Segurança e previsibilidade através de tipagem estática.

Vite: Build tool de última geração para um desenvolvimento ultra-rápido.

CSS Nativo: Estilização modularizada e performática.

JSON Server: Simulação completa de uma API RESTful para o backend.

📂 Estrutura do Projeto
A arquitetura de pastas foi pensada para ser escalável e intuitiva. Abaixo, a árvore de arquivos explicada:

Plaintext

src/
├── 📂 assets/              # Arquivos estáticos (imagens, SVGs, ícones)
│   └── 🎨 react.svg
│
├── 📂 components/          # "Peças de LEGO" da interface (reutilizáveis)
│   ├── 🎨 Card.css         # Estilos do card de filme
│   ├── ⚛️ Card.tsx         # Lógica de exibição do item
│   ├── 🎨 Form.css         # Estilos do formulário
│   ├── ⚛️ Form.tsx         # Lógica de criação/edição
│   ├── 🎨 Header.css       # Estilos do cabeçalho
│   └── ⚛️ Header.tsx       # Barra de navegação superior
│
├── 📂 pages/               # Telas completas da aplicação
│   ├── 🎨 Home.css         # Estilos da página inicial
│   ├── ⚛️ Home.tsx         # Landing Page (Boas-vindas)
│   ├── 🎨 List.css         # Estilos do catálogo
│   └── ⚛️ List.tsx         # Tela de listagem e gerenciamento
│
├── 📂 services/            # Comunicação com o mundo externo
│   └── ts api.ts           # Configuração do Fetch para conectar ao backend
│
├── 📂 types/               # O "Contrato" de dados
│   └── ts index.ts         # Definições de Interfaces (ICatalogItem, etc.)
│
├── 🎨 App.css              # Estilos globais do container principal
├── ⚛️ App.tsx              # Componente Raiz (Gerencia as Rotas manuais)
├── 🎨 index.css            # Reset de CSS e variáveis globais
└── ⚛️ main.tsx             # Ponto de entrada (Renderiza o React no DOM)
🚀 Como Rodar o Projeto
Para ver a mágica acontecer, você precisará de dois terminais abertos (um para o "Visual" e outro para os "Dados").

Pré-requisitos
Node.js instalado.

Passo 1: Instalação
Clone o projeto e instale as dependências:

Bash

git clone https://github.com/seu-usuario/cinegood.git
cd cinegood
npm install
Passo 2: Ligando os Motores
Terminal 1 (O Backend Simulado): Este comando inicia o banco de dados.

Bash

npm run server
⚠️ Aguarde a mensagem: JSON Server started on PORT 3001

Terminal 2 (O Frontend - A Aplicação): Este comando inicia o site.

Bash

npm run dev
Agora, acesse http://localhost:5173 no seu navegador!

🧠 Conceitos Didáticos Aplicados
Se você está estudando o código, preste atenção nestes pontos:

Componentização: Veja como o Card e o Form são isolados. Eles não sabem "onde" estão, apenas recebem dados (props) e devolvem eventos.

Estado (State): O useState é usado para controlar formulários, modais e a lista de filmes.

Efeitos (Effects): O useEffect na página List.tsx é quem busca os dados assim que a tela carrega.

Roteamento Manual: No App.tsx, usamos um estado simples (currentPage) para trocar de tela, mostrando como funcionam as rotas "por baixo dos panos" antes de usar bibliotecas complexas.

🤝 Contribuição
Gostou do projeto? Sinta-se livre para abrir uma issue ou enviar um pull request. Toda ajuda é bem-vinda para tornar o CineGood ainda melhor!
