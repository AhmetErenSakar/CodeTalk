import { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import FloaingButton from '../../components/FloatingButton/FloatingButton';

import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

import parseContent from '../../../utils/parseContent'
import styles from './Loby.style'
import InputModal from '../../components/modal/InpuModal/InputModal';
import Message from '../Message'

function Loby({ navigation, route }) {

    const [isVisible, setIsVisible] = useState(false)
    const [contentList, setContentList] = useState([])

    const item = route.params.item;

    useEffect(() => {
        database().ref(`rooms/${item.id}/messages/`).on('value', snapshot => {
            const contentData = snapshot.val();
            setContentList(contentData)
            const parsedData = parseContent(contentData);
            setContentList(parsedData)
            console.log(parsedData);
        })
    }, [])

    function modalVisible() {
        setIsVisible(!isVisible)
    }

    function handleSendContent(content) {
        modalVisible();
        sendContent(content)
    }

    function sendContent(content) {
        const usermail = auth().currentUser.email;
        const contentObj = {
            messages: content,
            username: usermail.split('@')[0],
            date: new Date().toISOString(),
        }
        database().ref(`rooms/${item.id}/messages/`).push(contentObj)
    }

    function renderContent({ item }) {
        return (
            <Message item={item} />
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Odaya Hoşgeldiniz</Text>
            </View>

            <View style={styles.contentContainer}>
                <FlatList data={contentList} renderItem={renderContent} />
            </View>

            <View style={styles.modalContainer}>
                <InputModal placeholder={'Bir Mesaj Yaz'} isVisible={isVisible} onClose={modalVisible} onSend={handleSendContent} />
            </View>
            <FloaingButton icon={'plus'} onPress={modalVisible} />
        </View>
    )
}

export default Loby;