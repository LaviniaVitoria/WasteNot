import {createDrawerNavigator} from 'react-navigation-drawer';

import Tela1 from '../telas/tela1';
import Tela2 from '../telas/tela2';
import Tela3 from '../telas/tela3';

const DrawerScreen = createDrawerNavigator({
    Tela1:{
        screen: Tela1,
        navigationOptions:{
            title:"A"
        }
    },
    Tela2:{screen: Tela2},
    Tela3:{screen: Tela3}
},{
    headerMode:'none',
})

export default DrawerScreen;