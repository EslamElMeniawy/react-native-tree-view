import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import Colors from '../Colors';
import Node from '../../domain/Node';

interface Props {
  node?: Node;
  isRoot?: boolean;
  onNodeSelectChange?: (node: Node) => void;
}

interface PropsWithDarkMode extends Props {
  isDarkMode: boolean;
}

type State = {
  isOpened: boolean;
  isSelected: boolean;
};

class TreeNode extends React.PureComponent<PropsWithDarkMode, State> {
  // Variable for mount state.
  _isComponentMounted: boolean = false;

  constructor(props: PropsWithDarkMode) {
    super(props);

    this.state = {
      isOpened: false,
      isSelected: props.node?.isSelected || false,
    };
  }

  componentDidMount() {
    // Set is mounted.
    this._isComponentMounted = true;
  }

  componentWillUnmount() {
    // Clear is mounted.
    this._isComponentMounted = false;
  }

  _onCheckPress = () => {
    if (this._isComponentMounted) {
      const {node, onNodeSelectChange} = this.props;

      if (node) {
        node.isSelected = !node?.isSelected;

        if (onNodeSelectChange) {
          onNodeSelectChange(node);
        }

        this.setState({isSelected: node.isSelected});
      }
    }
  };

  _onTextPress = () => {
    if (this._isComponentMounted) {
      this.setState(prevState => ({isOpened: !prevState.isOpened}));
    }
  };

  _getCurrentNode = () => {
    const {node, isDarkMode} = this.props;
    const textColor = isDarkMode ? Colors.light : Colors.dark;
    const textStyle = {color: textColor};

    return (
      <View style={styles.nodeRow}>
        {this._getCurrentNodeCheck()}
        <TouchableHighlight
          underlayColor={`${textColor}33`}
          style={styles.nodeTextContainer}
          onPress={this._onTextPress}>
          <Text style={textStyle}>{node?.title}</Text>
        </TouchableHighlight>
      </View>
    );
  };

  _getCurrentNodeCheck = () => {
    const {isDarkMode} = this.props;
    const {isSelected} = this.state;

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const borderColor = isDarkMode ? Colors.light : Colors.dark;

    const borderColorStyle = {
      borderColor: borderColor,
    };

    const textStyle = {
      color: isSelected
        ? borderColor
        : isDarkMode
        ? Colors.darker
        : Colors.lighter,
    };

    return (
      <TouchableHighlight
        underlayColor={`${borderColor}33`}
        style={[styles.nodeCheckContainer, backgroundStyle, borderColorStyle]}
        onPress={this._onCheckPress}>
        <Text style={[styles.nodeCheck, textStyle]}>✓</Text>
      </TouchableHighlight>
    );
  };

  _getChildren = () => {
    const {isOpened} = this.state;
    const {node, isDarkMode, onNodeSelectChange} = this.props;

    if (isOpened && node?.children?.length) {
      return node?.children?.map(item => (
        <TreeNode
          key={`tree-node-${item.key}`}
          node={item}
          isDarkMode={isDarkMode}
          onNodeSelectChange={onNodeSelectChange}
        />
      ));
    }

    return null;
  };

  render() {
    const {node, isRoot} = this.props;

    if (node) {
      const marginStyle = {
        marginStart: isRoot ? 0 : 32,
      };

      return (
        <View style={[styles.container, marginStyle]}>
          {this._getCurrentNode()}
          {this._getChildren()}
        </View>
      );
    }

    return null;
  }
}

export default (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  return <TreeNode isDarkMode={isDarkMode} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  nodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nodeCheckContainer: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodeCheck: {
    fontSize: 20,
    lineHeight: 20,
  },
  nodeTextContainer: {
    flex: 1,
    padding: 4,
    marginHorizontal: 8,
  },
});
