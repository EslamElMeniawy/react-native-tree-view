import BrandsDataSource from '../data/BrandsDataSource';
import Brand from '../domain/Brand';

export default class LocalBrandsDataSource implements BrandsDataSource {
  read(categoryId: number) {
    return [
      new Brand({id: categoryId * 1 + 1, title: `Brand ${categoryId * 1 + 1}`}),
      new Brand({id: categoryId * 2 + 2, title: `Brand ${categoryId * 2 + 2}`}),
    ];
  }
}
