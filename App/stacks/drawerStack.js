import {createStackNavigator} from 'react-navigation-stack';

import DrawerScreen from './drawerScreen';

const DrawerNavigation = createStackNavigator({
    DrawerScreen: {screen: DrawerScreen}
},{
    headerMode:'float',
})

DrawerNavigation.navigationOptions={

    header:null,

}

export default DrawerNavigation;