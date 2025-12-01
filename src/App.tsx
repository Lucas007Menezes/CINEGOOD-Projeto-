

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
          
        }}
      >
        {}
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
        <p>CineGood © 2024 - Projeto Educacional</p>
      </footer>
    </div>
  );
}

export default App;