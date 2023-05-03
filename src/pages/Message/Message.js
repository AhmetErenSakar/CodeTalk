import React from 'react';
import { View, Text } from 'react-native';

import styles from './Message.style'

import { formatDistance, parseISO } from 'date-fns'

function Message({ item }) {

    const formattedDate = formatDistance(parseISO(item.date), new Date(), { addSuffix: true })

    console.log(formattedDate, 'date-fns');
    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
                <Text style={styles.user}>{item.username}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Text style={styles.text}>{item.messages}</Text>
        </View>
    )
}


export default Message