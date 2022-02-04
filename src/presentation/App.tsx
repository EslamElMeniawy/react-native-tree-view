import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Colors from './Colors';
import Tree from './components/Tree';
import {CategoriesDataSource} from '../data/CategoriesDataSource';
import CategoriesDataSourceImp from '../data/CategoriesDataSource';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const categoriesDataSource: CategoriesDataSource =
    new CategoriesDataSourceImp();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Tree items={categoriesDataSource.read()} />
      </ScrollView>
    </SafeAreaView>
  );
};
