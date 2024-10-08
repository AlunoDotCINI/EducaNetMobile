import{NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import WelcomeScreen from '../../screens/WelcomeScreen';
import WelcomeBackScreen from '../../screens/WelcomeBackScreen/index'
import RegisterLoginScreen from '../../screens/RegisterLoginScreen';

const Stack =createStackNavigator();


export default function NavigationLoginAndRegister(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={RegisterLoginScreen} />
                <Stack.Screen component={WelcomeScreen} />
                <Stack.Screen name='WelcomeBackScreen' component={WelcomeBackScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}