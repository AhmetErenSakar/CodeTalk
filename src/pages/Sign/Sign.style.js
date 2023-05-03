import { StyleSheet, Dimensions } from 'react-native';


import colors from '../../../styles/colors'


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 80,
        color: colors.oranged,
        marginLeft: Dimensions.get('screen').width / 3.5,
        marginTop: -75,
        marginBottom: 75
    }
})