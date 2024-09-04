import React, { useEffect, useState, memo } from 'react';
import { View, Button, Image, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card, Avatar, Text, List } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../assets/user.png');


const DashboardScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get('http://192.168.1.13:5050/api/hakakses/all')
            .then(response => console.log(response.data))
            .catch(error => console.error('Error Lagi:', error));
    }, []);

    const handlePressPenyaluran = (item) => {
        navigation.navigate('Detail', { id: item });
    };
    const handlePressRiwayat = (item) => {
        navigation.navigate('Riwayat', { id: item });
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <View>
                        <Text style={styles.text}>Aldo Al Triansah</Text>
                        <Text style={styles.textkanan}>Petugas Salur</Text>
                    </View>
                    <View style={styles.kanan}>
                        <Avatar.Image size={50} source={backgroundImage} style={styles.avatar} />
                    </View>
                </Card.Content>
            </Card>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Text style={styles.textHeader}>Selamat Datang di SIMBA 88</Text>
                    <Text >SIMBA 88 (Sistem Informasi Manajemen Bantuan Pangan) merupakan aplikasi yang dikembangkan oleh PT. Delapan Delapan Logistics sebagai intrumen penunjang distribusi bantuan pangan.</Text>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={handlePressPenyaluran} // Ganti dengan nama halaman tujuan
                    style={styles.cardMenu1}
                >
                    <Card style={styles.card1}>
                        <Image
                            source={require('../assets/distribusi.jpg')}
                            style={styles.imageHeader}
                            resizeMode="cover"
                        />
                        <Card.Content>
                            <View>
                                <Text style={styles.textHeader}>Penyaluran Bantuan Pangan</Text>
                                <Text style={styles.textBody} >Arahkan Scanner QR Code Ke QR Code yang tersedia dilembar DTT</Text>
                            </View>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={handlePressRiwayat}
                    style={styles.cardMenu2}
                >
                    <Card style={styles.card1}>
                        <Image
                            source={require('../assets/history.jpg')}
                            style={styles.imageHeader}
                        />
                        <Card.Content>
                            <View>
                                <Text style={styles.textHeader}>Riwayat Penyaluran Bantuan Pangan</Text>
                                <Text style={styles.textBody} >Klik Disini untuk melihat riwayat penyaluran bantun stunting kepada KRS</Text>
                            </View>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
            </View>
        </View >
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
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(239,209,177,0.6)',
    },
    card: {
        width: '100%',
        height: 150,
        borderRadius: 0,
        backgroundColor: 'rgba(239,209,177,1)',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    card1: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(239,209,177,1)'
    },
    content: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    kanan: {
        marginTop: 30,
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginBottom: 10,
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textkanan: {
        fontSize: 14,
    },
    judul: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    judulnya: {
        fontSize: 13,
    },
    subjudul: {
        fontSize: 11,
    },
    daftarlo: {
        paddingHorizontal: 10,
    },
    akhir: {
    },
    containerHeader: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    textHeader: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    textBody: {
        fontSize: 12,
    },
    imageHeader: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardMenu1: {
        height: 230,
        marginHorizontal: 10,
        marginTop: -70,
    },
    cardMenu2: {
        height: 230,
        marginHorizontal: 10,
        marginTop: -50,
    }

});

export default DashboardScreen;