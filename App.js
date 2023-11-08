import { StyleSheet, Text, View } from 'react-native';
import { styles } from './assets/estilos/alistyle';
import Loguin from './componentes/Loguin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './componentes/HomeScreen';
import Settings from './componentes/settings';
import Chat from './componentes/chat';
import MyTabs from './componentes/Mytabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen name="Mytabs" component={MyTabs} options={{title:'Menu'}}/>
        <Stack.Screen name="login" component={Loguin} options={{title:'Inicio de Sesion'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Pantalla Principal'}}/>
        <Stack.Screen name="Chat" component={Chat} options={{title:'chat'}}/>
        <Stack.Screen name="Settings" component={Settings} options={{title:'configuraciones'}}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

