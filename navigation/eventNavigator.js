import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartAppScreen from '../screens/startAppScreen';
import EventScreen from '../screens/eventScreen';
import ItemDetailsScreen from '../screens/itemDetailsScreen';
import ItemScreen from '../screens/itemScreen';
import Colors from '../constants/colors';
import { Platform, TouchableOpacity } from 'react-native';
import EventUbicationScreen from '../screens/eventUbicationScreen';
import MapScreen from '../screens/mapScreen';
import UbicationListScreen from '../screens/ubicationListScreen';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const ROUTES = {
    HOME: 'Home',
}
 const EventNavigator = () => {
     return (
        <Stack.Navigator 
            initialRouteName = 'Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                    
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen 
            name={ROUTES.HOME} 
            options={{ title: 'PLANEADOR DE EVENTOS'}} component={StartAppScreen}
             />
            <Stack.Screen 
                name='Evento' 
                component={EventScreen} 
                options={({ route }) => ({
                    title:route.params.name,
            })}
            
            />
            <Stack.Screen name='Tarea' 
                component={ItemDetailsScreen} 
                options={({ route }) => ({
                    title:route.params.name,
            })}
            />
            
            <Stack.Screen name='Ubicacion' 
                component={UbicationListScreen}
                options={({ navigation }) => ({
                    title: 'Direcciones',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Nueva')}>
                            <Ionicons
                                name="md-add"
                                color={Platform.OS === 'android' ? 'white' : Colors.header}
                                size={24}
                            />
                        </TouchableOpacity>
                    )
                })}
            />

            <Stack.Screen name="Map"
            component={MapScreen}
            options={{title: 'Mapa'}} 
        />
            <Stack.Screen name="Nueva"
                component={EventUbicationScreen}
                options={{title: 'Nueva direccion'}} 
            />
            <Stack.Screen name="Detalle"
                component={ItemScreen}
                options={{title: 'Detalle'}} 
            />
        </Stack.Navigator>
     );
 }

export default EventNavigator;