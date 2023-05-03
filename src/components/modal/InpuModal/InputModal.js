import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import Modal from 'react-native-modal';

import styles from './InputModal.style'
import Button from '../../Button/Button';


function InputModal({ isVisible, onClose, onSend, placeholder }) {

    const [text, setText] = useState('')

    function handleSend() {
        if (!text) {
            return;
        } else {
            onSend(text)
            setText(null)
        }
    }


    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose} onBackButtonPress={onClose}>
            <View style={styles.container}>
                <TextInput multiline={true} placeholder={placeholder} onChangeText={setText} style={styles.Input} />
                <Button text={'Gönder'} onPress={() => handleSend()} />
            </View>
        </Modal>
    )
}

export default InputModal;