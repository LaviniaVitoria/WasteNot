import {createDrawerNavigator} from 'react-navigation-drawer';
import {TouchableHighlight, StyleSheet} from 'react-native';
import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { withBadge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

import Perfil from '../telas/perfil';
import Loja from '../telas/loja';
import Registrador from '../telas/seusProdutos';
import Diy from '../telas/diy';
import QuemSomos from '../telas/quemSomos';
import Problemas from '../telas/problemas';

var item=0;
const CartBadge = withBadge(item) (Icon) // icon do carrinho com badge, sendo ela a variavel "item"
 
class MainDrawer extends Component{

    static navigationOptions= {// header
    
        /*headerTitle:*/
        title: 'Waste Not',
        headerMode:'float',
        headerLeft: () => ( // botão de menu à esquerda 
            <TouchableHighlight onPress={()=>openMenu()}>
                <Icon name="navicon" size={40} color="#FFF"/>
            </TouchableHighlight>),
        headerRight: () =>(// botão do carrinho à direita
            <TouchableHighlight style={styles.botaoCart} onPress={()=>openCart()}>
                <CartBadge
                    type="EvilIcons"
                    name="cart"
                    size={40}
                    color="#FFF"
                />
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
        return(// funções para o onClick dos botões do header 
            openMenu=() =>{
                alert('era pra abrir o drawer')
                this.props.navigation.openDrawer;
            },
            openCart=()=>{
                this.props.navigation.navigate("Carrinho")
            },
            <AppContainer/>
        );
    }

}
    
const DrawerScreen = createDrawerNavigator({ // criação do Drawer 
    Perfil: Perfil,
    Loja: Loja,
    Registrador: Registrador,
    Diy:Diy,
    QuemSomos:QuemSomos,
    Problemas:Problemas
})

const AppContainer = createAppContainer(DrawerScreen);

const styles= StyleSheet.create({
    botaoCart:{
        flex:1,
        marginRight:20
    }
})

export default MainDrawer;