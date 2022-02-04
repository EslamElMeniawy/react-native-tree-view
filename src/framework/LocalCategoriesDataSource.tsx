import CategoriesDataSource from '../data/CategoriesDataSource';
import Category from '../domain/Category';

export default class LocalCategoriesDataSource implements CategoriesDataSource {
  read() {
    return [
      new Category({id: 1, title: 'Category 1'}),
      new Category({id: 2, title: 'Category 2'}),
    ];
  }
}
