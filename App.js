import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './screens/form';
import { NavigationContainer } from '@react-navigation/native';
import Main from './navigation/navigation';
import ContextProvider from './screens/contextState'

export default function App() {
  return (
    <>
    
        
      <Main/>   

  
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

