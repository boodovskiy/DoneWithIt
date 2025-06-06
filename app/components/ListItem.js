import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight  } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';  
 import { Swipeable } from 'react-native-gesture-handler';

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={colors.light}
            >
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#f8f4f4',
        marginVertical: 10,
        borderRadius: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium,
    },
})

export default ListItem;