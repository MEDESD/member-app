import * as React from 'react';
import {Text, View} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from "native-base";
import Empty from "./pages/empty";
import Action from "./pages/action";
import Profile from "./pages/profile";
import Home from "./pages/home";

const Tab = createBottomTabNavigator();

export default function App() {
    const styleHeader = {
        title: 'Back',
        headerStyle: {
            backgroundColor: '#000',
            borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        headerLeft: () => (
            <svg style={{marginLeft: 20}}
                 xmlns="http://www.w3.org/2000/svg"
                 width="9"
                 height="16"
                 fill="none"
                 viewBox="0 0 9 16"
            >
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M8.318.29a.993.993 0 010 1.406l-5.92 5.92 5.92 5.919a.993.993 0 11-1.405 1.405L.291 8.318a.993.993 0 010-1.405L6.913.291a.993.993 0 011.405 0z"
                    clipRule="evenodd"
                />
            </svg>)
    }


    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    activeBackgroundColor: '#000',
                    inactiveBackgroundColor: '#000',
                }} screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {

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
                                    <circle cx="8.5" cy="4.5" r="3" stroke={focused ? "#f00" : "#fff"} strokeWidth="2"/>
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
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}>
                    <Tab.Screen options={styleHeader} name="Home" component={Home}/>
                    <Tab.Screen options={styleHeader} name="Action" component={Action}/>
                    <Tab.Screen options={styleHeader} name="Profile" component={Profile}/>
                    <Tab.Screen options={styleHeader} name="Other" component={Empty}/>
                    <Tab.Screen options={styleHeader} name="Reminder" component={Empty}/>
                </Tab.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
