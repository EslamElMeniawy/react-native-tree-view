import ModelsDataSource from '../data/ModelsDataSource';
import Model from '../domain/Model';

export default class LocalModelsDataSource implements ModelsDataSource {
  read(_brandId: number) {
    return [
      new Model({id: 1, title: 'Model 1'}),
      new Model({id: 2, title: 'Model 2'}),
    ];
  }
}
