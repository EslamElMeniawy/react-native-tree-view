import Node from './Node';

type BrandType = {
  id: number;
  title?: string;
};

export default class Brand extends Node {
  constructor(data?: BrandType) {
    super();
    this.key = `brand-${data?.id}`;
    this.title = data?.title;
  }
}
