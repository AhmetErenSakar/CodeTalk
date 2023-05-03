import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import styles from './Button.style'


function Button({ text, onPress, loading, icon, font = 'primary' }) {
    return (
        <TouchableOpacity
            style={styles[`${font}`].container}
            onPress={onPress}
            disabled={loading}
        >
            <View style={styles[`${font}`].button_container}>
                <Text style={styles[`${font}`].title}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;