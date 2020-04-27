import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer';
import {TouchableHighlight,View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

import Perfil from '../telas/perfil';
import Loja from '../telas/loja';
import Registrador from '../telas/registrador';
import Diy from '../telas/diy';
import QuemSomos from '../telas/quemSomos';
import Problemas from '../telas/problemas';


openMenu=() =>{

    alert('era pra abrir o drawer')
    this.props.navigation.openDrawer()

};

openCart=() =>{
    alert('Seus items')
}

const DrawerScreen = createDrawerNavigator({
    Perfil:{screen: Perfil},
    Loja:{screen: Loja},
    Registrador:{screen: Registrador},
    Diy:{screen:Diy},
    QuemSomos:{screen:QuemSomos},
    Problemas:{screen:Problemas}
})


DrawerScreen.navigationOptions= {
    
    /*headerTitle:*/
    title: 'Waste Not',
    headerMode:'float',
    headerLeft: () => (<TouchableHighlight onPress={()=>openMenu()}>
                            <Icon name="navicon" size={40} color="#FFF"/>
                       </TouchableHighlight>),
    headerRight: () =>(<TouchableHighlight onPress={()=>openCart()}>
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



export default DrawerScreen;