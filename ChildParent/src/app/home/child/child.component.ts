import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  @Input() hero:any;
  @Input('master') masterName: string;
  constructor() { }

  ngOnInit() {
  }

}
