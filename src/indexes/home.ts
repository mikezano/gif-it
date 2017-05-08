import {bindable, autoinject} from 'aurelia-framework';
import { GifApi } from "../api/gif-api"

@autoinject()
export class Home{

    public gif:string;

    constructor(
        private apiService: GifApi
    ){
    }

	public attached(): void {

		//setTimeout(() => { this.openDialog() }, 1000);
		setInterval(() => {
			this.apiService.getRandomGif().then(result => {
                debugger;
				this.gif = result;
			});

		}, 3000);  
    }  
}
