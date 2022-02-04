import Model from '../domain/Model';
import {VariantsDataSource} from './VariantsDataSource';
import VariantsDataSourceImp from './VariantsDataSource';

export interface ModelsDataSource {
  read: () => Model[] | undefined;
}

export default class ModelsDataSourceImp implements ModelsDataSource {
  _variantsDataSource: VariantsDataSource = new VariantsDataSourceImp();

  read: () => Model[] | undefined = () => {
    return [
      {
        id: 1,
        key: 'model-1',
        title: 'Model 1',
        children: this._variantsDataSource.read(),
      },
      {
        id: 2,
        key: 'model-2',
        title: 'Model 2',
        children: this._variantsDataSource.read(),
      },
    ];
  };
}
