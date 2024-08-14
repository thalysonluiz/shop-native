import { useStyled } from '@gluestack-ui/themed';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export function Routes() {
  const {config} = useStyled();

  const theme = DefaultTheme;
  theme.colors.background = config.tokens.colors.gray700;

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  );
}