import { useState } from 'react';
import { Text, View } from 'react-native';
import { Formik } from 'formik';

import styles from './Sign.style'
import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


function Sign({ navigation }) {

    const [loading, setLoading] = useState(false);

    function backLogin() {
        navigation.goBack();
    }

    const initialForValues = {
        usermail: '',
        password: '',
        repassword: ''
    }

    async function handleForSubmit(formValues) {

        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: "şifreler uyuşmuyor",
                type: 'danger'
            })
        }
        try {
            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.repassword)
            showMessage({
                message: "kullanıcı oluşturuldu",
                type: 'success'
            })
            navigation.navigate('Login')
            setLoading(false)
        } catch (error) {
            showMessage({
                message: error.message,
                type: 'danger'
            })
            setLoading(false)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.header}>Code Talks</Text>
                <Formik initialValues={initialForValues} onSubmit={handleForSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                        <>
                            <Input onType={handleChange('usermail')} value={values.usermail} placeholder={'e-posta giriniz'} />
                            <Input onType={handleChange('password')} value={values.password} placeholder={'şifrenizi giriniz'} isSecure />
                            <Input onType={handleChange('repassword')} value={values.repassword} placeholder={'şifrenizi tekrar giriniz'} isSecure />
                            <Button text={'Kayıt Ol'} onPress={handleSubmit} />
                        </>
                    )
                    }
                </Formik>
                <Button text={'Geri'} font={'secondary'} onPress={backLogin} loading={loading} />
            </View>
        </View>
    )
}


export default Sign;