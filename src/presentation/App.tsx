import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import Colors from './Colors';
import Tree from './components/Tree';
import Category from '../domain/Category';
import AppViewModel from './AppViewModel';
import {Events} from './AppViewModel';

type Props = {
  isDarkMode: boolean;
};

type State = {
  categories?: Category[];
};

class App extends React.PureComponent<Props, State> {
  _viewModel = new AppViewModel();

  // Variable for mount state.
  _isComponentMounted: boolean = false;

  // Subscription variable for [Events.EVENT_APP_CATEGORIES] event.
  _appCategoriesEventListenerUnsubscribe?: string | boolean;

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Set is mounted.
    this._isComponentMounted = true;

    // Register for incoming events from view model.
    this._registerViewModelEvent();

    // Load content.
    this._viewModel.loadCategories();
  }

  componentWillUnmount() {
    // Clear is mounted.
    this._isComponentMounted = false;

    // Remove listener for view model events.
    this._unRegisterViewModelEvent();
  }

  _registerViewModelEvent = () => {
    this._registerAppCategoriesEvent();
  };

  _unRegisterViewModelEvent = () => {
    this._unRegisterAppCategoriesEvent();
  };

  _registerAppCategoriesEvent = () => {
    this._appCategoriesEventListenerUnsubscribe = EventRegister.on(
      Events.EVENT_APP_CATEGORIES,
      categories => {
        if (this._isComponentMounted) {
          this.setState(categories);
        }
      },
    );
  };

  _unRegisterAppCategoriesEvent = () => {
    if (
      this._appCategoriesEventListenerUnsubscribe &&
      typeof this._appCategoriesEventListenerUnsubscribe === 'string'
    ) {
      EventRegister.rm(this._appCategoriesEventListenerUnsubscribe);
    }
  };

  render() {
    const {isDarkMode} = this.props;
    const {categories} = this.state;

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Tree items={categories} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <App isDarkMode={isDarkMode} />;
};
