import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MainBtmBarTheme } from '../consts/consts'
import MainTab from "./MainTab";
import SecTab from "./SecTab";
import Books from './Books'

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
                    name="Books"
                    component={Books}
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
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
