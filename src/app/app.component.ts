import { Component, OnInit } from '@angular/core';
declare function customInit(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  ngOnInit(): void {
    customInit();
  }
}
