import Node from './Node';

type ModelType = {
  id: number;
  title?: string;
};

export default class Model extends Node {
  id: number;

  constructor(data?: ModelType) {
    super(`model-${data?.id || 0}`);
    this.id = data?.id || 0;
    this.title = data?.title;
  }
}
