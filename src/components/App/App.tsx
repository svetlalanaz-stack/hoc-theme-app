import { useState } from 'react';
import type { ThemeType } from '../../types';
import { getThemeColors } from '../../themes/themeConfig';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ThemedComponent from '../ThemedComponent/ThemedComponent';
import { withTheme } from '../../hoc/withTheme';
import './App.css';

const ThemedComponentWrapped = withTheme(ThemedComponent);

const App = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const colors = getThemeColors(theme);

  const handleToggleTheme = (): void => {
    setTheme((prev: ThemeType) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div 
      className="app"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <div className="app__header">
        <h1 className="app__title">🎨 Управление темой</h1>
        <ThemeToggle theme={theme} onToggle={handleToggleTheme} />
      </div>

      <div className="app__content">
        <ThemedComponentWrapped theme={theme} />
      </div>
    </div>
  );
};

export default App;