import React from "react";
import { View, FlatList, Image, Text, RefreshControl } from "react-native"
import appStyles from "../styles";
import styles from "../styles/reviews";
import ReviewComponent from  "../components/reviewComponet"

class Reviews extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { total_results, posterUrl, results, onNewPage } = this.props;
        return (
            <View style={appStyles.pageContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Reviews ({total_results})</Text>
                    <Image style={styles.image} resizeMode='contain' source={{uri: posterUrl}} />
                </View>
                    <FlatList
                        style={styles.reviewList}
                        keyboardShouldPersistTaps="always"
                        data={results}
                        renderItem={({ item }) =>
                            <ReviewComponent 
                                author={item.author}
                                content={item.content}
                                url={item.url}
                            />
                        }
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View />}
                        ListFooterComponent={() => <View />}
                        ListHeaderComponent={() => <View />}
                        onEndReachedThreshold={0.2}
                        onEndReached={() => {
                        if (!this.onEndReachedCalledDuringMomentum) {
                            onNewPage();
                            this.onEndReachedCalledDuringMomentum = true;
                        }
                        }}
                        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                    />
            </View>
        );
    }
}

export default Reviews;