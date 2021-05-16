import React from "react";
import { View, Text } from 'react-native'

const MainTab = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection:'column',
            alignItems:'center',
        }}>
            <Text style={{ fontSize: 20 }}>Морозов Андрій</Text>
            <Text style={{ fontSize: 20 }}>Група ІО-83</Text>
            <Text style={{ fontSize: 20 }}>ЗК ІО-8321</Text>
        </View>
    )
}

export default MainTab
