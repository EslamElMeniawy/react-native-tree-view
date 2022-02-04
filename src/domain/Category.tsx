import Node from './Node';

type CategoryType = {
  id: number;
  title?: string;
};

export default class Category extends Node {
  id: number;

  constructor(data?: CategoryType) {
    super(`category-${data?.id || 0}`);
    this.id = data?.id || 0;
    this.title = data?.title;
  }
}
