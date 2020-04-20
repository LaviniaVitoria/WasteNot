import {createStackNavigator} from 'react-navigation-stack';

import DrawerStack from './stacks/drawerStack.js';
import { createAppContainer } from 'react-navigation';

const Navigator = createStackNavigator({
    drawerStack: {screen:DrawerStack}
}, {
    initialRouteName: 'drawerStack'
})

const App = createAppContainer(Navigator);

export default App;