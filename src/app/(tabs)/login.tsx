import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { MaterialIcons } from '@expo/vector-icons';
import headImage from '../../../assets/images/head.png';
import iconLogin from '../../../assets/images/iconLogin.png';
import { colors } from '@/styles/colors';

SplashScreen.preventAutoHideAsync();

export default function Login() {
    const [loaded, error] = useFonts({
        Inter_600SemiBold,
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={headImage} resizeMode="cover" style={styles.image}>
                <View style={styles.containerLogin}>
                    <Image source={iconLogin} />
                    <View style={styles.login}>
                        <Text style={styles.tituloLogin}>Faça seu login</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor='rgba(150, 150, 150, 1)'
                        />
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='Senha'
                                secureTextEntry={!showPassword}
                                placeholderTextColor='rgba(150, 150, 150, 1)'
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <MaterialIcons
                                    name={showPassword ? "visibility-off" : "visibility"}
                                    size={24}
                                    color="black"
                                    style={styles.eyeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.textEsqueceu}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(246, 248, 250, 1)',
    },
    image: {
        width: '100%',
        height: '72%',
    },
    containerLogin: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center',       
    },
    login: {
        width: '80%',
        marginTop: 15,
        height: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 10,
        padding: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    tituloLogin: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 8,
        marginBottom: 18,
        fontFamily: 'Inter_600SemiBold',
    },
    input: {
        alignSelf: 'center',
        width: '95%',
        padding: 10,
        borderRadius: 5,
        fontSize: 15,
        borderWidth: 0.77,
        borderColor: 'rgba(237, 241, 243, 1)',
        marginBottom: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'center',
        marginBottom: 15,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: -20,
    },
    button: {
        backgroundColor: colors.green[500],
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        width: '60%',
    },
    textEsqueceu: {
        color: colors.green[500],
        textAlign: 'right',
        width: '99%',
        fontFamily: 'Inter_600SemiBold',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold',
    },
});
