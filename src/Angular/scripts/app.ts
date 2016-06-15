import {Component} from '@angular/core';
import {InputText} from 'primeng/primeng';

@Component({
    selector: 'my-app',
    template: '<h3>My First Angular 2 App Template</h3>  <input type="text" pInputText/>',
    directives: [InputText]
})
export class AppComponent { }