import AppView from './AppView';
import AppModel from './AppModel';
import AppController from './AppController';

export default class App {
  constructor() {
    this.view = new AppView();
    this.model = new AppModel();
    this.controller = new AppController(this.view, this.model);
  }

  start() {
    this.controller.init();
  }
}
