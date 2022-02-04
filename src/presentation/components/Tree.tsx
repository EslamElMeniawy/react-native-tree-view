import React from 'react';
import {View, useColorScheme} from 'react-native';

import Colors from '../Colors';
import Node from '../../domain/Node';

interface Props {
  isDarkMode: boolean;
  items?: Array<Node>;
}

interface State {}

class Tree extends React.PureComponent<Props, State> {
  render(): null | React.ReactElement {
    const {isDarkMode, items} = this.props;

    if (items && items.length) {
      const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      };

      return <View style={backgroundStyle}>{}</View>;
    }

    return null;
  }
}

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <Tree isDarkMode={isDarkMode} />;
};
