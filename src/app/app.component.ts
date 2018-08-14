import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    console.log(window.location.href, "111111appppppp1111111111")
  }
  ngOnInit(){
    console.log("app created")
  }

}
