import { StyleSheet, Dimensions } from 'react-native';




export default StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        bottom: 40,
        borderRadius: 10,
        height: Dimensions.get('screen').height / 3,
        width: Dimensions.get('screen').width / 1.2
    },
    Input: {
        marginBottom: Dimensions.get('screen').height / 5.5,
        fontWeight: 'bold',
        fontSize: 16,
    }
})