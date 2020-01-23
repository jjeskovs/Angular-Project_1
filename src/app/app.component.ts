import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe'; // this is default 

    onNavigate(feature: string){
      this.loadedFeature = feature; // this will load the string selected in the click event and passed here as a string
  }
}
