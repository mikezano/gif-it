import * as gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import processCSS from './process-css';
import processPug from './process-pug';
import prepareGifs from './prepare-gifs';
import prepareFontAwesome from './prepare-font-awesome';
import copyFiles from './copy-files';
import {build} from 'aurelia-cli';
import * as project from '../aurelia.json';

export default gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS,
    processPug,
    prepareGifs,
    prepareFontAwesome,
    copyFiles
  ),
  writeBundles
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}
