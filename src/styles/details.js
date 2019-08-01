import { StyleSheet, Dimensions, Platform } from 'react-native';
import generalStyles from './index'
const {height, width} = Dimensions.get('window');
const posterWidth = height / (2.5 * 1.5 * 1.5);
const backdropImageHeight = height / 2.5;
const posterHeight = backdropImageHeight / 1.5;
const posterDownRange = posterHeight / 2;

const styles = StyleSheet.create({
    headerStyle: { 
        borderBottomWidth: 0
    },
    backdropImage: {
        height: backdropImageHeight,
        width
    },
    posterImage: {
        height: posterHeight,
        width: posterWidth,
        borderRadius: 4
    },
    posterImageContainer: {
        position: 'absolute',
        bottom: -posterDownRange,
        marginLeft: 20,
        zIndex: 200,
        ...generalStyles.shadow
    },
    title: {
        position: 'absolute',
        right: 20,
        marginBottom: 23,
        bottom: 0,
        left: posterWidth + 40,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    generalInfo: {
        left: posterWidth + 40,
        width: width - posterWidth - 50,
        marginTop: 23,
        minHeight: posterDownRange - 23
    },
    descriptionAndButtonContainer: {
        flex: 1, 
        margin: 23
    },
    descriptionText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#696969'
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    votesCount: {
        fontWeight: 'bold'
    },
    infoText: {
        fontWeight: '400',
        color: 'black'
    },
    gradient: {
        flex: 1,
        zIndex: 100,
        position:'absolute'
    },
    averageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 10
    },
    averageText: {
        color: 'rgb(210, 54, 100)',
        fontWeight: 'bold',
        fontSize: 20
    },
    averageDecimal: {
        color: 'rgb(210, 54, 100)',
        fontSize: 15
    },
    buttonGradient: {
        flex: 1,
        position: 'absolute',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 50,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    starsContainer: {
        flexDirection: 'row'
    }
});


export default styles;
