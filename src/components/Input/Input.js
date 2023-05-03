import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './Input.style'

function Input({ placeholder, value, onType, isSecure }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onType} secureTextEntry={isSecure} />
        </View>
    )
}

export default Input