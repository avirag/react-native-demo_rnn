import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'MainTabsId',
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'navigation.PlaceDetail'
                    },
                    component: {
                      name: 'navigation.FindPlace',
                      options: {
                        topBar: {
                          title: {
                            text: "Find Place"
                          },
                          rightButtons: [
                            {
                              id: 'sideDrawerToggle',
                              // icon: sources[2],
                              text: 'My Button',
                              component: {
                                name: 'navigation.MenuBar'
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Find Place',
                    icon: sources[0]
                  }
                }
              }
            },
            {
              component: {
                name: 'navigation.SharePlace',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Share Place',
                    icon: sources[1]
                  },
                  topBar: {
                    title: {
                      text: "Share Place"
                    }
                  }
                }
              }
            }
          ],
        },
        // drawer: {
        //   left: {
        //     component: {
        //       name: 'navigation.SideDrawer'
        //     }
        //   }
        // },
      }
    });
  });

}

export default startMainTabs;