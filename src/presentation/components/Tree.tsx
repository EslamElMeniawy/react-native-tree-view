import React from 'react';
import {View, useColorScheme} from 'react-native';

import Colors from '../Colors';

interface Props {
  isDarkMode: boolean;
}

interface State {}

class Tree extends React.PureComponent<Props, State> {
  render(): null | React.ReactElement {
    const {isDarkMode} = this.props;

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    };
    return <View style={backgroundStyle}>{}</View>;
  }
}

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <Tree isDarkMode={isDarkMode} />;
};
