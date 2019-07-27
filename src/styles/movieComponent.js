import { StyleSheet, Dimensions } from 'react-native';
import { NUM_COLUMS } from '../constants/other'

const {height, width} = Dimensions.get('window');
const itemWidth = (width - ((NUM_COLUMS + 1) * 10)) / NUM_COLUMS;
const itemHeight = (height - (3 * 10 + 63) ) / NUM_COLUMS;

const styles = StyleSheet.create({
    movieContainer: {
        marginTop: 10, 
        marginLeft: 10,
    },
    image: {
        borderRadius: 15,
        width: itemWidth,
        height: itemHeight,
        backgroundColor: 'black'
    },
    averageContainer: {
        position: 'absolute',
        right: 0,
        marginRight: 25,
        marginTop: 25,
        backgroundColor: 'orange',
        borderRadius: 100,
        padding:7
    },
    averageText: {
        color: 'white',
        fontWeight: 'bold'
    },
    titleContainer: {
        marginBottom: 20,
        marginLeft: 20,
        position: 'absolute',
        bottom: 0
    },
    titleText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    date: {
        color: 'white'
    },
});


export default styles;
