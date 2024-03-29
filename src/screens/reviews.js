import React from "react";
import { View, FlatList, Text } from "react-native"
import appStyles from "../styles";
import styles from "../styles/reviews";
import ReviewComponent from  "../components/reviewComponent"

class Reviews extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { total_results, results, onNewPage } = this.props;
        return (
            <View style={appStyles.pageContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Reviews ({total_results})</Text>
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
                        if (!this.onEndReachedCalledDuringMomentum & total_results > 8) {
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