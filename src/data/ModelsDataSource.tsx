import Model from '../domain/Model';

interface ModelsDataSource {
  read: (brandId: number) => Model[] | undefined;
}

export default ModelsDataSource;
