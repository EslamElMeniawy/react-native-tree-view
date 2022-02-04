import Category from '../domain/Category';

interface CategoriesDataSource {
  read: () => Category[] | undefined;
}

export default CategoriesDataSource;
