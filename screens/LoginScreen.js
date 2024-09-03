import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Snackbar, Text } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const backgroundImage = require('../assets/background.jpg'); // Ganti dengan path gambar kamu

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            navigation.navigate('Dashboard');
            // const response = await axios.post('https://delapandelapanlogistics.com/api/auth/proseslogin', { username, password });
            // if (response.data.id_hak_akses == '8') {
            //     navigation.navigate('Dashboard');
            // } else {
            //     setSnackbarMessage('Username atau Password Salah');
            //     setSnackbarVisible(true);
            // }
        } catch (error) {
            setSnackbarMessage('Username atau Password Salah');
            setSnackbarVisible(true);
        }
    };

    const handleSnackbarDismiss = () => {
        setSnackbarVisible(false);
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.headercard}>BANTUAN STUNTING 2024</Text>
                    <Card.Content>
                        <TextInput
                            label="Username"
                            value={username}
                            onChangeText={text => setUsername(text)}
                            style={styles.input}
                        />
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                            style={styles.input}
                        />
                        <Button mode="contained" onPress={handleLogin} style={styles.button}>
                            Login
                        </Button>
                    </Card.Content>
                </Card>
            </View>
            {/* Snackbar untuk menampilkan notifikasi */}
            <Snackbar
                visible={snackbarVisible}
                onDismiss={handleSnackbarDismiss}
                duration={3000}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>
                        {snackbarMessage}
                    </Text>
                </View>
            </Snackbar>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingBottom: 0,
        justifyContent: 'flex-end',
    },
    card: {
        width: '100%',
        borderRadius: 0,
        backgroundColor: 'rgba(239,209,177,1)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    input: {
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'transparent',
        paddingHorizontal: 0
    },
    button: {
        marginTop: 30,
        marginBottom: 30,
    },
    headercard: {
        marginTop: 30,
        marginBottom: 0,
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
});

export default LoginScreen;
