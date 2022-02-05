import VariantsDataSource from '../data/VariantsDataSource';
import Variant from '../domain/Variant';

export default class LocalVariantsDataSource implements VariantsDataSource {
  read(modelId: number) {
    return [
      new Variant({id: modelId * 1 + 5, title: `Variant ${modelId * 1 + 5}`}),
      new Variant({id: modelId * 2 + 6, title: `Variant ${modelId * 2 + 6}`}),
    ];
  }
}
