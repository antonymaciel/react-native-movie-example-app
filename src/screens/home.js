import React from "react";
import { View, FlatList, RefreshControl } from "react-native"
import styles from "../styles";
import { NUM_COLUMS } from '../constants/other';
import Movie from '../containers/movieComponentContainer'

class Home extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        console.log('render home', this.props);
        return (
            <View style={styles.pageContainer}>
              { this.props.movies &&  
                 <FlatList
                    keyboardShouldPersistTaps="always"
                    refreshControl={
                      <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log('pending')}
                      />
                    }
                    numColumns={NUM_COLUMS}
                    data={this.props.movies}
                    renderItem={({ item }) =>
                      <Movie movie={item} />}
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
              }
            </View>
        );
    }
    
  }

export default Home;

//pass movies as a prop


/*


<FlatList
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl
            refreshing={this.props.isRefreshing}
            onRefresh={() => this.props.onRefresh()}
          />
        }
        data={words}
        renderItem={({ item }) =>
          <WordItem key={item.id} data={item} onPress={this.props.onPress} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => <ListFooter isFetching={this.props.isFetching} words={words} />}
        extraData={this.props}
        ListHeaderComponent={this.headerComponent}
        onEndReached={() => {
          if (!this.onEndReachedCalledDuringMomentum) {
            this.props.onEndReached();
            this.onEndReachedCalledDuringMomentum = true;
          }
        }
        }
        onEndReachedThreshold={0.1}
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
      />




      <StretchyFlatList
          imageHeight={HEADER_MAX_HEIGHT}
          gradientColors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.9)']}
          foreground={this.headerComponent(
            movieData.movieData,
            movieReactions.movieReactions,
            headerHeight,
            headerTextOpacity,
            imageOpacity,
            imageTranslate,
            imgScale,
          )}
          backgroundColor='#EFEFF4'
          onScroll={(position, scrollReachesToBottomOfHeader) => {}}
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 50 }} // this is to put ive seen this button on movie page
          style={reactionsStyles.root}
          ItemSeparatorComponent={() => (
            <View style={reactionsStyles.separator} />
          )}
          keyExtractor={item => item.slug}
          scrollEventThrottle={1}
          data={movieReactions.movieReactions.movieReactions}
          movieData={movieData.movieData.movieData}
          onPressRight={this.onPressShare}
          renderItem={({ item }) =>
            (<ReactionItem
              key={item.slug}
              reaction={item}
              onUpVote={this.onUpVote}
              onDownVote={this.onDownVote}
            />)
          }
          ListFooterComponent={this.footerComponent(this.props)}
          extraData={this.props}
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            if (!this.onEndReachedCalledDuringMomentum) {
              this.onListEndReachedFlatlist(
                movieReactions.movieReactions.movieReactions.length,
                movieData.movieData.movieData.slug,
                this.props,
              );
              this.onEndReachedCalledDuringMomentum = true;
            }
          }
          }
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
        />
*/