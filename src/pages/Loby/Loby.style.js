import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../styles/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        bottom: -10,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 40,
        borderWidth: 1,
        borderColor: colors.oranged,
        borderRadius: 15,
    },
    headerText: {
        fontSize: 18,
        color: colors.oranged
    }
})