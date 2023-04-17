import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mcdonalds-clone';

  posts = [
    {
      title: 'BBQ Bob®',
      imageUrl: 'assets/bbqbob.jfif',
      kcal: 802,
    },
    {
      title: 'Big Mac®',
      imageUrl: 'assets/bigmac.jfif',
      kcal: 513,
    },
    {
      title: 'Hamburger',
      imageUrl: 'assets/hamburger.jfif',
      kcal: 250,
    },
    {
      title: 'Maestro Honey Holly',
      imageUrl: 'assets/maestro_honeyholly',
      kcal: 665,
    },
  ];
}
