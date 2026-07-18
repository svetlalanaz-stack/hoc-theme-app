export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  cardBackground: string;
  cardText: string;
  border: string;
  buttonBackground: string;
  buttonText: string;
  buttonHover: string;
}

export interface WithThemeProps {
  theme: ThemeType;
}