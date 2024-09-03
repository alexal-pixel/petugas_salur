import React, { useEffect, useState, memo } from 'react';
import { View, Image, StyleSheet, FlatList, ActivityIndicator, ScrollView } from 'react-native';
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

const PerwakilanScreen = () => {
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
            {/* <View style={styles.container2}> */}
            <Text style={styles.textHeader}>Data KPM Perwakilan</Text>
            <ScrollView contentContainerStyle={styles.containerKpm}>
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
                <TextInput
                    label="Nama yang mewakili"
                    style={styles.input}
                />
                <TextInput
                    label="No Telepon yang mewakili"
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Button mode="contained" style={styles.button}>
                        Ambil Foto
                    </Button>
                </View>
            </ScrollView>
            {/* </View> */}
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
    containerHeader: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    textHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 20,
    },
    imageHeader: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
    input: {
        // height: 50,
        width: '100%',
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
    },
    containerKpm: {
        flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    container2: {
        padding: 20,
    }

});

export default PerwakilanScreen;