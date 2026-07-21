import type { ThemeType } from '../../types';
import './ThemeToggle.css';

interface ThemeToggleProps {
  theme: ThemeType;
  onToggle: () => void;
}

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  const isDark = theme === 'dark';

  return (
    <button 
      className={`theme-toggle theme-toggle--${theme}`} 
      onClick={onToggle}
      aria-label={`Переключить на ${isDark ? 'светлую' : 'тёмную'} тему`}
    >
      <span className="theme-toggle__icon">
        {isDark ? '🌙' : '☀️'}
      </span>
      <span className="theme-toggle__label">
        {isDark ? 'Тёмная' : 'Светлая'}
      </span>
    </button>
  );
};

export default ThemeToggle;