import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../styles/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        bottom: -10,
    },
    headerContainer: {
        alignItems: 'center',
        margin: 10,
    },
    contentContainer: {

    },
    headerText: {
        color: colors.oranged,
        fontSize: 28,
        fontWeight: 'bold',
    }
})