import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeContainer from '../containers/homeContainer';
import DetailsContainer from '../containers/detailsContainer';
import ReviewsContainer from '../containers/reviewsContainer';


const stackNavigatorConfig =  {     
    headerBackTitleVisible: true,
    navigationOptions: {
       gesturesEnabled: true,
    },
    initialRouteName: "Home"
}


const Stack = createStackNavigator(
    {
        Home: {
            screen: HomeContainer, 
            title: 'Home'
        },
        Details: {
            screen: DetailsContainer,
            title: 'Details'
        },
        Reviews: {
            screen: ReviewsContainer,
            title: 'Reviews'
        }
    },
    stackNavigatorConfig
);



export default createAppContainer(Stack);