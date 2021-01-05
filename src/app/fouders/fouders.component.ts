import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fouders',
  templateUrl: './fouders.component.html',
  styleUrls: ['./fouders.component.scss']
})
export class FoudersComponent implements OnInit {

  @Input() founders :any;
  constructor() { }

  ngOnInit(): void {
  }

}
