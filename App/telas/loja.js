import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

class Loja extends Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="cart" size={27}/>
        )

    }

    render(){
        return(
            <View>
                <Text>( informações de cobrança, como cobrar, botão para cadastro de produtos)
 2.1 Cadastro de produtos
       (criar do 0)
 2.2 produtos da empresa
       (loja padrão com carrinho, carrinho q atualiza o número de produtos conforme a pessoa adiciona coisas</Text>
            </View>
        );
    }
}

export default Loja;