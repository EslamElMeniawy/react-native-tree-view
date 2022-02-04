export default class Node {
  key: string;
  title?: string;
  children?: Node[];

  constructor(key: string) {
    this.key = key;
  }
}
