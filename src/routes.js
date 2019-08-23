import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// createStackNavigator para navegar, barra
// createBottomTabNavigator, menu embaixo
// createMaterialTopTabNavigator, menu em cima
// createDrawerNavigator, menu ao lado

import Main from './pages/Main';

// createAppContainer precisa ficar em torno de toda navegação
// createSwitchNavigator Cria navegação entre duas telas sem qualquer tipo de feedback visual
export default createAppContainer(
    createSwitchNavigator({
        Main,
    })
);