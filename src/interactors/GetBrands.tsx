import BrandsRepository from '../data/BrandsRepository';
import LocalBrandsDataSource from '../framework/LocalBrandsDataSource';

export default class GetBrands {
  _brandsRepository = new BrandsRepository(new LocalBrandsDataSource());

  invoke = (categoryId: number) => {
    return this._brandsRepository.getBrands(categoryId);
  };
}
