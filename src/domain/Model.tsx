import Node from './Node';

type ModelType = {
  id: number;
  title?: string;
};

export default class Model extends Node {
  constructor(data?: ModelType) {
    super();
    this.key = `model-${data?.id}`;
    this.title = data?.title;
  }
}
