import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  moment: any;

  ngOnInit(): void {
    setInterval(() => {
      this.moment = moment().format("DD/MM/yyy HH:mm:ss");
    }, 1000);
  }
}
