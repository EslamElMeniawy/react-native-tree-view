import CategoriesRepository from '../data/CategoriesRepository';
import LocalCategoriesDataSource from '../framework/LocalCategoriesDataSource';
import Category from '../domain/Category';

export default class GetCategories {
  _categoriesRepository = new CategoriesRepository(
    new LocalCategoriesDataSource(),
  );

  invoke: () => Category[] | undefined = () => {
    return this._categoriesRepository.getCategories();
  };
}
