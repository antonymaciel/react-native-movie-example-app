import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    backroundColorApp: {
        backgroundColor: '#f8f8f8',
    },
    headerContainer: {
        height: 50
    },
    header: {
        fontWeight: 'bold',
        textAlign:'left'
    },
    pageContainer: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    shadow: {...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 3,    
        },
        android: {
          elevation: 5,
        }})
    },
    imageHeader: {
        marginRight: 40,
        height: 130,
        width: 90,
        bottom: -50,
        borderRadius: 4,
    }
});


export default styles;

