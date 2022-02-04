import Variant from '../domain/Variant';

interface VariantsDataSource {
  read: (modelId: number) => Variant[] | undefined;
}

export default VariantsDataSource;
