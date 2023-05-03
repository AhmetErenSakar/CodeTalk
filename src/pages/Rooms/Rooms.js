import { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import FloaingButton from '../../components/FloatingButton/FloatingButton';

import parseContent from '../../../utils/parseContent';


import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Rooms.style'
import InputModal from '../../components/modal/InpuModal/InputModal';
import Room from '../Room/Room';


function Rooms({ navigation }) {

    const [isVisible, setIsVisible] = useState(false)
    const [contentList, setContentList] = useState([])



    useEffect(() => {
        database().ref('rooms/').on('value', snapshot => {
            const contentData = snapshot.val();
            setContentList(contentData)
            const parsedData = parseContent(contentData);
            setContentList(parsedData)
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
            text: content,
            username: usermail.split('@')[0],
            date: new Date().toISOString(),
            messages: [],
        }
        database().ref('rooms/').push(contentObj)
    }

    function renderContent({ item }) {
        return (
            <Room item={item} navigation={navigation} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Rooms</Text>
            </View>
            <View style={styles.contentContainer}>
                <FlatList numColumns={2} contentContainerStyle={{ alignItems: 'center' }} data={contentList} renderItem={renderContent} />
            </View>
            <View style={styles.modalContainer}>
                <InputModal placeholder={'Bir Oda İsmi Yaz'} isVisible={isVisible} onClose={modalVisible} onSend={handleSendContent} />
            </View>
            <FloaingButton icon={'plus'} onPress={modalVisible} />
        </View>
    )
}

export default Rooms;