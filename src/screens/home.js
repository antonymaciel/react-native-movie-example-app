import React from "react";
import { View, FlatList, RefreshControl } from "react-native"
import styles from "../styles";
import { NUM_COLUMS } from '../constants/other';
import MovieComponentContainer from '../containers/movieComponentContainer'

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { movies, navigation } = this.props;
        return (
            <View style={styles.pageContainer}> 
                 <FlatList
                    keyboardShouldPersistTaps="always"
                    refreshControl={
                      <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log('pending')}
                      />
                    }
                    numColumns={NUM_COLUMS}
                    data={movies}
                    renderItem={({ item }) =>
                      <MovieComponentContainer navigation={navigation} movie={item} />}
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
    }
    
  }

export default Home;