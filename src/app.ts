
import { autoinject, bindable } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

@autoinject()
export class App {
  public router:Router;
  
  constructor(){
  }

  public configureRouter(config:RouterConfiguration, router:Router){    

    config.title="Zano";
    config.map([
      { route: ['', 'home'], name: 'Home',      moduleId: 'indexes/home', nav: true, title: 'Home' },
      { route: ['gifs'], name: 'Gifs',      moduleId: 'indexes/gifs', nav: true, title: 'Gifs' }
    ]);

    this.router = router;
  }
}