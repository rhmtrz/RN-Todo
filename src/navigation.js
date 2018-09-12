import { Navigation } from "react-native-navigation";

import registerScreens from './screens/register-screens';

registerScreens();

export default class Nav {
  constructor() {
    this._initApp();
  }
  _initApp() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.HomeScreen'
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: 'Home',
                      fontSize: 12,
                      //icon: require('../images/one.png')
                    }
                  }
                }
              },
            ],
            options: {}
          }
        }
      });
    });
  }

}
