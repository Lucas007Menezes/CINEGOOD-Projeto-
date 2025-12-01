/**
 * Componente Header
 * 
 * CONCEITOS APLICADOS:
 * - Componente funcional com TypeScript
 * - Props tipadas (interface HeaderProps)
 * - Children pattern para conteúdo flexível
 */

import './Header.css';

interface HeaderProps {
  children?: React.ReactNode;
  showAddButton?: boolean;
  onAddClick?: () => void;
}

export function Header({ children, showAddButton = false, onAddClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          <span className="logo-react">React</span>
          <span className="logo-flix">Flix</span>
        </h1>
        
        {children}
        
        {showAddButton && (
          <button className="btn-add" onClick={onAddClick}>
            + Adicionar
          </button>
        )}
      </div>
    </header>
  );
}