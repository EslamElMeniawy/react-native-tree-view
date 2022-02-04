import Node from './Node';

type VariantType = {
  id: number;
  title?: string;
};

export default class Variant extends Node {
  id: number;

  constructor(data?: VariantType) {
    super(`variant-${data?.id || 0}`);
    this.id = data?.id || 0;
    this.title = data?.title;
  }
}
