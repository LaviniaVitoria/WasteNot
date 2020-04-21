import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import DrawerStack from '../stacks/drawerStack.js';

const Navigator = createStackNavigator({
    drawerStack: {screen:DrawerStack}
}, {
    initialRouteName: 'drawerStack'
})

const StackMenu = createAppContainer(Navigator);

StackMenu.navigationOptions = {
  header:null,
};

export default StackMenu;