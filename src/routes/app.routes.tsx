import { Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useStyled } from '@gluestack-ui/themed';

import { Cart } from '../screens/Cart';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const {config} = useStyled();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: config.tokens.colors.green500,
        tabBarInactiveTintColor: config.tokens.colors.gray300,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: config.tokens.colors.gray700
        },
      }}>
      <Screen
        name="products"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" color={color} size={config.tokens.space[6]} />
        }}
      />

      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => <Feather name="shopping-bag" color={color} size={config.tokens.space[6]} />,
        }}
      />

      <Screen
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}