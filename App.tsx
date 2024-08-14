import { GluestackUIProvider} from '@gluestack-ui/themed';
import { StatusBar } from 'react-native';
import { 
  useFonts, 
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { config } from './src/theme';
import { Loading } from '@components/Loading';
import { CartContextProvider } from '@contexts/CartContext';
import { Routes } from '@routes/index';


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <GluestackUIProvider config={config}>
      <StatusBar backgroundColor='transparent' barStyle='light-content' translucent />
      <CartContextProvider>
        {!fontsLoaded ? <Loading /> : <Routes />}
      </CartContextProvider>
    </GluestackUIProvider>
  );
}
