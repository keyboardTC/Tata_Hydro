import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import BillDetails from './screens/BillDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerStyle: { backgroundColor: '#72063c' },
              headerTintColor: 'white',
        }}>
          <Stack.Screen 
            options={{
              title: 'Hydro Consumption',
              contentStyle: { backgroundColor:'#fce8f6' },
            }}
            component={Home} name="Home">
          </Stack.Screen>
          <Stack.Screen 
            options={{
              title: 'Billing Details',
              contentStyle: { backgroundColor:'#fce8f6' },
            }}
            component={BillDetails} name="BillDetailsScreen">
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
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
