import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isLogin : boolean = true;
  isRegister : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.isLogin = false;
  }

  register(){
    this.isRegister = false;
  }

}
