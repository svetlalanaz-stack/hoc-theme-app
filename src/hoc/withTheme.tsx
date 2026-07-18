import type { ComponentType } from 'react';
import type { ThemeType } from '../types';

export interface WithThemeProps {
  theme: ThemeType;
}

export function withTheme<P extends WithThemeProps>(
  WrappedComponent: ComponentType<P>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const WithThemeComponent = (props: Omit<P, keyof WithThemeProps> & WithThemeProps) => {
    return <WrappedComponent {...(props as P)} />;
  };

  WithThemeComponent.displayName = `withTheme(${displayName})`;

  return WithThemeComponent;
}