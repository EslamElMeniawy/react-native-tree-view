import React from 'react';
import {View, useColorScheme} from 'react-native';

import Colors from '../Colors';
import Node from '../../domain/Node';

interface Props {
  items?: Array<Node>;
}

export default (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {items} = props;

  if (items && items.length) {
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    };

    return <View style={backgroundStyle}>{}</View>;
  }

  return null;
};
