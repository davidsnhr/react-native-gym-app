import React, { useState, useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContentCustom from "./Screens/DrawerContentCustom";
//Theme UI
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
  BottomNavigation,
  BottomNavigationTab,
  Icon
} from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

//Screens
import Profile from "./Screens/Profile";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import Details from "./Screens/Details";
import MyMembership from "./Screens/MyMembership";
import MyDiet from "./Screens/MyDiet";
import DetailsDiet from "./Screens/DetailsDiet";

//Redux
import { connect, Provider } from "react-redux";
import store from "./store";

//icons
import { AiFillHome } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import IconIonic from "react-native-vector-icons/Ionicons";
import IconsAweome from "react-native-vector-icons/FontAwesome";
import IconsMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import DrawerUpperButton from "./Screens/components/DrawerUpperButton";
import MessureCharts from "./Screens/messures/MessureCharts";
import MessuresLegs from "./Screens/messures/MessuresLegs";
import MessuresTorso from "./Screens/messures/MessuresTorso";
import MessuresWeight from "./Screens/messures/MessuresWeight";
import LevelWorkout from "./Screens/workouts/LevelWorkout";
import AdvanceWorkout from "./Screens/workouts/AdvanceWorkout";
import AdvanceWorkoutDetails from "./Screens/workouts/AdvanceWorkoutDetails";
import ImageMenuHarder from "./Screens/components/ImageMenuHarder";
import Promotions from "./Screens/Promotions";
import Avisos from "./Screens/Avisos";
import AccessCode from "./Screens/AccessCode";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="Home" component={Home} />
    <AuthStack.Screen name="RootStackScreen" component={RootStackScreen} />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsMessures = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={MyMembership}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: "Inicio",
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerLeft: () => <DrawerUpperButton navigation={navigation} />,
      })}
    />
    <HomeStack.Screen name="Details" component={Details} />
    <HomeStack.Screen
      name="MyMembership"
      component={MyMembership}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerLeft: () => <DrawerUpperButton navigation={navigation} />,
      })}
    />
  </HomeStack.Navigator>
);

const MessureChartStack = createStackNavigator();
const MessureChartScreen = () => (
  <MessureChartStack.Navigator>
    <MessureChartStack.Screen
      name="MessuresTabs"
      component={TabsScreenMessures}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: () => (<ImageMenuHarder/>),
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerLeft: () => <DrawerUpperButton navigation={navigation} />,
      })}
    />
  </MessureChartStack.Navigator>
);

const DietStack = createStackNavigator();
const DietStackScreen = () => (
  <DietStack.Navigator>
    <DietStack.Screen
      name="MyDiet"
      component={MyDiet}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: () => (<ImageMenuHarder/>),
        headerTitleAlign: "center",
        headerLeft: () => <DrawerUpperButton navigation={navigation} />,
      })}
    />
    <DietStack.Screen
      name="DetailsDiet"
      component={DetailsDiet}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: () => (<ImageMenuHarder/>),
        headerTitleAlign: "center",
      })}
    />
  </DietStack.Navigator>
);

const MembershipStack = createStackNavigator();
const MemershipStackScreen = () => (
  <MembershipStack.Navigator>
    <MembershipStack.Screen
      name="Membership"
      component={MyMembership}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: () => (<ImageMenuHarder/>),
        headerTitleAlign: "center",
        headerLeft: () => <DrawerUpperButton navigation={navigation} />,
      })}
    />
    <MembershipStack.Screen
      name="AccessCode"
      component={AccessCode}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: () => (<ImageMenuHarder/>),
        headerTitleAlign: "center",
      })}
    />
  </MembershipStack.Navigator>
)


const WorkoutStack = createStackNavigator();
const WorkoutStackScreen = () => (
  <WorkoutStack.Navigator>
    <WorkoutStack.Screen
      name="LevelWorkout"
      component={LevelWorkout}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: () => (<ImageMenuHarder/>),
        headerTitleAlign: "center",
        headerLeft: () => <DrawerUpperButton navigation={navigation} />,
      })}
    />
    <WorkoutStack.Screen
      name="AdvanceWorkout"
      component={AdvanceWorkout}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
      })}
    />
    <WorkoutStack.Screen
      name="AdvanceWorkoutDetails"
      component={AdvanceWorkoutDetails}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: () => (<ImageMenuHarder/>),
        headerTitleAlign: "center",
        headerTintColor: "#fff",
      })}
    />
  </WorkoutStack.Navigator>
);

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerLeft: () => <DrawerUpperButton navigation={navigation} />,
      })}
    />
  </ProfileStack.Navigator>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Piernas" />
    <BottomNavigationTab title="Torso" />
    <BottomNavigationTab title="Peso" />
  </BottomNavigation>
);

