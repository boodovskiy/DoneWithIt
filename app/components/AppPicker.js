import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import defaultStyles from '../config/styles';   
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ icon, placeholder, numberOfColumns = 1, PickerItemComponent = PickerItem, items, onSelectItem, selectedItem, width = "100%" }) {
    // State to control the visibility of the modal
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, { width }]}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
                { selectedItem ? ( 
                    <AppText style={styles.text}>{selectedItem.label}</AppText>
                ) : (
                    <AppText style={styles.placeholder}>{placeholder}</AppText>
                )}
                <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList 
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) => 
                        <PickerItemComponent 
                            item={item}
                            label={item.label} 
                            onPress={() => {
                                console.log(item.label);
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                    }
                />
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center',
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    },
})

export default AppPicker;