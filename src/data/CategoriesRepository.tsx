import CategoriesDataSource from './CategoriesDataSource';

export default class CategoriesRepository {
  _dataSource: CategoriesDataSource;

  constructor(dataSource: CategoriesDataSource) {
    this._dataSource = dataSource;
  }

  getCategories = () => {
    return this._dataSource.read();
  };
}
