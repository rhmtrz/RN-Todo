import { Navigation } from "react-native-navigation";
//import FeedScreen from "./feed-screen";
import HomeScreen from "./home-screen";

export default () => {
//  Navigation.registerComponentWithRedux(`navigation.FeedScreen`, () => FeedScreen, store, Provider);
  Navigation.registerComponent(`navigation.HomeScreen`, () => HomeScreen);
}
