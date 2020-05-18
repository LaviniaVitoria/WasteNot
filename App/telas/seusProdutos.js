import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import { createAppContainer } from 'react-navigation';
Icon.loadFont();


class Main extends Component{
    render(){
        return <LojaContainer />;
    }    
}

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

                <Button title='Abc' onPress={() => this.props.navigation.navigate('')}/>
            </View>
        );
    }
}

const lojaSwitchNavigator = createSwitchNavigator({
    Tela1: Registrador,
});

const LojaContainer = createAppContainer(lojaSwitchNavigator);

export default Registrador;