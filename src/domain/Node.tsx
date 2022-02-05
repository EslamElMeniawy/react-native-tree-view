export default class Node {
  key: string;
  isSelected: boolean;
  title?: string;
  children?: Node[];

  constructor(key: string) {
    this.key = key;
    this.isSelected = false;
  }
}
