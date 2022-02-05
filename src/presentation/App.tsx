import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import Colors from './Colors';
import Tree from './components/Tree';
import Category from '../domain/Category';
import AppViewModel from './AppViewModel';
import {Events} from './AppViewModel';
import Node from '../domain/Node';

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
          this.setState({categories});
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

  _onNodeSelectChange = (node: Node) => {
    const {categories} = this.state;
    const newCategories = Array.from(categories || []);

    newCategories.some(category => {
      if (category.key === node.key) {
        category.isSelected = node.isSelected;
        return true;
      }

      category.children?.some(brand => {
        if (brand.key === node.key) {
          brand.isSelected = node.isSelected;
          return true;
        }

        brand.children?.some(model => {
          if (model.key === node.key) {
            model.isSelected = node.isSelected;
            return true;
          }

          model.children?.some(variant => {
            if (variant.key === node.key) {
              variant.isSelected = node.isSelected;
              return true;
            }

            return false;
          });

          return false;
        });

        return false;
      });

      return false;
    });

    if (this._isComponentMounted) {
      this.setState({categories: newCategories});
    }
  };

  _getSelectedVariants = () => {
    const {categories} = this.state;
    const {isDarkMode} = this.props;
    const selectedVariants: string[] = [];

    categories?.forEach(category => {
      let categoryText = '';

      if (category.isSelected) {
        categoryText += category.title || '';
      }

      category.children?.forEach(brand => {
        let brandText = '';

        if (brand.isSelected) {
          if (categoryText.length) {
            categoryText += ' ' + brand.title || '';
          } else {
            brandText += brand.title || '';
          }
        }

        brand.children?.forEach(model => {
          let modelText = '';

          if (model.isSelected) {
            if (brandText.length) {
              brandText += ' ' + model.title || '';
            } else if (categoryText.length) {
              categoryText += ' ' + model.title || '';
            } else {
              modelText += model.title || '';
            }
          }

          model.children?.forEach(variant => {
            let variantText = '';

            if (variant.isSelected) {
              if (modelText.length) {
                modelText += ' ' + variant.title || '';
              } else if (brandText.length) {
                brandText += ' ' + variant.title || '';
              } else if (categoryText.length) {
                categoryText += ' ' + variant.title || '';
              } else {
                variantText += variant.title || '';
              }
            }

            if (variantText.length) {
              selectedVariants.push(variantText);
            }
          });

          if (modelText.length) {
            selectedVariants.push(modelText);
          }
        });

        if (brandText.length) {
          selectedVariants.push(brandText);
        }
      });

      if (categoryText.length) {
        selectedVariants.push(categoryText);
      }
    });

    const titleTextStyle = {
      color: isDarkMode ? Colors.light : Colors.dark,
    };

    const variantTextStyle = {
      color: isDarkMode ? Colors.dark : Colors.light,
      backgroundColor: isDarkMode ? Colors.light : Colors.dark,
    };

    return (
      <>
        <Text style={[styles.selectedVariantTitle, titleTextStyle]}>
          Selected Variants
        </Text>
        <View style={styles.selectedVariantsContainer}>
          {selectedVariants.map(selectedVariant => (
            <Text
              key={selectedVariant}
              style={[styles.selectedVariant, variantTextStyle]}>
              {selectedVariant}
            </Text>
          ))}
        </View>
      </>
    );
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
          <Tree
            items={categories}
            onNodeSelectChange={this._onNodeSelectChange}
          />
          {this._getSelectedVariants()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <App isDarkMode={isDarkMode} />;
};

const styles = StyleSheet.create({
  selectedVariantTitle: {
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 8,
  },
  selectedVariantsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedVariant: {
    padding: 4,
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
