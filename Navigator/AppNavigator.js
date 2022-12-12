import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductScreen from "../screens/productScreen";
import CartScreen from "../screens/CartScreen";
import OrderScreen from "../screens/OrderScreen";
import productDetailsScreen from "../screens/productDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import LoginScreen from "../AuthScreen/LoginScreen";
import RegisterScreen from "../AuthScreen/RegisterScreen";
import RegisterScreencomp from "../AuthScreen/RegisterScreencomp";
import UserProductScreen from "../screens/UserProductScreen";
import { MaterialIcons } from "@expo/vector-icons";
import EditScreen from "../screens/EditScreen";
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen
          name="Product"
          component={AppTabNavigator}
          options={({ navigation, route }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation, route }) => ({
            headerStyle: {
              backgroundColor: "#F0851B",
            },

            title: "Login here",
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={({ navigation, route }) => ({
            headerStyle: {
              backgroundColor: "#F0851B",
            },

            title: "Register here",
          })}
        />
        <Stack.Screen
          name="RegisterScreencomp"
          component={RegisterScreencomp}
          options={({ navigation, route }) => ({
            headerStyle: {
              backgroundColor: "#F0851B",
            },

            title: "Comp Register here",
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={productDetailsScreen}
          options={({ navigation, route }) => ({
            headerStyle: {
              backgroundColor: "#F0851B",
            },
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons
                  style={{
                    marginHorizontal: 10,
                    overflow: "hidden",
                  }}
                  name="filter"
                  size={32}
                  color="black"
                  onPress={() => {
                    navigation.navigate("YourCart");
                  }}
                />
              </TouchableOpacity>
            ),

            title: route.params?.title,
          })}
        />

        <Stack.Screen
          name="YourCart"
          component={CartScreen}
          options={({ navigation, route }) => ({
            headerStyle: {
              backgroundColor: "#F0851B",
            },

            title: "your favorite",
          })}
        />
        <Stack.Screen name="YourOrder" component={OrderScreen} />
        <Stack.Screen name="EditProduct" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
function AppTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All advertisment"
        component={ProductScreen}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ focused }) => {
            return <FontAwesome5 name="home" size={24} color="#F0851B" />;
          },
          headerStyle: {
            backgroundColor: "#F0851B",
          },

          title: route.params?.title,
        })}
      />
      {/* <Tab.Screen
          name="YourOrder"
           component={OrderScreen}
           options={({ navigation }) => ({

            tabBarIcon: ({ focused }) => {
                return (
                  <FontAweasme name="admin-panel-settings" size={28} color="#F0851B" />

                )

            },

            headerStyle: {
              backgroundColor: '#F0851B'
            },
            
           
            title:'Account'  

        })}
           /> */}
      <Tab.Screen
        name="Add your Advertisment"
        component={UserProductScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="admin-panel-settings"
                size={28}
                color="#F0851B"
              />
            );
          },

          headerStyle: {
            backgroundColor: "#F0851B",
          },

          title: "Add your Advertisment",
        })}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
