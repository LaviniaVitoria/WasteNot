import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TouchableHighlight, StyleSheet} from 'react-native';
import { withBadge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();


import Cadastro from "./App/telas/cadastro";
import LoginScreen from './App/telas/login';
import Carrinho from './App/telas/carrinho';
import Perfil from './App/telas/perfil';
import Loja from './App/telas/loja';
import Registrador from './App/telas/seusProdutos';
import Diy from './App/telas/diy';
import QuemSomos from './App/telas/quemSomos';
import Problemas from './App/telas/problemas';
import ProdutosWN from './App/telas/produtosWasteNot';


var item=0;
const CartBadge = withBadge(item) (Icon) // icon do carrinho com badge, sendo ela a variavel "item"

    
const DrawerScreen = createDrawerNavigator({ // criação do Drawer 
  Perfil: Perfil,
  ProdutosWN:ProdutosWN,
  Loja: Loja,
  Registrador: Registrador,
  Diy:Diy,
  QuemSomos:QuemSomos,
  Problemas:Problemas,
})

const styles= StyleSheet.create({
  botaoCart:{
      flex:1,
      marginRight:20
  }
})



const RootStack = createStackNavigator(//Main Navigator
  {
    Login: LoginScreen,
    Drawer: DrawerScreen,
    TelaCadastro: Cadastro,
    Carrinho: Carrinho,
  },
  {
    
  }
);

const AppContainer = createAppContainer(RootStack);

var openMenu=() =>{
  alert('era pra abrir o drawer')
  this.props.navigation.openDrawer;
}

var openCart=()=>{
  alert('era pra abrir o carrinho')
  this.props.navigation.navigate("Carrinho")
}

DrawerScreen.navigationOptions= {// header
  
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


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

