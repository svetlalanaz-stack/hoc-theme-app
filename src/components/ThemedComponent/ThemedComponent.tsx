import type { ThemeType } from '../../types';
import { getThemeColors } from '../../themes/themeConfig';
import './ThemedComponent.css';

interface ThemedComponentProps {
  theme: ThemeType;
}

const ThemedComponent = ({ theme }: ThemedComponentProps) => {
  const colors = getThemeColors(theme);

  return (
    <div 
      className="themed-component"
      style={{
        backgroundColor: colors.cardBackground,
        color: colors.cardText,
        border: `1px solid ${colors.border}`,
      }}
    >
      <p>Текущая тема: <strong>{theme}</strong></p>
    </div>
  );
};

export default ThemedComponent;