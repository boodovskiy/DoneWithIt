import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>
                {item.label}   
            </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontSize: 18,
        padding: 20,
    },
})

export default PickerItem;