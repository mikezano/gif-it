import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin("aurelia-animator-css")
    .plugin("aurelia-fetch-client")
    .plugin('aurelia-dialog', config => {
        config.useDefaults();
        config.settings.centerHorizontalOnly = false;
        config.settings.lock = false;
        //TODO: need to add fading in
        config.settings.position = (d:HTMLElement,c) => {
            console.log(d);
            d.style.top = "100px";
            console.log(c);
        };
    })    
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
