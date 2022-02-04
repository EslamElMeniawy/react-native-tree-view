import Variant from '../domain/Variant';

export interface VariantsDataSource {
  read: () => Variant[] | undefined;
}

export default class VariantsDataSourceImp implements VariantsDataSource {
  read: () => Variant[] | undefined = () => {
    return [
      {id: 1, key: 'variant-1', title: 'Variant 1'},
      {id: 2, key: 'variant-2', title: 'Variant 2'},
    ];
  };
}
