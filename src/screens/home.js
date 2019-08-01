import React from "react";
import { View, FlatList, RefreshControl } from "react-native"
import styles from "../styles";
import { NUM_COLUMS } from '../constants/other';
import Loading from "../components/loading"
import MovieComponentContainer from '../containers/movieComponentContainer'

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { movies, navigation, loading, onRefresh} = this.props;
        return (
            <View style={styles.pageContainer}> 
                 <FlatList
                    keyboardShouldPersistTaps="always"
                    refreshControl={
                      <RefreshControl
                        refreshing={false}
                        onRefresh={() => onRefresh()}
                      />
                    }
                    numColumns={NUM_COLUMS}
                    data={movies}
                    renderItem={({ item }) =>
                      <MovieComponentContainer navigation={navigation} movie={item} />}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View />}
                    ListFooterComponent={() => (loading && <Loading />)}
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