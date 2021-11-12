import React, {useEffect, useState} from 'react';
import {Fab, Icon, Text, View} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from "native-base";
import Empty from "./pages/empty";
import Action from "./pages/action";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from '@react-navigation/stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import QrCode from "./pages/qr-code";
import {BarCodeScanner} from "expo-barcode-scanner";


export default function App() {
    const Tab = createBottomTabNavigator();

    const navigationRef = createNavigationContainerRef()

    const [state, setState] = useState({fab: true, route: null});


    return (
        <NativeBaseProvider>
            <NavigationContainer onStateChange={(e) => {
                console.log(e.history.at(-1).key)
                if (e.history.at(-1).key.includes('Profile')) {
                    setState(f => ({...f, fab: false}));
                } else {
                    setState(f => ({...f, fab: true}));
                }
            }}>
                <Tab.Navigator tabBarOptions={{
                    activeBackgroundColor: '#000',
                    inactiveBackgroundColor: '#000',
                }} screenOptions={({route}) => {
                    return ({
                        tabBarIcon: ({focused}) => {
                            switch (route.name) {
                                case 'Home':
                                    return <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 22 20"
                                    >
                                        <path
                                            stroke={focused ? "#f00" : "#fff"}
                                            strokeWidth="2"
                                            d="M20.5 19.5v-8.708L11 2.208l-9.5 8.584V19.5"
                                        />
                                    </svg>;
                                case 'Action':
                                    return <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="23"
                                        height="17"
                                        fill="none"
                                        viewBox="0 0 23 17"
                                    >
                                        <rect
                                            width="20"
                                            height="14"
                                            x="1.5"
                                            y="1.5"
                                            stroke={focused ? "#f00" : "#fff"}
                                            strokeWidth="2"
                                            rx="4"
                                        />
                                        <path
                                            stroke={focused ? "#f00" : "#fff"}
                                            strokeLinecap="square"
                                            strokeWidth="2"
                                            d="M6.5 6.5h10"
                                        />
                                    </svg>
                                case 'Profile':
                                    return <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17"
                                        height="19"
                                        fill="none"
                                        viewBox="0 0 17 19"
                                    >
                                        <circle cx="8.5" cy="4.5" r="3" stroke={focused ? "#f00" : "#fff"}
                                                strokeWidth="2"/>
                                        <path
                                            stroke={focused ? "#f00" : "#fff"}
                                            strokeWidth="2"
                                            d="M1.5 17.5v-1a5 5 0 015-5h4a5 5 0 015 5v1h-14z"
                                        />
                                    </svg>
                                case 'Other':
                                    return <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="22"
                                        fill="none"
                                        viewBox="0 0 25 22"
                                    >
                                        <path
                                            stroke={focused ? "#f00" : "#fff"}
                                            strokeWidth="2"
                                            d="M12.5 1.658l11 6.416v5.848l-11 6.325-11-6.325V8.073l11-6.416zM13.5 13.5l9-5"
                                        />
                                    </svg>
                                case 'Reminder':
                                    return <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 17 20"
                                    >
                                        <path
                                            stroke={focused ? "#f00" : "#fff"}
                                            strokeWidth="2"
                                            d="M1.5 10.5a7 7 0 0114 0v5h-14v-5zM8.5.5v4"
                                        />
                                        <path
                                            stroke={focused ? "#f00" : "#fff"}
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            d="M7.5 18.5h2"
                                        />
                                    </svg>
                            }
                        },
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })
                }}>
                    <Tab.Screen name="Home" component={Home}/>
                    <Tab.Screen name="Action" component={Action}/>
                    <Tab.Screen name="Profile" component={Profile}/>
                    <Tab.Screen name="Other" component={Empty}/>
                    <Tab.Screen name="Reminder" component={Empty}/>
                </Tab.Navigator>
            </NavigationContainer>

            {state.fab ? <Fab
                borderRadius="full"
                colorScheme="indigo"
                placement="bottom-right"
                onPress={() => {
                    if (navigationRef.isReady()) {
                        navigationRef.navigate('MyModal');
                    }
                }}
                style={{marginBottom: 50}}
                icon={
                    <Icon
                        color="white"
                        as={<Ionicons name="qr-code"/>}
                        size="8"

                    />
                }
            /> : null}
        </NativeBaseProvider>
    );
}