import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '500'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    image: {
        marginRight: 40,
        height: 130,
        width: 90
    },
    reviewList: {
        flex: 1
    }
});


export default styles;