const BottomHomeTab = ({navigation, state}) => (
  <BottomNavigation
  selectedIndex={state.index}
  onSelect={(index) => navigation.navigate(state.routeNames[index])}
>
  <BottomNavigationTab title="Entrenamientos"  icon={DumbellIcon}/>
  <BottomNavigationTab title="Membresía"  icon={CardIcon}/>
  <BottomNavigationTab title="Promociones"  icon={PromoIcon} />
  <BottomNavigationTab title="Avisos" icon={BellIcon} />
</BottomNavigation>
)

const TabsScreenMessures = () => (
  <TabsMessures.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <TabsMessures.Screen
      name="MessuresLegs"
      component={MessuresLegs}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#2E3A59",
        },
        headerTitle: "Torso",
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerLeft: () => <DrawerUpperButton navigation={navigation} />,
      })}
    />
    <TabsMessures.Screen name="MessureTorso" component={MessuresTorso} />
    <TabsMessures.Screen name="MessuresWeight" component={MessuresWeight} />
  </TabsMessures.Navigator>
);

const DumbellIcon = (props) => (
  <Icon {...props} name="flash-outline"/>
)
const BellIcon = (props) => (
  <Icon {...props} name="bell-outline"/>
)
const PromoIcon = (props) => (
  <Icon {...props} name="trending-down-outline"/>
)

const CardIcon = (props) => (
  <Icon {...props} name='credit-card-outline'/>
);

const TabsScreen = () => (
  <Tabs.Navigator  tabBar={(props) => <BottomHomeTab {...props} />}>
    <Tabs.Screen name="Workout" component={WorkoutStackScreen} />
    <Tabs.Screen name="Details" component={MemershipStackScreen} />
    <Tabs.Screen name="Promo" component={Promotions} />
    <Tabs.Screen name="Avisos" component={Avisos} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
export const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Profile"
    drawerContent={(props) => <DrawerContentCustom {...props} />}
    drawerStyle={{
      backgroundColor: "#222B45",
      width: 240,
    }}
    drawerContentOptions={{
      activeTintColor: "#FEF19D",
      labelStyle: { color: "#FEF19D" },
    }}
  >
    <Drawer.Screen
      name="Inicio"
      component={TabsScreen}
      options={{
        drawerIcon: ({ focused, size }) => (
          <IconIonic
            name="md-home"
            size={size - 3}
            color={focused ? "#FEF19D" : "#ccc"}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Perfil"
      component={ProfileStackScreen}
      options={{
        drawerIcon: ({ focused, size }) => (
          <IconIonic
            name="md-person"
            size={size}
            color={focused ? "#FEF19D" : "#ccc"}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Historial medidas"
      component={MessureChartScreen}
      options={{
        drawerIcon: ({ focused, size }) => (
          <IconIonic
            name="md-stats"
            size={size}
            color={focused ? "#FEF19D" : "#ccc"}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Mi dieta"
      component={DietStackScreen}
      options={{
        drawerIcon: ({ focused, size }) => (
          <IconsMaterial
            name="silverware-fork-knife"
            size={size}
            color={focused ? "#FEF19D" : "#ccc"}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Entrenamiento"
      component={WorkoutStackScreen}
      options={{
        drawerIcon: ({ focused, size }) => (
          <IconsMaterial
            name="dumbbell"
            size={size}
            color={focused ? "#FEF19D" : "#ccc"}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Mi membresia"
      component={MemershipStackScreen}
      options={{
        drawerIcon: ({ focused, size }) => (
          <IconIonic
            name="md-card"
            size={size}
            color={focused ? "#FEF19D" : "#ccc"}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    {console.log("is authenticated", store.getState().auth.isAuthenticated)}
    {store.getState().auth.isAuthenticated ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        headerMode="none"
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};
