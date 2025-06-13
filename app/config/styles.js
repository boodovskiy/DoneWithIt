import { Platform } from 'react-native';
import colors from './colors';


export default {
    container: {
        backgroundColor: colors.light,
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
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
    colors,
};