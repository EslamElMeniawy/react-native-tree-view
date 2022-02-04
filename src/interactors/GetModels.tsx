import ModelsRepository from '../data/ModelsRepository';
import LocalModelsDataSource from '../framework/LocalModelsDataSource';

export default class GetModels {
  _modelsRepository = new ModelsRepository(new LocalModelsDataSource());

  invoke = (brandId: number) => {
    return this._modelsRepository.getModels(brandId);
  };
}
