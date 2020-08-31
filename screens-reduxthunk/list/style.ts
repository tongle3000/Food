import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff'
    },
    text: {
        flex: 1,
        marginLeft: 10,
    },
    image: {
        width: 100, height: 100, borderRadius: 5,
    },
    title: {
        // lineHeight:30,
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '500'
    },
    desc: {
        lineHeight: 19,
    },
})