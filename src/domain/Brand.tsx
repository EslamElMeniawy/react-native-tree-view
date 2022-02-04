import Node from './Node';

type BrandType = {
  id: number;
  title?: string;
};

export default class Brand extends Node {
  id: number;

  constructor(data?: BrandType) {
    super(`brand-${data?.id || 0}`);
    this.id = data?.id || 0;
    this.title = data?.title;
  }
}
