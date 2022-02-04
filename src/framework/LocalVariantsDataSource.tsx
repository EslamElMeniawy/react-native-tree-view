import VariantsDataSource from '../data/VariantsDataSource';
import Variant from '../domain/Variant';

export default class LocalVariantsDataSource implements VariantsDataSource {
  read(_modelId: number) {
    return [
      new Variant({id: 1, title: 'Variant 1'}),
      new Variant({id: 2, title: 'Variant 2'}),
    ];
  }
}
