import {EventRegister} from 'react-native-event-listeners';
import Brand from '../domain/Brand';
import Category from '../domain/Category';
import Model from '../domain/Model';

import TreeViewViewModel from '../framework/TreeViewViewModel';

export default class AppViewModel extends TreeViewViewModel {
  constructor() {
    super();
  }

  loadCategories = () => {
    const categories = this.interactors.getCategories.invoke();

    categories?.forEach((category, index) => {
      const brands = this._loadCategoryBrands(category);
      category.children = brands;
      categories[index] = category;
    });

    EventRegister.emit(Events.EVENT_APP_CATEGORIES, categories);
  };

  _loadCategoryBrands = (category: Category) => {
    const brands = this.interactors.getBrands.invoke(category.id);

    brands?.forEach((brand, index) => {
      const models = this._loadBrandModels(brand);
      brand.children = models;
      brands[index] = brand;
    });

    return brands;
  };

  _loadBrandModels = (brand: Brand) => {
    const models = this.interactors.getModels.invoke(brand.id);

    models?.forEach((model, index) => {
      const variants = this._loadModelVariants(model);
      model.children = variants;
      models[index] = model;
    });

    return models;
  };

  _loadModelVariants = (model: Model) => {
    return this.interactors.getVariants.invoke(model.id);
  };
}

export const Events = {
  EVENT_APP_CATEGORIES: 'appCategories',
};
