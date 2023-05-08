import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Calendar from "../screens/Calendar";
import Profile from "../screens/Profile";
import Diary from "../screens/Diary";
import Login from "../screens/Login";


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:true}}>
      <Drawer.Screen name="Calendario" component={Calendar} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Diary" component={Diary} />
      <Drawer.Screen name="cerrar sesion" component={Login} />

    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
