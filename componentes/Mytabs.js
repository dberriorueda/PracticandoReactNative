import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Login from './Loguin';
import Settings from './settings';
import Chat from './chat';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Loguin" component={Login} />
    </Tab.Navigator>
  );
}