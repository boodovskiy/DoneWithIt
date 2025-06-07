import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    { id: 1, title: 'Message 1', description: 'This is the first message', image: require('../assets/alexbud.jpg') },
    { id: 2, title: 'Message 2', description: 'This is the second message', image: require('../assets/alexbud.jpg') },
    { id: 3, title: 'Message 3', description: 'This is the third message', image: require('../assets/alexbud.jpg') },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = (message) => {
        // Logic to delete the message
        const newMessages = messages.filter((m) => m.id !== message.id);
        setMessages(newMessages);
    }
    
    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => <ListItem 
                    title={item.title} 
                    subTitle={item.description} 
                    image={item.image}
                    onPress={() => console.log('Message selected', item.id)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                    }
                />}
                ItemSeparatorComponent={() => <ListItemSeparator />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;