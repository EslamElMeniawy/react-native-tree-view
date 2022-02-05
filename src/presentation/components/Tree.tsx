import React from 'react';
import {View, useColorScheme} from 'react-native';

import Colors from '../Colors';
import Node from '../../domain/Node';
import TreeNode from './TreeNode';

interface Props {
  items?: Node[];
  onNodeSelectChange?: (node: Node) => void;
}

export default (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {items, onNodeSelectChange} = props;

  if (items && items.length) {
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    };

    return (
      <View style={backgroundStyle}>
        {items.map(item => (
          <TreeNode
            key={`tree-node-${item.key}`}
            isRoot
            node={item}
            onNodeSelectChange={onNodeSelectChange}
          />
        ))}
      </View>
    );
  }

  return null;
};
