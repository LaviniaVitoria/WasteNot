import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

class Registrador extends Component{

    static navigationOptions = {
        title:'Seus Produtos',
        drawerIcon: () => (
            <Icon name="tag" size={27}/>
        )

    }

    render(){
        return(
            <View>
                <Text>Cadastro de produtos (criar do 0) </Text>
            </View>
        );
    }
}

class Teste1 extends Component{

    render(){
        return(
        <View>
        <Text>abcdef </Text>
    </View>
)
    }

}

export default Registrador;