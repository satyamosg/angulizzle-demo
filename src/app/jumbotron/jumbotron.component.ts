import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  welcome = 'Swagat hai mera angulizzle demo pe';
  subtext = 'Lorem ipsum balls text about angular saving the world and having the best code and other languages ';
  textinho = 'Ya mum init'
  name: string;
  contentIsHidden = false;
  menuIsClosed = true;

  constructor() { }

  toggleMenu() {
    this.menuIsClosed = !this.menuIsClosed;
  }

  ngOnInit() {
    this.name="Saty"
  }

}
