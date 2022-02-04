export default class Node {
  key: string;
  title?: string;
  children?: Node[];

  constructor() {
    this.key = '';
  }
}
