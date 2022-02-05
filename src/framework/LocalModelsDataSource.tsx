import ModelsDataSource from '../data/ModelsDataSource';
import Model from '../domain/Model';

export default class LocalModelsDataSource implements ModelsDataSource {
  read(brandId: number) {
    return [
      new Model({id: brandId * 1 + 3, title: `Model ${brandId * 1 + 3}`}),
      new Model({id: brandId * 2 + 4, title: `Model ${brandId * 2 + 4}`}),
    ];
  }
}
