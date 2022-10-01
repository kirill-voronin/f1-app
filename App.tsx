import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Calendar from './screens/calendar';
import Pilots from './screens/pilots';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Calendar} 
          options={{headerShown: false}}
          />
        <Tab.Screen 
          name="Pilots" 
          component={Pilots} 
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
