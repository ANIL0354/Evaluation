import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen from './Screen';

const Tab = createMaterialTopTabNavigator();

const Meals = ({
     route,
}) => {
    let tabs = route?.params?.data
    delete tabs.date
    const TabBarComponent = (props) => {
        return (
            <Screen {...props} />
        )
    }
    return(
        <Tab.Navigator
            screenOptions={{tabBarStyle: {
            width:'auto'
            },
            tabBarLabelStyle: {
                fontSize: 15,
                textTransform:"capitalize"
            },
            tabBarScrollEnabled:true
            }}
        >
            {Object.keys(tabs).map((item,index) => {
                return (
                    <Tab.Screen name={item}>
                        {
                            (innerProps) =>
                                TabBarComponent({...innerProps,item:tabs[item]})

                        }
                        </Tab.Screen>
                )
            })}
         </Tab.Navigator>
    );
}

export default Meals;
