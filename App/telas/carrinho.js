import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Carrinho extends Component{

    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#aeead3',
        }, 
        headerTintColor: 'green',
    };

    render(){
        return(
            <View>
                <Text>seus produtos</Text>
            </View>
        );
    }
}

export default Carrinho;