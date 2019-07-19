import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeContainer from '../containers/HomeContainer';


const stackNavigatorConfig =  {     
    //headerMode: 'none',
    headerBackTitleVisible: false,
    navigationOptions: {
       gesturesEnabled: false,
    },
    initialRouteName: "Home"
}


const Stack = createStackNavigator(
    {
        Home: {
            screen: HomeContainer, 
            title: 'Home'
        }
    },
    stackNavigatorConfig
);



export default createAppContainer(Stack);