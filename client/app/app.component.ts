import {Component} from '@angular/core';

@Component({
	moduleId: module.id;
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

	fotos: Object[] = [];

	constructor(http: Http){

	}
} 

