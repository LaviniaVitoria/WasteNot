import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

class Loja extends React.Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="cart" size={27}/>
        )

    }

    render(){
        return(
            <View>
                <Text>(informações de cobrança, como cobrar)</Text>
                <Text>produtos da empresa (loja padrão com carrinho, carrinho q atualiza o número de produtos conforme a pessoa adiciona coisas)  </Text>
            </View>
        );
    }
}

export default Loja;