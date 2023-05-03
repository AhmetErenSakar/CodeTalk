import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../styles/colors'


export default StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height / 10,
        width: Dimensions.get('screen').width / 1.05,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.oranged,
        borderRadius: 15,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        marginTop: -10
    },
    user: {
        flex: 1,
        fontSize: 12,
        color: 'white',
        textAlign: 'left'
    },
    date: {
        flex: 1,
        fontSize: 12,
        color: 'white',
        textAlign: 'right'
    },
    text: {
    fontSize: 26,
    color: 'white'
    }
})