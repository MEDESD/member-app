import QrCode from "./qr-code";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


const Fab = () => {

    const RootStack = createStackNavigator();

    return <RootStack.Navigator>
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
            <RootStack.Screen name="MyModal" component={QrCode}/>
        </RootStack.Group>
    </RootStack.Navigator>
}
export default Fab;
