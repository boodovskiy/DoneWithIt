import { View, StyleSheet, Image, TouchableHighlight  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';  
 import { Swipeable } from 'react-native-gesture-handler';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={colors.light}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.white,
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
        marginLeft: 10,
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium,
    },
})

export default ListItem;