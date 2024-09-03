import React, { useEffect, useState, memo } from 'react';
import { View, Image, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { TextInput, Card, Avatar, Text, List, Button } from 'react-native-paper';
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

const DetailsScreen = () => {
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

    const handlePressPerwakilan = (item) => {
        navigation.navigate('Perwakilan', { id: item });
    };
    const handlePressPengganti = (item) => {
        navigation.navigate('Pergantian', { id: item });
    };
    const handlePressPenyerahan = (item) => {
        navigation.navigate('Penyerahan', { id: item });
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
                    <Text style={styles.textHeader}>Detail Data KPM</Text>
                    <TextInput
                        label="Cucu Aminah"
                        readOnly
                        style={styles.input}
                    />
                    <TextInput
                        label="318824010006584"
                        readOnly
                        style={styles.input}
                    />
                    <TextInput
                        label="Jl. Yos Sudarso Rt.001 Rw.002"
                        readOnly
                        style={styles.input}
                    />
                    <TextInput
                        label="Desa Hegarmanah"
                        readOnly
                        style={styles.input}
                    />
                    <TextInput
                        label="Kec. Bojongpicung"
                        readOnly
                        style={styles.input}
                    />
                    <TextInput
                        label="Kab. Cianjur"
                        readOnly
                        style={styles.input}
                    />
                    <TextInput
                        label="Jawa Barat"
                        readOnly
                        style={styles.input}
                    />
                    <View style={styles.buttonContainer}>
                        <Button mode="contained" style={styles.button} onPress={handlePressPerwakilan}>
                            Perwakilan
                        </Button>
                        <Button mode="contained" style={styles.button} onPress={handlePressPengganti}>
                            Pengganti
                        </Button>
                        <Button mode="contained" style={styles.button} onPress={handlePressPenyerahan}>
                            Foto
                        </Button>
                    </View>
                </View>

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
    },
    textHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    imageHeader: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
    cardMenu1: {
        height: 230,
        marginHorizontal: 10,
        marginTop: -90,
    },
    cardMenu2: {
        height: 230,
        marginHorizontal: 10,
        marginTop: -50,
    },
    input: {
        marginVertical: 5,
        height: 40,
        backgroundColor: 'transparent',
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'col',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        width: '100%',
        marginVertical: 10,
    }

});

export default DetailsScreen;