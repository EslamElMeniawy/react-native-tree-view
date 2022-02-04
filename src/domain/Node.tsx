interface Node {
  key: string;
  title?: string;
  children?: Array<Node>;
}

export default Node;
