import Node from './Node';

type CategoryType = {
  id: number;
  title?: string;
};

export default class Category extends Node {
  constructor(data?: CategoryType) {
    super();
    this.key = `category-${data?.id}`;
    this.title = data?.title;
  }
}
