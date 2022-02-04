import React from 'react';
import {View, Text, useColorScheme} from 'react-native';

import Colors from '../Colors';
import Node from '../../domain/Node';

interface Props {
  node?: Node;
  isRoot?: boolean;
}

interface PropsWithDarkMode extends Props {
  isDarkMode: boolean;
}

type State = {
  isOpened: boolean;
};

class TreeNode extends React.PureComponent<PropsWithDarkMode, State> {
  constructor(props: PropsWithDarkMode) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  render() {
    const {node, isRoot} = this.props;

    if (node) {
      return <View>{}</View>;
    }

    return null;
  }
}

export default (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  return <TreeNode isDarkMode={isDarkMode} {...props} />;
};
