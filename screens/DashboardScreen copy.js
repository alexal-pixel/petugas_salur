// import React from 'react';
// import { View, StyleSheet, ImageBackground } from 'react-native';
// import { Avatar, Drawer, Text, Button, Card } from 'react-native-paper';

// const backgroundImage = require('../assets/background2.jpg'); // Ganti dengan path gambar kamu

// const DashboardScreen = ({ navigation }) => {
//     const handleLogout = () => {
//         navigation.navigate('Login');
//     };

//     return (
//         // <ImageBackground source={backgroundImage} style={styles.background}>
//         //     <View style={styles.container}>
//         //         <Card style={styles.card} >
//         //             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//         //             <Card.Content style={styles.card2}>
//         //                 <View style={styles.card}>
//         //                     <Avatar.Image
//         //                         size={50}
//         //                         source={{ uri: 'https://example.com/avatar.jpg' }}
//         //                         style={styles.avatar}
//         //                     />
//         //                     <Text style={styles.text}>Selamat datang!</Text>
//         //                 </View>
//         //             </Card.Content> 
//                     {/* <View style={styles.judul}>
//                 <Text style={styles.kosongan}>Purchase Order (PO) Menunggu</Text>
//             </View>
//             <View style={styles.daftarlo} height="72%" >
//                 <FlatList
//                     data={data}
//                     renderItem={({ item }) => <ListItem item={item} onPress={handlePress} />}
//                     keyExtractor={item => item.id_lo.toString()}
//                     initialNumToRender={10} // Batasi item awal yang dirender
//                     maxToRenderPerBatch={10} // Batasi item per batch render
//                 />
//             </View>
//                 </Card>
//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     // background: {
//     //     flex: 1,
//     //     resizeMode: 'cover',
//     //     justifyContent: 'flex-start',
//     // },
//     // container: {
//     //     flex: 1,
//     //     paddingHorizontal: 0,
//     //     paddingBottom: 0,
//     //     justifyContent: 'flex-start',
//     // },
//     // card: {
//     //     width: '100%',
//     //     borderRadius: 0,
//     //     borderBottomLeftRadius: 30,
//     //     borderBottomRightRadius: 30,
//     //     flexDirection: 'row',
//     //     alignItems: 'center',
//     // },
//     // card2: {
//     //     position: 'relative',
//     //     width: '100%',
//     //     borderRadius: 0,
//     //     backgroundColor: 'transparent',
//     //     flexDirection: 'row',
//     //     alignItems: 'center',
//     // },
//     // avatar: {
//     //     marginRight: 20,
//     //     marginTop: 30,
//     // },
//     // text: {
//     //     fontSize: 14,
//     //     fontWeight: 'bold',
//     //     color: '#333',
//     //     marginTop: 30,
//     // },
// });

// export default DashboardScreen;
