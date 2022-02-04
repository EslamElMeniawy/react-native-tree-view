import VariantsRepository from '../data/VariantsRepository';
import LocalVariantsDataSource from '../framework/LocalVariantsDataSource';

export default class GetVariants {
  _variantsRepository = new VariantsRepository(new LocalVariantsDataSource());

  invoke = (modelId: number) => {
    return this._variantsRepository.getVariants(modelId);
  };
}
