import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cadastro from "./App/telas/cadastro";
import Drawer from './App/telas/drawerScreen';
import LoginScreen from './App/telas/login';
import Carrinho from './App/telas/carrinho';



const RootStack = createStackNavigator(//Main Navigator
  {
    Login: LoginScreen,
    Drawer: Drawer,
    TelaCadastro: Cadastro,
    Carrinho: Carrinho,
  },
  {
    
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}