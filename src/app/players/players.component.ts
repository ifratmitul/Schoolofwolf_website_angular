import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {


  playerList = [
    { id:0, name:'Mitul', active: true, position:'CB/RB' },
    { id:1, name:'H.Kabir', active: true, position:'CAM/CM/Wing' },
    { id:2, name:'Gazi', active: true, position:'CB/CDM' },
    { id:3, name:'Shimu', active: true, position:'CB/CDM' },
    { id:4, name:'Arefin', active: true, position:'CM/CDM' },
    { id:5, name:'Akash', active: true, position:'ST/Wing' },
    { id:6, name:'Asir', active: true, position:'ST/Wing' },
    { id:7, name:'Rashad', active: true, position:'RB/LB' },
    { id:8, name:'Tanzib', active: true, position:'Wing/CM' },
    { id:9, name:'Ishtiaq', active: true, position:'LB' },
    { id:10, name:'Fahim', active: true, position:'Defense' },
    { id:11, name:'Mahdeen', active: true, position:'Forward' },

]

foundingMember =[{id: 0, name: "Humayan Kabir", position:'Vice Captain'},
                {id: 1, name: "Rafid Ahmed", position: "Self Proclaimed best Player"},
                {id: 2, name: "Ifrat Mitul", position: "Manager"},
                {id: 3, name: "Ayaz Alamgir", position: "Very relaxed winger"},
                ]

  constructor() { }

  ngOnInit(): void {
  }

}
