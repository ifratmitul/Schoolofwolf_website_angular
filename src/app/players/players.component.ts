import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {


  playerList = [
    { honorableMention: '2017 - 2021', id:0, name:'Mitul', active: true, position:'CB/RB' },
    { honorableMention: '2017 - 2021', id:1, name:'H.Kabir', active: true, position:'CAM/CM/Wing' },
    { honorableMention: '2020 - 2021', id:2, name:'Gazi', active: true, position:'CB/CDM' },
    { honorableMention: '2019 - 2021', id:3, name:'Shimu', active: true, position:'CB/CDM' },
    { honorableMention: '2018 - 2021', id:4, name:'Arefin', active: true, position:'CM/CDM' },
    { honorableMention: '2018 - 2021', id:5, name:'Akash', active: true, position:'ST/Wing' },
    { honorableMention: '2020 - 2021', id:6, name:'Asir', active: true, position:'ST/Wing' },
    { honorableMention: '2020 - 2021', id:7, name:'Rashad', active: true, position:'RB/LB' },
    { honorableMention: 'VPG Bangladesh Pro League S3', id:8, name:'Tanzib', active: true, position:'Wing/CM' },
    { honorableMention: 'VPG Bangladesh Pro League S3', id:9, name:'Ishtiaq', active: true, position:'LB' },
    { honorableMention: 'VPG Bangladesh Pro League S3', id:10, name:'Fahim', active: true, position:'Defense' },
    { honorableMention: '2018 - 2021', id:10, name:'Azan', active: true, position:'LB/CDM' },
    { honorableMention: 'VPG Bangladesh Pro League S3', id:10, name:'Aiman', active: true, position:'CAM' },
    

    { honorableMention: 'VPG Asian Champions League Squad', id:11, name:'Tamkin', active: true, position:'CB' },
    { honorableMention: 'VPG Asian Champions League Squad', id:11, name:'Ishmam', active: true, position:'CB' },
    { honorableMention: 'VPG Asian Champions League Squad', id:11, name:'Polok', active: true, position:'LB' },
    { honorableMention: 'VPG Asian Champions League, VPG Bangladesh Pro League S2', id:11, name:'Mahdi Anan', active: true, position:'Midfield/GK' },
    { honorableMention: 'VPG Asian Pro League Squad', id:10, name:'Tamim', active: true, position:'RW' },
    { honorableMention: 'VPG Asian Pro League Squad', id:10, name:'Saeem', active: true, position:'CB' },
    { honorableMention: 'VPG Asian Pro League Squad', id:10, name:'Shikky', active: true, position:'CM' },
    { honorableMention: 'VPG Asian Pro League Squad', id:10, name:'Masrur', active: true, position:'CDM' },
    { honorableMention: 'VPG Asian Pro League Squad', id:10, name:'Jholok', active: true, position:'ST' },

]

foundingMember =[{id: 0, name: "Humayan Kabir", position:'Vice Captain'},
                {id: 1, name: "Rafid Ahmed", position: "Self Proclaimed best Player"},
                {id: 2, name: "Ifrat Mitul", position: "Captain"},
                {id: 3, name: "Ayaz Alamgir", position: "Beshi relaxed winger"},
                ]

  constructor() { }

  ngOnInit(): void {
  }

}
