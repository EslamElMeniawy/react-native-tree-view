import GetCategories from '../interactors/GetCategories';
import GetBrands from '../interactors/GetBrands';
import GetModels from '../interactors/GetModels';
import GetVariants from '../interactors/GetVariants';

export default class Interactors {
  getCategories: GetCategories;
  getBrands: GetBrands;
  getModels: GetModels;
  getVariants: GetVariants;

  constructor() {
    this.getCategories = new GetCategories();
    this.getBrands = new GetBrands();
    this.getModels = new GetModels();
    this.getVariants = new GetVariants();
  }
}
