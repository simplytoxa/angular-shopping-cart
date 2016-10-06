
import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { shopComponent } from './components/shop.component';

angular.module('angularShoppingCart', ['ngAnimate'])
  .config(config)
  .run(runBlock)
  .controller('MainController', MainController)
  .component('shop', shopComponent);
