import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

import Perfil from '../App/telas/perfil';
import Loja from '../App/telas/loja';
import Registrador from '../App/telas/seusProdutos';
import Diy from '../App/telas/diy';
import QuemSomos from '../App/telas/quemSomos';
import Problemas from '../App/telas/problemas';
import ProdutosWN from '../App/telas/produtosWasteNot';
import Inicio from '../App/telas/homePage'
    
const DrawerScreen = createDrawerNavigator({ // criação do Drawer 
  Inicio:{
    screen:Inicio,
    navigationOptions:{
        drawerIcon: () => (
            <Icon name="bell" size={27}/>
        )
    }
  },
  Perfil: {
    screen: Perfil,
    navigationOptions:{
        drawerIcon: () => (
            <Icon name="user" size={27}/>
        )
    }
  },
  ProdutosWN:{
    screen:ProdutosWN,
    navigationOptions:{
        title:'Produtos Waste Not',
        drawerIcon: () => (
            <Icon name="archive" size={27}/>
        )
    }
  },
  Loja:{
    screen:Loja,
    navigationOptions:{
        drawerIcon: () => (
            <Icon name="cart" size={27}/>
        )
    }
  },
  Registrador:{
    screen:Registrador,
    navigationOptions:{
        title:'Seus Produtos',
        drawerIcon: () => (
            <Icon name="tag" size={27}/>
        )
    }
  },
  Diy:{
    screen:Diy,
    navigationOptions:{
        drawerIcon: () => (
            <Icon name="pencil" size={27}/>
        )
    }
  },
  QuemSomos:{
    screen:QuemSomos,
    navigationOptions:{
        title:'Quem Somos?',
        drawerIcon: () => ( // icone no drawer
            <Icon name="question" size={27}/>
        )
    }
  },
  Problemas:{
    screen:Problemas,
    navigationOptions:{
        drawerIcon: () => (
            <Icon name="chart" size={27}/>
        )
    }
  }
})

export default createAppContainer(DrawerScreen);

