/**
 * Componente Principal App
 * 
 * CONCEITOS APLICADOS:
 * - Routing manual com useState (sem biblioteca)
 * - Renderização condicional de páginas
 * - Props drilling para navegação
 * 
 * NOTA PEDAGÓGICA:
 * Em produção, use React Router. Aqui fazemos routing manual
 * para entender o conceito antes de usar bibliotecas.
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { List } from './pages/List';
import './App.css';

type Page = 'home' | 'list';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="app">
      <Header 
        showAddButton={currentPage === 'list'}
        onAddClick={() => {
          // Esta função seria conectada ao modal da List page
          // Por simplicidade, deixamos vazia aqui
        }}
      >
        {/* Navegação */}
        <nav className="nav">
          <button
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === 'list' ? 'active' : ''}`}
            onClick={() => setCurrentPage('list')}
          >
            Catálogo
          </button>
        </nav>
      </Header>

      <main>
        {currentPage === 'home' && (
          <Home onNavigateToList={() => setCurrentPage('list')} />
        )}
        
        {currentPage === 'list' && (
          <List />
        )}
      </main>

      <footer className="footer">
        <p>ReactFlix © 2024 - Projeto Educacional</p>
      </footer>
    </div>
  );
}

export default App;