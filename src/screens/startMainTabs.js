import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-search', 30),
    Icon.getImageSource('ios-cube', 30)
  ]).then(sources => {
    const mapIcon = sources[0];
    const shareIcon = sources[1];
    const searchIcon = sources[2];
    const cubeIcon = sources[3];

    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'MainTabsId',
          children: [
            {
              component: {
                name: 'navigation.SlideUpDemo',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Slide Up',
                    icon: cubeIcon
                  },
                  topBar: {
                    title: {
                      text: "Slide Up Demo"
                    }
                  }
                }
              }
            },
            {
              component: {
                name: 'navigation.UserSearch',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Search User',
                    icon: searchIcon
                  },
                  topBar: {
                    title: {
                      text: "Search User"
                    }
                  }
                }
              }
            },
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
                    icon: mapIcon
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
                    icon: shareIcon
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