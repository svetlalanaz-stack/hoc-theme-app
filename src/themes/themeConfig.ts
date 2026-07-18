import type { ThemeColors, ThemeType } from '../types';

export const themeConfig: Record<ThemeType, ThemeColors> = {
  light: {
    background: '#ffffff',
    text: '#212529',
    cardBackground: '#f8f9fa',
    cardText: '#212529',
    border: '#dee2e6',
    buttonBackground: '#007bff',
    buttonText: '#ffffff',
    buttonHover: '#0056b3',
  },
  dark: {
    background: '#1a1a2e',
    text: '#e9ecef',
    cardBackground: '#2d2d44',
    cardText: '#e9ecef',
    border: '#3d3d5c',
    buttonBackground: '#6c63ff',
    buttonText: '#ffffff',
    buttonHover: '#5a52d5',
  },
};

export const getThemeColors = (theme: ThemeType): ThemeColors => themeConfig[theme];