import React, { useEffect, useState, memo } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Avatar, Text, List, TextInput, FAB } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';

const backgroundImage = require('../assets/user.png');

const DetailScreen = ({ route }) => {
    // const { id } = route.params;
    // const [namaGudang, setNamaGudang] = useState('');
    // const [namaDriver, setNamaDriver] = useState('');
    // const [nopolMobil, setNopolMobil] = useState('');
    // const [nomorTelpon, setNomorTelpon] = useState('');
    // const [totalPenyaluran, setTotalPenyaluran] = useState('');
    // const [tanggalMuat, setTanggalMuat] = useState('');
    // const navigation = useNavigation();
    // const [desaList, setDesaList] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');

    // const [hasCameraPermission, setHasCameraPermission] = useState(null);
    // const [type, setType] = useState(Camera.Constants.Type.back);

    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Camera.requestPermissionsAsync();
    //         setHasCameraPermission(status === 'granted');
    //     })();
    // }, []);

    // const flipCamera = () => {
    //     setType(
    //         type === Camera.Constants.Type.back
    //             ? Camera.Constants.Type.front
    //             : Camera.Constants.Type.back
    //     );
    // };

    // if (hasCameraPermission === null) {
    //     return <View />;
    // }
    // if (hasCameraPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }

    // useEffect(() => {
    //     axios.get('https://delapandelapanlogistics.com/api/lo/6/detaillochecker/' + id.nomor_lo.toString())
    //         .then(response => {
    //             const fetchedData = response.data.data;
    //             setNamaGudang(fetchedData[0].nama_gudang);
    //             setNamaDriver(fetchedData[0].nama_driver);
    //             setNopolMobil(fetchedData[0].nomor_mobil);
    //             setNomorTelpon(fetchedData[0].nomor_driver);
    //             setTanggalMuat(fetchedData[0].tanggal_muat);
    //             setTotalPenyaluran(id.total);
    //             const desaKelurahanList = fetchedData.map(item => item.nama_desa_kelurahan + " " + item.jumlah_penyaluran + " KG");
    //             setDesaList(desaKelurahanList);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError('Failed to fetch data');
    //             setLoading(false);
    //         });
    // }, []);

    // const renderDesa = () => {
    //     return desaList.map((item, index) => (
    //         <View key={index} style={styles.inputContainer}>
    //             <TextInput
    //                 label={"Desa " + (index + 1)}
    //                 value={item}
    //                 onChangeText={text => handleNomorDriverChange(text, index)}
    //                 style={styles.input}
    //                 editable={false}
    //             />
    //         </View>
    //     ));
    // };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <View>
                        <Text style={styles.text}>PUNGKI MULYANA</Text>
                        <Text style={styles.textkanan}>CHECKER GBB. SUKAGALIH</Text>
                    </View>
                    <View style={styles.kanan}>
                        <Avatar.Image size={50} source={backgroundImage} style={styles.avatar} />
                    </View>
                </Card.Content>
            </Card>
            <View style={styles.judul}>
                <Text style={styles.kosongan}>Detail Loading Order (LO)</Text>
            </View>
            {/* <ScrollView contentContainerStyle={styles.containerscroll}>
                <TextInput
                    label="Nama Gudang"
                    value={namaGudang}
                    onChangeText={text => setNamaGudang(text)}
                    style={styles.input}
                    editable={false}
                />
                <TextInput
                    label="Tanggal Muat"
                    value={tanggalMuat}
                    onChangeText={text => setTanggalMuat(text)}
                    style={styles.input}
                    editable={false}
                />
                <TextInput
                    label="Nama Driver"
                    value={namaDriver}
                    onChangeText={text => setNamaDriver(text)}
                    style={styles.input}
                    editable={false}
                />
                <TextInput
                    label="Nopol Mobil"
                    value={nopolMobil}
                    onChangeText={text => setNopolMobil(text)}
                    style={styles.input}
                    editable={false}
                />
                <TextInput
                    label="Nomor Telpon Driver"
                    value={nomorTelpon}
                    onChangeText={text => setNomorTelpon(text)}
                    style={styles.input}
                    editable={false}
                />
                {renderDesa()}
                <TextInput
                    label="Total Muatan"
                    value={totalPenyaluran + " KG"}
                    onChangeText={text => setTotalPenyaluran(text)}
                    style={styles.input}
                    editable={false}
                />
            </ScrollView>
            <FAB
                style={styles.fab}
                icon="camera"
                onPress={flipCamera}
            /> */}
        </View>
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
        fontSize: 11,
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
    kontendetail: {
        paddingHorizontal: 20,
    },
    input: {
        marginBottom: 10,
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        fontSize: 13
    },
    containerscroll: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    fab: {
        bottom: 16,
        right: 16,
        position: 'absolute',
        backgroundColor: 'rgba(239,209,177,1)'
    },
});

export default DetailScreen;
