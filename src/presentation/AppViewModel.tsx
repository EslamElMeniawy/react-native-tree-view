import {EventRegister} from 'react-native-event-listeners';

export default class AppViewModel {
  loadCategories = () => {
    EventRegister.emit(Events.EVENT_APP_CATEGORIES, []);
  };
}

export const Events = {
  EVENT_APP_CATEGORIES: 'appCategories',
};
