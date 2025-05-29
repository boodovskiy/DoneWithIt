import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image
                style={styles.image}
                source={require('../assets/chair.jpg')}
                resizeMode='contain'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
        width: 50,
        height: 50,
        backgroundColor: '#fc5c65',
        borderRadius: 25,
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
        width: 50,
        height: 50,
        backgroundColor: '#4ecdc4',
        borderRadius: 25,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})

export default ViewImageScreen;