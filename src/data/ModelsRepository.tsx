import ModelsDataSource from './ModelsDataSource';

export default class ModelsRepository {
  _dataSource: ModelsDataSource;

  constructor(dataSource: ModelsDataSource) {
    this._dataSource = dataSource;
  }

  getModels = (brandId: number) => {
    return this._dataSource.read(brandId);
  };
}
