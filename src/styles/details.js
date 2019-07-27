import { StyleSheet, Dimensions } from 'react-native';

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
        width,
        backgroundColor: 'black'
    },
    posterImage: {
        height: posterHeight,
        width: posterWidth,
        position: 'absolute',
        bottom: -posterDownRange,
        marginLeft: 20,
        backgroundColor: 'black'
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
        flex: 1,
        left: posterWidth + 40,
        width: width - posterWidth - 50,
        marginTop: 23,
        maxHeight: posterDownRange - 23
    },
    generalInfoInner: {
        flex: 1,
        position: 'relative'
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
        flex: 1,
        flexDirection: 'row'
    },
    rating: {
        alignSelf: 'center'
    },
    votesCount: {
        fontWeight: 'bold'
    },
    infoText: {
        fontWeight: '300',
        color: 'black'
    }
});


export default styles;
