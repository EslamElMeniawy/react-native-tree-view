import VariantsDataSource from './VariantsDataSource';

export default class VariantsRepository {
  _dataSource: VariantsDataSource;

  constructor(dataSource: VariantsDataSource) {
    this._dataSource = dataSource;
  }

  getVariants = (modelId: number) => {
    return this._dataSource.read(modelId);
  };
}
