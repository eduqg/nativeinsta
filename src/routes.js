import { createAppContainer, createStackNavigator } from 'react-navigation';
// createStackNavigator para navegar, barra
// createBottomTabNavigator, menu embaixo
// createMaterialTopTabNavigator, menu em cima
// createDrawerNavigator, menu ao lado

import Feed from './pages/Feed';
import New from './pages/New';

// createAppContainer precisa ficar em torno de toda navegação
// createSwitchNavigator Cria navegação entre duas telas sem qualquer tipo de feedback visual
export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
        defaultNavigationOptions: {
            headerTitle: 'Ins'
        },
    })
);