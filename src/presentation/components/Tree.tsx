import React from 'react';
import {View, useColorScheme} from 'react-native';

import Colors from '../Colors';
import Node from '../../domain/Node';

interface Props {
  items?: Array<Node>;
}

interface PropsWithDarkMode extends Props {
  isDarkMode: boolean;
}

interface State {}

class Tree extends React.PureComponent<PropsWithDarkMode, State> {
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

export default (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  return <Tree isDarkMode={isDarkMode} {...props} />;
};
