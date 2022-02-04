import Brand from '../domain/Brand';
import {ModelsDataSource} from './ModelsDataSource';
import ModelsDataSourceImp from './ModelsDataSource';

export interface BrandsDataSource {
  read: () => Brand[] | undefined;
}

export default class BrandsDataSourceImp implements BrandsDataSource {
  _modelsDataSource: ModelsDataSource = new ModelsDataSourceImp();

  read: () => Brand[] | undefined = () => {
    return [
      {
        id: 1,
        key: 'brand-1',
        title: 'Brand 1',
        children: this._modelsDataSource.read(),
      },
      {
        id: 2,
        key: 'brand-2',
        title: 'Brand 2',
        children: this._modelsDataSource.read(),
      },
    ];
  };
}
