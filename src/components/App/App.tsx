import { Component } from 'react';
import type { ThemeType } from '../../types';
import { getThemeColors } from '../../themes/themeConfig';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './App.css';

interface AppState {
  theme: ThemeType;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  handleToggleTheme = (): void => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme } = this.state;
    const colors = getThemeColors(theme);

    return (
      <div 
        className="app"
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        <h1 className="app__title">🎨 Управление темой</h1>
        <ThemeToggle theme={theme} onToggle={this.handleToggleTheme} />
        <p style={{ marginTop: '20px', opacity: 0.7 }}>
          Текущая тема: <strong>{theme}</strong>
        </p>
      </div>
    );
  }
}

export default App;