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
      description:
        'Marhahúspogácsák, bacon, érlelt sajtszelet, sült hagyma, hagyma és füstös BBQ szósz fényes hamburger zsemlében.',
      link: 'https://www.mcdonalds.com/hu/hu-hu/termekek/bbq-bob.html',
    },
    {
      title: 'Big Mac®',
      imageUrl: 'assets/bigmac.jfif',
      description:
        'Hamburger marhahúspogácsa (2db), ömlesztett cheddar sajtszelet, hagymadarabok, jégsaláta, kapros savanyú uborka, Big Mac® szósz, szezámmagos zsemlében.',
      link: 'https://www.mcdonalds.com/hu/hu-hu/termekek/big-mac.html',
    },
    {
      title: 'Hamburger',
      imageUrl: 'assets/hamburger.jfif',
      description:
        'Marhahúspogácsa zsemlében, savanyú uborkával, hagymával, ketchuppal és mustárral.',
      link: 'https://www.mcdonalds.com/hu/hu-hu/termekek/hamburger.html',
    },
    {
      title: 'Maestro Honey Holly',
      imageUrl: 'assets/maestro_honeyholly.jfif',
      description:
        'Íróval pácolt csirkemellfilé, panírozott, elősütött, főtt és gyorsfagyasztott, érlelt Maasdam sajtszelet, szeletelt paradicsom, rukkola saláta mix, mézes-mustáros szósz, hamburger zsemlében szezámos és mákos szórással.',
      link: 'https://www.mcdonalds.com/hu/hu-hu/termekek/maestro-honey-holly.html',
    },
  ];
}
