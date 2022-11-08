import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MapScreen from "../../screens/MapScreen";
import ScheduleScreen from "../../screens/ScheduleScreen";
import SettingScreen from "../../screens/SettingScreen";

import Icons from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Fontisto";

import { GlobalColors } from "../../infrastructure/GlobalColors";
import HomeStack from "./HomeStack";

const Tabs = createBottomTabNavigator();

const TAB_ICONS = {
  dashboard: "home",
  map: "map",
  schedule: "bus-ticket",
  settings: "settings",
};

const BottomTabsStack = () => {
  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: GlobalColors.primary,
        }}
      >
        <Tabs.Screen
          name="home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icons name={TAB_ICONS.dashboard} size={20} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tabs.Screen
          name="Ticket"
          component={ScheduleScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.schedule} size={20} color={color} />
            ),
            tabBarLabel: "Ticket",
          }}
        />
        <Tabs.Screen
          name="map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icons name={TAB_ICONS.map} size={20} color={color} />
            ),
            tabBarLabel: "Map",
          }}
        />
        <Tabs.Screen
          name="settings"
          component={SettingScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icons name={TAB_ICONS.settings} size={20} color={color} />
            ),
            tabBarLabel: "Settings",
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default BottomTabsStack;
