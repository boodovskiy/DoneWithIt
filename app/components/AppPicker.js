import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import defaultStyles from '../config/styles';   
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem }) {
    // State to control the visibility of the modal
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
                <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList 
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => 
                        <PickerItem 
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
        width: '100%',
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
})

export default AppPicker;