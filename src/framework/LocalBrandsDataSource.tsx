import BrandsDataSource from '../data/BrandsDataSource';
import Brand from '../domain/Brand';

export default class LocalBrandsDataSource implements BrandsDataSource {
  read(_categoryId: number) {
    return [
      new Brand({id: 1, title: 'Brand 1'}),
      new Brand({id: 2, title: 'Brand 2'}),
    ];
  }
}
