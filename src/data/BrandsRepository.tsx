import BrandsDataSource from './BrandsDataSource';

export default class BrandsRepository {
  _dataSource: BrandsDataSource;

  constructor(dataSource: BrandsDataSource) {
    this._dataSource = dataSource;
  }

  getBrands = (categoryId: number) => {
    return this._dataSource.read(categoryId);
  };
}
