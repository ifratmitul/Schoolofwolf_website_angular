import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards = [

    {player:'Rashad', trophy:'Best Defender', tour: 'Bangladesh Premier League'},
    {player:'Mitul', trophy:'Best Defender', tour: 'Bangladesh premier league'},
    {player:'Ibtehaz', trophy:'Golden Boot', tour: 'Bangladesh premier league'},
    {player:'Arefin', trophy:'Best CDM', tour: '365 League'},
    {player:'Shimu', trophy:'Best CDM', tour: 'Quarantine Cup'},
    {player:'Azan', trophy:'Best Defender', tour: '365 League'},

    {player:'Mitul', trophy:'Golden ball', tour: 'VPG BD S1'},
    {player:'Mitul', trophy:'Golden ball', tour: '365 League'},

  ]

  achv =[ 
  {player:'School of Wolf', trophy:'Winner', tour: '365 Present League'},
  {player:'School of Wolf', trophy:'Winner', tour: 'League title'},
  {player:'School of Wolf', trophy:'Runners up', tour: 'VPG BD Pro League S1'},]
  constructor() { }

  ngOnInit(): void {
  }

}
