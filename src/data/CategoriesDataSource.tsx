import Category from '../domain/Category';
import {BrandsDataSource} from './BrandsDataSource';
import BrandsDataSourceImp from './BrandsDataSource';

export interface CategoriesDataSource {
  read: () => Category[] | undefined;
}

export default class CategoriesDataSourceImp implements CategoriesDataSource {
  _brandsDataSource: BrandsDataSource = new BrandsDataSourceImp();

  read: () => Category[] | undefined = () => {
    return [
      {
        id: 1,
        key: 'category-1',
        title: 'Category 1',
        children: this._brandsDataSource.read(),
      },
      {
        id: 2,
        key: 'category-2',
        title: 'Category 2',
        children: this._brandsDataSource.read(),
      },
    ];
  };
}
