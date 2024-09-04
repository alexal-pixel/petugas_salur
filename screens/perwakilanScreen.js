import React, { useEffect, useState, useRef } from 'react';
import { View, Image, StyleSheet, Alert, ActivityIndicator, ScrollView, TouchableOpacity, memo } from 'react-native';
import { TextInput, Card, Avatar, Text, List, Button } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

const backgroundImage = require('../assets/user.png');

// const ListItem = memo(({ item, onPress }) => (
//     <List.Item
//         title={item.nama_driver + " (" + item.nomor_mobil + ")"}
//         description={"Tanggal " + item.tanggal_muat + " Total Muatan " + item.total + " Kg"}
//         left={props => <List.Icon {...props} icon="folder" />}
//         descriptionStyle={styles.subjudul}
//         titleStyle={styles.judulnya}
//         onPress={() => onPress(item)}
//     />
// ));

const PerwakilanScreen = () => {
    const [imageUri1, setImageUri1] = useState(null);
    const [imageUri2, setImageUri2] = useState(null);
    const [locationName, setLocationName] = useState({
        district: '',
        city: '',
        region: '',
        country: ''
    });
    const viewShotRef1 = useRef();
    const viewShotRef2 = useRef();
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // useEffect(() => {
    //     axios.get('https://delapandelapanlogistics.com/api/lo/6/filterchecker/2024-06-01/2024-06-30/46')
    //         .then(response => {
    //             setData(response.data.data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError('Failed to fetch data');
    //             setLoading(false);
    //         });
    // }, []);
    useEffect(() => {
        const requestLocationPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location is required!');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            const reverseGeocode = await Location.reverseGeocodeAsync({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
            });

            if (reverseGeocode.length > 0) {
                const { district, city, region, country } = reverseGeocode[0];
                setLocationName({ district, city, region, country });
            }
        };

        requestLocationPermission();
    }, []);

    const openCameraKtp = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status === 'granted') {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
            });
            if (!result.canceled) {
                setImageUri1(result.assets[0].uri);
            }
        } else {
            alert('Camera permission is required!');
        }
    };

    const openCameraPenyerahan = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status === 'granted') {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
            });
            if (!result.canceled) {
                setImageUri2(result.assets[0].uri);
            }
        } else {
            alert('Camera permission is required!');
        }
    };

    const saveImageWithTimestampKtp = async () => {
        if (viewShotRef1.current) {
            const uri1 = await viewShotRef1.current.capture();
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === 'granted') {
                await MediaLibrary.saveToLibraryAsync(uri1);
                Alert.alert('Success', 'Image with timestamp and location saved to gallery!');
            } else {
                alert('Permission to access media library is required!');
            }
        }
    };

    const saveImageWithTimestampPenyerahan = async () => {
        if (viewShotRef2.current) {
            const uri2 = await viewShotRef2.current.capture();
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === 'granted') {
                await MediaLibrary.saveToLibraryAsync(uri2);
                Alert.alert('Success', 'Image with timestamp and location saved to gallery!');
            } else {
                alert('Permission to access media library is required!');
            }
        }
    };

    const deleteImagesKtp = () => {
        Alert.alert(
            'Delete Image',
            'Are you sure you want to delete this image?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        setImageUri1(null);
                    },
                },
            ],
            { cancelable: true }
        );
    };
    const deleteImagesPenyerahan = () => {
        Alert.alert(
            'Delete Image',
            'Are you sure you want to delete this image?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        setImageUri2(null);
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const getTimestampWithLocation = () => {
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const { district, city, region, country } = locationName;
        return `${date} ${time}\n${district}\n${city}\n${region}, ${country}`;
    };

    const handlePress = (item) => {
        navigation.navigate('Detail', { id: item });
    };

    return (
        <View style={styles.container}>

            <ActivityIndicator size="large" color="#0000ff" />

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
                    label="Nama KPM Perwakilan"
                    style={styles.input}
                />
                <TextInput
                    label="No Telepon KPM Perwakilan"
                    style={styles.input}
                />
                <TextInput
                    label="No NIK KPM Perwakilan"
                    style={styles.input}
                />
                {imageUri1 && (
                    <ViewShot ref={viewShotRef1} options={{ format: "jpg", quality: 0.9 }}>
                        <Image source={{ uri: imageUri1 }} style={styles.image} />
                        <View style={styles.timestampContainer}>
                            <Image source={require('../assets/user1.png')} style={styles.timestampIcon} />
                            <Text style={styles.timestampText}>{getTimestampWithLocation()}</Text>
                        </View>
                    </ViewShot>
                )}

                {imageUri1 && (
                    <View style={styles.buttonContainer}>
                        <Button mode='contained' onPress={saveImageWithTimestampKtp} style={styles.iconButtonSave}>
                            Simpan Foto
                        </Button>
                        <Button mode='contained' onPress={deleteImagesKtp} style={styles.iconButtonDelete}>
                            Hapus Foto
                        </Button>
                    </View>
                )}

                {imageUri2 && (
                    <ViewShot ref={viewShotRef2} options={{ format: "jpg", quality: 0.9 }}>
                        <Image source={{ uri: imageUri2 }} style={styles.image} />
                        <View style={styles.timestampContainer}>
                            <Image source={require('../assets/user1.png')} style={styles.timestampIcon} />
                            <Text style={styles.timestampText}>{getTimestampWithLocation()}</Text>
                        </View>
                    </ViewShot>
                )}

                {imageUri2 && (
                    <View style={styles.buttonContainer}>
                        <Button mode='contained' onPress={saveImageWithTimestampPenyerahan} style={styles.iconButtonSave}>
                            Simpan Foto
                        </Button>
                        <Button mode='contained' onPress={deleteImagesPenyerahan} style={styles.iconButtonDelete}>
                            Hapus Foto
                        </Button>
                    </View>
                )}

                <View style={styles.buttonContainer1}>
                    <Button mode="contained" onPress={openCameraKtp} style={styles.button}>
                        Ambil Foto KTP
                    </Button>
                    <Button mode="contained" onPress={openCameraPenyerahan} style={styles.button}>
                        Ambil Foto Penyerahan
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonContainer1: {
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
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    container2: {
        padding: 20,
    },
    image: {
        width: 320,
        height: 300,
        marginTop: 20,
    },
    timestampContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5,
        width: 280,
    },
    timestampIcon: {
        width: 50,
        height: 50,
        marginRight: 5,
    },
    timestampText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'left',
        lineHeight: 18,
    },
    iconButtonSave: {
        backgroundColor: '#00ff',
    },
    iconButtonDelete: {
        backgroundColor: '#ff0000',
    },
});

export default PerwakilanScreen;