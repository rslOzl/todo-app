import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnInit {

  @Input() message: string |undefined;

  constructor() { }

  ngOnInit() {
  }

}
