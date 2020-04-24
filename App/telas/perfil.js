import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

class Perfil extends Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="user" size={27}/>
        )

    }

    render(){
        return(
            <View>
                <Text>(pesquisar sobre conexão bluetooth, foto com capa tipo facebook, grafico que se atualiza, conexão com banco)</Text>
            </View>
        );
    }
}

export default Perfil;