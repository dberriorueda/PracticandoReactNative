import { StyleSheet, Text, View } from 'react-native';
import { styles } from './assets/estilos/alistyle';
import Loguin from './componentes/Loguin'

export default function App() {
  return (
    <View style={styles.container}>
      <Loguin/>
    </View>
  );
}

