import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

class Diy extends Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="pencil" size={27}/>
        )

    }

    render(){
        return(
            <View>
                <Text>tipo wikipedia, só q bonito[usar tipo cards]</Text>
            </View>
        );
    }
}

export default Diy;