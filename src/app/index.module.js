
import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';

angular.module('angularShoppingCart', ['ngAnimate'])
  .config(config)
  .run(runBlock)
  .controller('MainController', MainController)
  .component('navbar', NavbarComponent)
  .component('content', ContentComponent);
