import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MainBtmBarTheme } from '../consts/consts'
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from "./MainTab";
import SecTab from "./SecTab";
import Books from './Books'
import BkInfo from "./BkInfo";
import BkAdd from "./BkAdd";
import ImageLogic from "./stackImageGalery/ImageLogic";

const Stack = createStackNavigator();

const stack = () => {
    return(
        <Stack.Navigator initialRouteName="Books">
            <Stack.Screen
                name="Books"
                component={Books}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Books',
                    tabBarIcon: () => (
                        <View>
                            <Icon
                                name={'bold'}
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="BkInfo"
                component={BkInfo}
            />
            <Stack.Screen
                name="BkAdd"
                component={BkAdd}
            />
        </Stack.Navigator>
    )
}


const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={ MainBtmBarTheme }>
            <Tab.Navigator
                shifting={true}
                sceneAnimationEnabled={true}
                initialRouteName="Creator"
            >
                <Tab.Screen
                    name="MainTab"
                    component={MainTab}
                    options={{
                        tabBarLabel: 'MainTab',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'user'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="SecTab"
                    component={SecTab}
                    options={{
                        tabBarLabel: 'SecTab',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'asterisk'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name='Books'
                    options={{
                        tabBarLabel: 'Books',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'bold'}
                                />
                            </View>
                        ),
                    }}
                    component={stack}
                />
                <Tab.Screen
                    name='Image'
                    options={{
                        tabBarLabel: 'Image',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'th'}
                                />
                            </View>
                        ),
                    }}
                    component={ImageLogic}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
