
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
          <span className="logo-react">Cine</span>
          <span className="logo-flix">Good</span>
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