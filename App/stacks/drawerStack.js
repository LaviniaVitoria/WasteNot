import {createStackNavigator} from 'react-navigation-stack';
import {TouchableHighlight, Text, View} from 'react-native';
import React from 'react';

import DrawerScreen from './drawerScreen';

const DrawerNavigation = createStackNavigator({
    DrawerStack: {screen: DrawerScreen}
},{
    headerMode:'float',
    navigationOptions: ({navigation}) => ({
        headerStyle:{
            backgroundColor:'lightGreen',
            paddingLeft:10,
            paddingRight: 10,
        },
        headerLeft: <View>
            <TouchableHighlight
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    }else{
                        navigation.navigate('DrawerClose');
                    }
                    }}>
                    <Text>=</Text>
            </TouchableHighlight>
        </View>
    })
})

export default DrawerNavigation;