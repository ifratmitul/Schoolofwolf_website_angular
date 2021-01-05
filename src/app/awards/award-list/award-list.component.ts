import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.scss']
})
export class AwardListComponent implements OnInit {

  @Input() aw:any;
  constructor() { }

  ngOnInit(): void {
  }

}
