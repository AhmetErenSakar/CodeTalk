import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Room.style'

function Room({ item, navigation }) {

    function handlePress() {
        navigation.navigate('Loby', { item })
        console.log(item);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export default Room;