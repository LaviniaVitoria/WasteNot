import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

import LoginScreen from '../App/telas/login';
import Cadastro from "../App/telas/cadastro";
import Drawer from './drawerStack';
import Carrinho from '../App/telas/carrinho';


import Header from '../shared/header.js'

const screens = {
    Login: {
        screen:LoginScreen,
        navigationOptions:{
            title: 'Seja Bem-vindo!',
            
        }
    },
    TelaCadastro:{
        screen: Cadastro,
        navigationOptions:{
            title: 'Cadastro'
        }
    },
    Drawer:{
        screen:Drawer,
        navigationOptions: ({navigation}) => {
            return{
                headerLeft:null,
                headerTitle:() => <Header navigation={navigation}/>,
            }
        }
    },
    Carrinho:{
        screen:Carrinho
    }
}

const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{
    headerStyle: {backgroundColor: '#aeead3'}, 
    headerTintColor: 'green',}
});

export default createAppContainer(HomeStack);