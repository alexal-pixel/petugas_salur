import React, { useEffect, useState, memo } from 'react';
import { View, Button, Image, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card, Avatar, Text, List } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const backgroundImage = require('../assets/user.png');

const ListItem = memo(({ item, onPress }) => (
    <List.Item
        title={item.nama_driver + " (" + item.nomor_mobil + ")"}
        description={"Tanggal " + item.tanggal_muat + " Total Muatan " + item.total + " Kg"}
        left={props => <List.Icon {...props} icon="folder" />}
        descriptionStyle={styles.subjudul}
        titleStyle={styles.judulnya}
        onPress={() => onPress(item)}
    />
));

const DashboardScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get('https://delapandelapanlogistics.com/api/lo/6/filterchecker/2024-06-01/2024-06-30/46')
            .then(response => {
                setData(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch data');
                setLoading(false);
            });
    }, []);

    const handlePress = (item) => {
        navigation.navigate('Detail', { id: item });
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
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
            )}
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Text style={styles.textHeader}>Selamat Datang di SIMBA 88</Text>
                    <Text >SIMBA 88 (Sistem Informasi Manajemen Bantuan Pangan) merupakan aplikasi yang dikembangkan oleh PT. Delapan Delapan Logistics sebagai intrumen penunjang distribusi bantuan pangan.</Text>
                </View>
                {/* <Card style={styles.card1}>
                    <Card.Content>
                        
                    </Card.Content>
                </Card> */}
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={handlePress} // Ganti dengan nama halaman tujuan
                    style={styles.cardMenu1}
                >
                    <Card>
                        <Card.Content>
                            <View>
                                <Image
                                    source={require('../assets/distribusi.jpg')} // Pastikan path menuju gambar sudah benar
                                    style={styles.imageHeader}
                                    resizeMode="cover" // Atur sesuai kebutuhan (cover, contain, stretch, dll)
                                />
                                <Text style={styles.textHeader}>Penyaluran Bantuan Pangan</Text>
                                <Text>Arahkan Scanner QR Code Ke QR Code yang tersedia dilembar DTT, Kemudian Ambil Foto KPM sesuai dengan data KPM.</Text>
                            </View>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Card style={styles.cardMenu2}>
                    <Card.Content>
                        <View>
                            <Image
                                source={require('../assets/history.jpg')} // Pastikan path menuju gambar sudah benar
                                style={styles.imageHeader}
                            // resizeMode="contain" // Atur sesuai kebutuhan (cover, contain, stretch, dll)
                            />
                            <Text style={styles.textHeader}>Riwayat Penyaluran Bantuan Pangan</Text>
                            <Text >Klik Data KPM untuk melihat riwayat penyaluran bantuan pangan untuk memvalidasi penyaluran sudah sesuai dengan data KPM.</Text>
                        </View>
                    </Card.Content>
                </Card>
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageHeader: {
        width: '100%', // Sesuaikan dengan kebutuhan
        height: 100, // Atur tinggi sesuai kebutuhan
        marginBottom: 10, // Jarak antara gambar dan teks di bawahnya
    },
    cardMenu1: {
        height: 230,
        marginHorizontal: 10,
        marginTop: -80,
    },
    cardMenu2: {
        height: 230,
        marginHorizontal: 10,
        marginTop: -50,
    }

});

export default DashboardScreen;