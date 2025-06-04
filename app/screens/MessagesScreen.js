import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const messages = [
    { id: 1, title: 'Message 1', description: 'This is the first message', image: require('../assets/alexbud.jpg') },
    { id: 2, title: 'Message 2', description: 'This is the second message', image: require('../assets/alexbud.jpg') },
    { id: 3, title: 'Message 3', description: 'This is the third message', image: require('../assets/alexbud.jpg') },
];

function MessagesScreen(props) {
    return (
        <FlatList 
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) => <ListItem title={item.title} subTitle={item.description} image={item.image} />}
        />
    );
}

export default MessagesScreen;