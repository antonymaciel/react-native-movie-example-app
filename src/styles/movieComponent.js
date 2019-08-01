import { StyleSheet, Dimensions, Platform } from 'react-native';
import generalStyles from './index'
import { NUM_COLUMS} from '../constants/other'

const {height, width} = Dimensions.get('window');
const itemWidth = (width - ((NUM_COLUMS + 1) * 10)) / NUM_COLUMS;
const headerBarSize = Platform.OS === 'ios' ? 20 : 25;
const itemHeight = (height - ((3 * 10) + 50 + headerBarSize) ) / NUM_COLUMS;

const styles = StyleSheet.create({
    movieContainer: {
        marginTop: 10, 
        marginLeft: 10
    },
    image: {
        borderRadius: 15,
        width: itemWidth,
        height: itemHeight,
    },
    averageContainer: {
        flexDirection: 'row'
    },
     averageGradient: {
        flex: 1,
        position: 'absolute',
        right: 0,
        marginRight: 25,
        marginTop: 25,
        borderRadius: 100,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent:'center',
        ...generalStyles.shadow
    },
    averageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    averageDecimal: {
        color: 'white',
        fontSize: 15
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
    gradient: {
        flex: 1,
        zIndex: 300,
        position:'absolute'
    }
});


export default styles;
