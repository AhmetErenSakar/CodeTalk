import { useState } from 'react';
import { Text, View } from 'react-native';
import { Formik } from 'formik';

import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'

import styles from './Login.style'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


function Login({ navigation }) {

    const [loading, setLoading] = useState(false)

    const initialFormValues = {
        usermail: '',
        password: ''
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            showMessage({
                message: 'Giriş yapıldı',
                type: 'success'
            })
            setLoading(false)
            navigation.navigate('ContentStack')
        } catch (error) {
            showMessage({
                message: error.code,
                type: 'danger',
            })
            setLoading(false)
        }
    }

    function handleSignup() {
        navigation.navigate('Sign')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Code Talks</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input onType={handleChange('usermail')} value={values.usermail} placeholder={'e-posta giriniz'} />
                        <Input onType={handleChange('password')} value={values.password} placeholder={'şifrenizi giriniz'} isSecure />
                        <Button text={'Giriş Yap'} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text={'Kayıt Ol'} font={'secondary'} onPress={handleSignup} loading={loading} />
        </View>
    )
}


export default Login;