import {CategoriesDataSource} from './CategoriesDataSource';
import Category from '../domain/Category';

export default class CategoriesRepository {
  _dataSource: CategoriesDataSource;

  constructor(dataSource: CategoriesDataSource) {
    this._dataSource = dataSource;
  }

  read: () => Category[] | undefined = () => {
    return this._dataSource.read();
  };
}
