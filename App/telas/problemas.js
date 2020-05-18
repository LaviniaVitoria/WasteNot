import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

class Problemas extends Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="chart" size={27}/>
        )

    }

    render(){
        return(
            <View>
                <Text>
                    deixar mais bonitinho, fazer tipo FAQ
                </Text>
            </View>
        );
    }
}

export default Problemas;