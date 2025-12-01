/**
 * Página Home
 * 
 * CONCEITO:
 * - Landing page da aplicação
 * - Apresentação visual
 * - Call-to-action para ação principal
 */

import './Home.css';

interface HomeProps {
  onNavigateToList: () => void;
}

export function Home({ onNavigateToList }: HomeProps) {
  return (
    <div className="home">
      <div className="home-content">
        <div className="hero">
          <h1 className="hero-title">
            Bem-vindo ao <span className="highlight">ReactFlix</span>
          </h1>
          <p className="hero-subtitle">
            Organize e gerencie seu catálogo pessoal de filmes e séries favoritos
          </p>
          
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🎬</span>
              <h3>Catálogo Completo</h3>
              <p>Organize filmes e séries em um só lugar</p>
            </div>
            
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <h3>Avaliações</h3>
              <p>Classifique seus títulos favoritos</p>
            </div>
            
            <div className="feature">
              <span className="feature-icon">✅</span>
              <h3>Controle de Status</h3>
              <p>Marque o que já assistiu</p>
            </div>
          </div>

          <button className="btn-hero" onClick={onNavigateToList}>
            Ver Meu Catálogo
          </button>
        </div>
      </div>
    </div>
  );
}