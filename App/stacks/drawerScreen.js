import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer';
import {TouchableHighlight, View} from 'react-native';
import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

import Perfil from '../telas/perfil';
import Loja from '../telas/loja';
import Registrador from '../telas/seusProdutos';
import Diy from '../telas/diy';
import QuemSomos from '../telas/quemSomos';
import Problemas from '../telas/problemas';


class MainDrawer extends Component{

    static navigationOptions= {
    
        /*headerTitle:*/
        title: 'Waste Not',
        headerMode:'float',
        headerLeft: () => (
            <TouchableHighlight onPress={()=>openMenu()}>
                <Icon name="navicon" size={40} color="#FFF"/>
            </TouchableHighlight>),
        headerRight: () =>(
            <TouchableHighlight onPress={()=>openCart()}>
                <Icon name="cart" size={40} color="#FFF"/>
            </TouchableHighlight>),
        headerTitleStyle:{
            textAlign:'center',
            flex: 1
        },
        headerStyle: {
            backgroundColor: '#aeead3',
        }, 
        headerTintColor: 'green',
    
    }

    render(){
        return(
            openMenu=() =>{
                alert('era pra abrir o drawer')
                this.props.navigation.dispatch(DrawerActions.openDrawer());
            },
            openCart=()=>{
                alert('Seus items')
                this.props.navigation.navigate("Carrinho")
            },
            <AppContainer/>
        );
    }

}

const DrawerScreen = createDrawerNavigator({
    Perfil: Perfil,
    Loja: Loja,
    Registrador: Registrador,
    Diy:Diy,
    QuemSomos:QuemSomos,
    Problemas:Problemas
})

const AppContainer = createAppContainer(DrawerScreen);


export default MainDrawer;