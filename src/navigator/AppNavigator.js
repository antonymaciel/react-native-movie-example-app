import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeContainer from '../containers/HomeContainer';


const stackNavigatorConfig =  {     
    //headerMode: 'none',
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
        }
    },
    stackNavigatorConfig
);



export default createAppContainer(Stack);