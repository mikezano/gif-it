import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareGifs() {
    //var place = gulp.src('./src/resources/gifs/*');
    //console.log(place);
  const taskGifs = gulp.src( './src/resources/gifs/*' ) //use the file path to your image folder (this is where I put mine)
    .pipe( changedInPlace( { firstPass: true } ) )
    .pipe( gulp.dest( `${project.platform.output}/gifs` ) );

  return taskGifs;
}