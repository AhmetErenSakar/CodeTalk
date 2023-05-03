import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';


export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: Dimensions.get('screen').width / 2.3,
        height: Dimensions.get('screen').height / 3.9,
        borderWidth: 1.3,
        borderRadius: 15,
        borderColor: '#E0E0E0'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.oranged,
    }
})