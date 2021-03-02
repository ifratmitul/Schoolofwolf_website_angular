import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  story = ' This club was founded by 3 members of Battlefield playing Clan Bad Company. Rafid Ahmed, Humayan Kabir & Ifrat Mitul by the name of Boca Senioor and later adopted the name School of Wolf. Our 4th Member was Ayaz Alamgir. After the failure of BFV we adopted FIFA as our main game. Rafid Ahmed parted his way from the club to be cool and Mr.Alamgir is warming the bench of some other team right now !'
  comJ = 'We started our journey in competitive gaming in 2018 with the inclusion of few new players notably Shamim Arefin, Azan Zaman, Ibtehaz Ahmed. In our first competitive tournaments, we played better than the other regular competitive playing team in Bangladesh FIFA Pro Club Community. After that in 2019 with the inclusion of VPG in the community and a game-changing new player Shimu we started playing at the very top level. In FIFA20 we managed to win few trophies & became runners-up in the VPG BD Season 1 by qualifying for Asian Champions League. With the Inclusion of few more BD Pro club legends like Gazi & Rashad we tried do better both on the National & International stage. But as all the good thing come to an end we will not be participating in any competitive tournament after VPG Bangladesh Pro League Season 3.'
  ngOnInit(): void {
  }

}
