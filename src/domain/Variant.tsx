import Node from './Node';

type VariantType = {
  id: number;
  title?: string;
};

export default class Variant extends Node {
  constructor(data?: VariantType) {
    super();
    this.key = `variant-${data?.id}`;
    this.title = data?.title;
  }
}
