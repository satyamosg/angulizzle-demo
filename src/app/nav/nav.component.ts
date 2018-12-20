// step 1: create a comp

import { Component } from '@angular/core'

//decorate the comp 

@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'] 
})

export class NavComponent {
    title = 'Namaste Biatch';
}