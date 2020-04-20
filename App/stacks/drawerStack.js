import {createStackNavigator} from 'react-navigation-stack';
import {TouchableHighlight, Text, View} from 'react-native';
import React from 'react';

import DrawerScreen from './drawerScreen';

const DrawerNavigation = createStackNavigator({
    DrawerStack: {screen: DrawerScreen}
})

DrawerNavigation.navigationOptions={
    title:"aaaaaaaaaa",
    headerMode:'float',
    navigationOptions: ({navigation}) => ({
        headerRight: () => <View>
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
}

export default DrawerNavigation;