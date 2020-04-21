import {createDrawerNavigator} from 'react-navigation-drawer';

import Perfil from '../telas/perfil';
import Loja from '../telas/loja';
import Registrador from '../telas/registrador';
import Diy from '../telas/diy';
import QuemSomos from '../telas/quemSomos';
import Problemas from '../telas/problemas';

const DrawerScreen = createDrawerNavigator({
    Perfil:{screen: Perfil},
    Loja:{screen: Loja},
    Registrador:{screen: Registrador},
    Diy:{screen:Diy},
    QuemSomos:{screen:QuemSomos},
    Problemas:{screen:Problemas}
},{
    headerMode:'none'
})

export default DrawerScreen;