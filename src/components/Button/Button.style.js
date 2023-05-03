import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../styles/colors'

const baseStyle = StyleSheet.create({
    container: {
        margin: 10,
    },
    button_container: {
        alignItems: 'center',
        height: Dimensions.get('screen').height / 25,
        color: 'white',
        borderRadius: 5,
        borderColor: colors.oranged,
        borderWidth: 1,
    },
    title: {
        margin: 4,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default {
    primary: StyleSheet.create({
        ...baseStyle,
        button_container: {
            ...baseStyle.button_container,
            backgroundColor: colors.oranged,
        },
        title: {
            ...baseStyle.title,
            color: 'white',
        },

    }),
    secondary: StyleSheet.create({
        ...baseStyle,
        button_container: {
            ...baseStyle.button_container,
            backgroundColor: 'white',
        },
        title: {
            ...baseStyle.title,
            color: colors.oranged,

        }
    })
}