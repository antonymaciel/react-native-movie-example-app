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
        const { reviews } = this.props.reviews;
        if (reviews) {
            return (
                <View style={appStyles.pageContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Reviews ({reviews.total_results})</Text>
                        <Image style={styles.image} resizeMode='contain' source={{uri: this.props.posterUrl}} />
                    </View>
                
                        <FlatList
                            style={styles.reviewList}
                            keyboardShouldPersistTaps="always"
                            refreshControl={
                            <RefreshControl
                                refreshing={false}
                                onRefresh={() => console.log('pending')}
                            />
                            }
                            data={reviews.results}
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
                                this.props.onNewPage();
                                this.onEndReachedCalledDuringMomentum = true;
                            }
                            }}
                            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                        />
                   
                </View>
            );
        } else 
            return <Text>Loading ...</Text>;
    }
    
  }

export default Reviews;