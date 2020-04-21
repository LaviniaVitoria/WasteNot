import {createStackNavigator} from 'react-navigation-stack';
import {TouchableHighlight, Text, View,Image, StyleSheet} from 'react-native';
import React from 'react';

import DrawerScreen from './drawerScreen';

const DrawerNavigation = createStackNavigator({
    DrawerStack: {screen: DrawerScreen}
},{
    headerMode:'none',
})

function LogoHeader(){

    return(
        <View>
            <Text>Waste Not 
                <Image
                    source= {require('../imagens/logo.png')}
                    style={styles.logo}
                />
            </Text>
            
        </View>
    )

}

DrawerNavigation.navigationOptions={
    headerTitle: props => <LogoHeader {...props} />,
    headerMode:'float',
    headerRight: <Text></Text>,
    headerTitleStyle:{
        textAlign:'center',
        flex: 1
    },
    headerStyle: {
        backgroundColor: '#aeead3',
    }, 
    
    navigation: {
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
    }
}

const styles = StyleSheet.create({
    logo: {
      width: 20,
      height: 20,
      borderRadius: 5,
      }
})

export default DrawerNavigation;