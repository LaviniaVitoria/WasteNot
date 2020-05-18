import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

class QuemSomos extends Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="question" size={27}/>
        )

    }

    render(){
        return(
            <View>
                <Text>
                    [usar tipo cards]
                </Text>
            </View>
        );
    }
}

export default QuemSomos;