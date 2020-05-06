import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cadastro from "./App/telas/cadastro";
import StackMenu from './App/telas/StackMenu';
import LoginScreen from './App/telas/login';



const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Stack: StackMenu,
    TelaCadastro: Cadastro,
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