import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { colors } from '@/styles/colors';
import headImage from '../../../assets/images/head.png';
import iconLogin from '../../../assets/images/iconLogin.png';



export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground source={headImage} resizeMode="cover" style={styles.image}>
                <View style={styles.containerLogin}>
                    <Image source={(iconLogin)}/>
                    <View style={styles.login}>
                        <Text style={styles.tituloLogin}>Faça seu login</Text>
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
        height: '75%',
    },
    containerLogin: {
        marginTop: 280,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        width: '80%',
        marginTop: 15,
        height: 400,
        backgroundColor: 'rgba(255, 255, 255, 1)',        
        borderRadius: 10,
    },
    tituloLogin: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});