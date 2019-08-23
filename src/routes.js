// Toda vez que usar a sintaxe de jsx deve importar React (Image...)
import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator, HeaderBackButton } from 'react-navigation';
// createStackNavigator para navegar, barra
// createBottomTabNavigator, menu embaixo
// createMaterialTopTabNavigator, menu em cima
// createDrawerNavigator, menu ao lado

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

// createAppContainer precisa ficar em torno de toda navegação
// createSwitchNavigator Cria navegação entre duas telas sem qualquer tipo de feedback visual
export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
            initialRouteName: 'New',
            defaultNavigationOptions: {
                headerTintColor: '#000',
                headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
                headerBackTitle: null,
            },
            mode: 'modal'
        })
);
// headerBackTitle desativa botão de voltar
// mode: 'modal' altera animação de baixo para cima