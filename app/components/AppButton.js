import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
})

export default AppButton;