import React, { Component, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';
import camera from '../assets/camera.png';


export default class Feed extends Component {
    static navigationOptions =({navigation}) => ({
        headerRight: (
            <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate('New') }>
                <Image source={camera} />
            </TouchableOpacity>
        ),
    });
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});