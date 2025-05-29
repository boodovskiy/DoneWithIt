import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

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
        backgroundColor: colors.primary,
        borderRadius: 25,
    },
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        borderRadius: 25,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})

export default ViewImageScreen;