import React, { Component, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';


export default class Feed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
    
    }
});