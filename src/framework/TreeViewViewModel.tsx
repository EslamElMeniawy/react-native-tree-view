import Interactors from './Interactors';

export default class TreeViewViewModel {
  interactors: Interactors;

  constructor() {
    this.interactors = new Interactors();
  }
}
