import Brand from '../domain/Brand';

interface BrandsDataSource {
  read: (categoryId: number) => Brand[] | undefined;
}

export default BrandsDataSource;
