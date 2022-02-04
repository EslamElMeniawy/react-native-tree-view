import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Colors from './Colors';
import Tree from './components/Tree';
import Category from '../domain/Category';

type Props = {
  isDarkMode: boolean;
};

type State = {
  categories?: Category[];
};

class App extends React.PureComponent<Props, State> {
  render() {
    const {isDarkMode} = this.props;

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Tree />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <App isDarkMode={isDarkMode} />;
};
